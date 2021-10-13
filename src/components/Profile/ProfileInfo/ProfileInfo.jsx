import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />
  }

  return (
      <main className={classes.content}>
        <div>
          <img src='https://img5.goodfon.ru/original/2560x1440/3/29/priroda-ozero-peizazh-gornye-vershiny-gory.jpg' className={classes.content_img}/>
        </div>
        <div className={classes.description_block}>
          <img src={profile.photos.large} alt='Profile Avatar' />
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
      </main>
  );
}

export default ProfileInfo;