import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const REMOVE_TEXT = 'REMOVE-TEXT';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

const initialState = { //значение state по умолчанию (первоначальное значение state)
  posts: [
    {id: 1, message:'Hi, how are you?', count: '20'},
    {id: 1, message:'It is my first post', count: '15'}
  ],
  newPostText: '',
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
      case ADD_POST:
        const newPost = {
          id: 5,
          message: state.newPostText,
          likesCount: 0
        };
        return {
          ...state,
          posts: [...state.posts, newPost],
          newPostText: ''                 //очистка после отправки поста
        };
      case UPDATE_NEW_POST_TEXT:
        return {
          ...state,
          newPostText: action.newText

        };
      case REMOVE_TEXT:
        return {
          ...state,
          newPostText: ''
        };
      case SET_STATUS:
        return {
          ...state,
          status: action.status
        };
      case SET_USER_PROFILE:
        return {...state, profile: action.profile};
      case DELETE_POST:
        return {...state, posts: state.posts.filter(p => p.id !== action.postId)};

      default:
        return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const removePostActionCreator = () => ({ type: REMOVE_TEXT });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const getUserProfile = (userId) => async (dispatch) => {
  const data = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(data));
}

export const getStatus = (userId) => async (dispatch) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(setStatus(data));
}

export const updateStatus = (status) => async (dispatch) => {
  const data = await profileAPI.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
}

export default profileReducer;