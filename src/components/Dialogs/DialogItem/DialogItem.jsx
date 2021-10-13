import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css';

const DialogItem = (props) => {
  const path = '/dialogs/' + props.id;

  return (
        <div className={classes.dialog + ' ' + classes.active}>
          <div className={classes.dialog_img}>
            <img src={props.avatar} alt='avatar' />
          </div>
          <NavLink className={classes.dialog_link} to={path}>{props.name}</NavLink>
        </div>
  )
}

export default DialogItem;