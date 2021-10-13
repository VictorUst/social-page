import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import classes from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';

//import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')); //загружает импорты только в момент использования (при нажатии на этот компонент)

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if(!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className={classes.app_wrapper}>
        <HeaderContainer />
        <Navbar /* state={props.state.navbarPage} */ />
        <div className = {classes.content}>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Route path='/profile/:userId?' render={() => <ProfileContainer /* store={props.store} */ />} />
            <Route path='/dialogs' render={() => <DialogsContainer /> } />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/users' render={() => <UsersContainer /> } />
            <Route path='/login' render={() => <Login /> } />
            <Route path='/settings' render={() => <Settings />} />
          </React.Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);
