import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, removePostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

 // const state = props.store.getState();

 /*
  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  const removeText = () => {
    props.store.dispatch(removePostActionCreator());
  }

  const onPostChange = (text) => {
    const action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };
*/

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    removeText: () => {
      dispatch(removePostActionCreator());
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;