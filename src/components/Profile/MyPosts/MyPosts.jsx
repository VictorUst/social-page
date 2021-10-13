import React from 'react';
// import { addPostActionCreator, removePostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Formik } from 'formik';
import * as yup from "yup";

/*
const AddPostForm = (props) => {
  const validateShema = yup.object().shape({
    textarea: yup.string().typeError('Должно быть строкой');
  })
  return (
    <div>
      <Formik
        initialValues={{
          textarea: ''
        }}
        validateOnBlur
        onSubmit={(value) => {console.log(value)}}
        validateShema={validateShema}
      >
        {({values, errors, handleChange, handleBlur, handleSubmit }) => (
          <div>
            <p>
              <textarea name={`textarea`} value={values.textarea} onChange={handleChange} />
            </p>
            <button onClick={ handleSubmit }>Add post</button>
            <button onClick={ handleSubmit }>Clear</button>
          </div>
        )}
      </Formik>
    </div>
  )
}
*/


const MyPosts = React.memo((props) => {
  console.log('render');
  const postsElements = props.posts.map( el => <Post id={el.id} message={el.message} count={el.count} />);

  const newPostElement = React.createRef(); //создает ссылку

  const onAddPost = () => {
    props.addPost();
    //props.dispatch(addPostActionCreator());
  }

  const onRemoveText = () => {
    props.removeText();
    //props.dispatch(removePostActionCreator());
  }

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
    //const action = updateNewPostTextActionCreator(text);
    //props.dispatch(action);
  };

  return (
        <div className={classes.posts_block}>
          <h3>My posts</h3>
          <div>
            <textarea name={`textarea`} ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
          </div>
          <div>
            <button onClick={ onAddPost }>Add post</button>
            <button onClick={ onRemoveText }>Clear</button>
          </div>
          <div className={classes.posts}>
           { postsElements }
          </div>
        </div>
  );
});

export default MyPosts;