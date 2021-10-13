import React from 'react';
import classes from './NavbarFriends.module.css';

const NavbarFriends = (props) => {
  return (
    <div className={classes.friend}>
      <img src={props.avatar} alt='avatar' />
      <div className={classes.friend_name}>{props.name}</div>
    </div>
  )
};

export default NavbarFriends;