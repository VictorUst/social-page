import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router";


const Login = ({ isAuth, login, captchaUrl }) => {
  const validationShema = yup.object().shape({
    email: yup.string().email('Введите верный email').required('Обязательно'),
    password: yup.string().typeError('Должно быть строкой').required('Обязательно')
  })

  if (isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div>
      <h1>Authorization</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
          rememberMe: false,
          captcha: null
        }}
        onSubmit={(values, {setSubmitting, setFieldError, setStatus}) => {
          login(values.email, values.password, values.rememberMe, values.captcha,  setSubmitting, setFieldError, setStatus);
          setSubmitting(false);
        }}
        validateOnBlur
        validationSchema={validationShema}
      >

        {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, status, captchaUrl }) => (
          <form onSubmit={handleSubmit}>
            <p>
              <label htmlFor={'email'}>email</label><br/>
              <input type={`email`} name={`email`} onChange={handleChange} onBlur={handleBlur} value={values.email}/>
            </p>
            { touched.email && errors.email && <p>{errors.email}</p> }

            <p>
              <label htmlFor={'password'}>Password</label><br/>
              <input type={`password`} name={`password`} onChange={handleChange} onBlur={handleBlur} value={values.password}/>
            </p>
            { touched.password && errors.password && <p>{errors.password}</p> }

            <p>
                <input
                type={'checkbox'}
                name={'rememberMe'}
                onChange={handleChange}
                value={values.rememberMe}
                /><label htmlFor={'rememberMe'}> remember me </label>
            </p>

            <p>
              <label htmlFor={'captcha'}>Symbols for image</label><br/>
              <input type={`text`} name={`captcha`} onChange={handleChange} onBlur={handleBlur} value={values.captcha}/>
              <img src={captchaUrl} alt='captcha' />
            </p>

              <p>
                <div>{status}</div>
              </p>
            <button
              disabled={!isValid && !dirty}
              type={`submit`}
            >Log in</button>
          </form>
        )}
      </Formik>
    </div>
  )
}

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);