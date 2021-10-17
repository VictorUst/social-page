import React, { useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.jfif';
import ProfileDataForm from './ProfileDataForm';


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (values) => {
    saveProfile(values);
    setEditMode(false);
  }

  return (
      <main className={classes.content}>
        <div>
          <img src='https://img5.goodfon.ru/original/2560x1440/3/29/priroda-ozero-peizazh-gornye-vershiny-gory.jpg' className={classes.content_img} alt="Profile Wallpapers" />
        </div>
        <div className={classes.description_block}>
          <img src={profile.photos.large || userPhoto} className={classes.mainPhoto} alt="Profile Avatar" />
          { isOwner && <input type={'file'} onChange={onMainPhotoSelected} /> }

          { editMode
              ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}  />
              : <ProfileData gotToEditMode={() => setEditMode(true)} profile={profile} isOwner={isOwner} /> }

          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
      </main>
  );
}

const ProfileData = ({profile, isOwner, gotToEditMode}) => {
  return <div>
            {isOwner && <div><button onClick={gotToEditMode}>edit</button></div>}
            <div>
              <b>Full Name</b> : {profile.fullName}
            </div>
            <div>
              <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>

            { profile.lookingForAJob &&
              <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
              </div>
            }

            <div>
              <b>About me</b>: {profile.aboutMe}
            </div>

            <div>
              <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
              })}
            </div>
        </div>
}


const Contact = ({contactTitle, contactValue}) => {
  return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;