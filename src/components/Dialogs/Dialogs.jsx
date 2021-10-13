import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router';
import { Formik } from 'formik';
import * as yup from "yup";

const Dialogs = (props) => {

  const state = props.dialogsPage;

  const dialogsElements = state.dialogs.map( el => <DialogItem  key={el.id} id={el.id} name={el.name} avatar={el.avatar}/>)

  const messagesElements = state.messages.map( el => <Message key={el.id} id={el.id} message={el.message} />)

  const newMessageText = state.newMessageText;

  const onSendMessageClick = () => {
    props.sendMessage();
  }

  const onMessageTextChange = (e) => {
    const text = e.target.value;
    props.updateNewMessageBody(text);
  }

  if (!props.isAuth) {
    return <Redirect to={'/login'} />
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>
        { dialogsElements }
      </div>
      <div className={classes.messages}>
        <div>{ messagesElements }</div>
        <div>
          <div><textarea placeholder='Enter your message' value={ newMessageText } onChange={ onMessageTextChange } /></div>
          <div><button onClick= { onSendMessageClick }>Send</button></div>
        </div>
      </div>
    </div>
  )
}

/*
const AddMessageForm = (props) => {
  const validationShema = yup.object().shape({
    newMessageText: yup.string().typeError('Должно быть строкой'),
  })
  return (
    <Formik
      initialValues={{
        newMessageText: ''
      }}
      onSubmit={(values, { setSubmitting }) => {
        props.sendMessage(values.newMessageBody);
        setSubmitting(false);
      }}
      validationSchema={validationShema}
    >
      {
        ({values, errors, touched, handleSubmit, handleChange, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <textarea
                placeholder='Enter your message'
                value={ values.newMessageText }
                onChange={ handleChange }
              />
              <button type="submit" disabled={isSubmitting}>Send</button>
            </div>
          </form>
        )
      }
    </Formik>
  )
}
*/
export default Dialogs;