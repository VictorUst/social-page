import { Formik } from "formik";
import React from "react";
import * as yup from "yup";
import classes from './ProfileInfo.module.css';

const ProfileDataForm = ({initialValues, profile, onSubmit}) => {
  const validationShema = yup.object().shape({
    fullName: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    aboutMe: yup.string().typeError('Должно быть строкой'),
    lookingForAJobDescription: yup.string().typeError('Должно быть строкой')
  })
  return (
  <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validateOnBlur
      validationSchema={validationShema}
  >
    {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, status }) => (
      <form  onSubmit={handleSubmit}>
        <p>
          <label htmlFor={'fullName'}><b>Full Name</b></label>:<br/>
          <input type={`text`} name={`fullName`} onChange={handleChange} onBlur={handleBlur} value={values.fullName}/>
        </p>
        { touched.fullName && errors.fullName && <p>{errors.fullName}</p> }

        <p>
          <label htmlFor={'lookingForAJob'}><b>Looking for a job</b></label>:<br/> {values.lookingForAJob ? 'yes' : 'no'}
          <input type={`checkbox`} name={`lookingForAJob`} onChange={handleChange} onBlur={handleBlur} value={values.lookingForAJob}/>
        </p>

        <p>
          <label htmlFor={'lookingForAJobDescription'}><b>My professional skills</b></label>:<br/>
          <textarea name={`lookingForAJobDescription`} onChange={handleChange} onBlur={handleBlur} value={values.lookingForAJobDescription} />
        </p>
        { touched.lookingForAJobDescription && errors.lookingForAJobDescription && <p>{errors.lookingForAJobDescription}</p> }

        <p>
          <label htmlFor={'aboutMe'}><b>About me</b></label>:<br/>
          <textarea name={`aboutMe`} onChange={handleChange} onBlur={handleBlur} value={values.aboutMe}/>
        </p>
        { touched.aboutMe && errors.aboutMe && <p>{errors.aboutMe}</p> }

        <p>
          <b>Contacts</b>:<br/> {Object.keys(profile.contacts).map(key => {
                return <div className={classes.contact}>
                  <label htmlFor={key}><b>{key}</b></label>:<br/>
                  <input type={`text`} name={`contacts.${key}`} onChange={handleChange} onBlur={handleBlur} value={values.contacts[key]}/>
                </div>
              })}
        </p>

        <button type={'submit'}>save</button>
      </form>
    )}

  </Formik>
  )
}

export default ProfileDataForm;