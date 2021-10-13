import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
  return (
      <header className={classes.header}>
        <img src='https://decalshouse.co.uk/14054-home_default/vist-decal-sticker.jpg' alt='v1st' />
        <div className={classes.loginBlock}>
          { props.isAuth
            ? <div>{props.login}<br/><button onClick={props.logout}>Log out</button></div>
            : <NavLink to='/login'>Sign in</NavLink> }
        </div>
      </header>
  );
}

export default Header;