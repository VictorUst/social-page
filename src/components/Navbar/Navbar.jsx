import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
import NavbarFriends from './NavbarFriends/NavbarFriends';

const Navbar = (props) => {

  // const friendsElements = props.state.friends.map( el => <NavbarFriends id={el.id} name={el.name} avatar={el.avatar} />);

  return (
      <nav className={classes.nav}>
        <div className={classes.item}>
          <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/users' activeClassName={classes.active}>Users</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink>
        </div>
        <div className={classes.item + ' ' + classes.friends}>
          <NavLink to='/friends' activeClassName={classes.active}>Friends</NavLink>
          <div className={classes.friends_contanier}>
             { /* friendsElements */ }
          </div>
        </div>
      </nav>
  );
}

export default Navbar;