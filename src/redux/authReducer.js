import { authAPI } from '../api/api';

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';

const initialState = {
      userId: null,
      email: null,
      login: null,
      isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USER_DATA:
          return {
            ...state,
            ...action.payload
          }
      default:
          return state;
    }
}

const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const getAuthUserData = () => async (dispatch) => {
  const data = await authAPI.getAuth();
  if (data.resultCode === 0) {
    const {id, email, login} = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
}

export const login = (email, password, rememberMe, setStatus) => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(getAuthUserData());
  }
  else {
    setStatus(data.messages);
  }
}

export const logout = () => async (dispatch) => {
  const data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
}

export default authReducer;