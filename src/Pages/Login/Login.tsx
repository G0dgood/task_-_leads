import { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import Copyright from '../../components/Copyright';
import { Formik } from 'formik';
import { useAppDispatch } from '../../store/useStore';
import { ToastContainer } from 'react-toastify';

import * as yup from 'yup'

import { SVGLoader } from '../../components/SVGLoader';
import { SiGoogleadsense } from "react-icons/si";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  // @ts-ignore  
  // const userInfo = JSON.parse(localStorage.getItem("taskmaneger"));
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const signupTrigger: any = document.querySelectorAll(".signup__trigger");
  const signupElement: any = document.querySelector("#signup");
  const signupWrapperElement: any = document.querySelector("#signup-wrapper");

  const openFormFunc = () => {
    setIsSignupOpen(!isSignupOpen);
    signupTrigger[0]?.classList?.toggle("is-trigger-hidden");
    signupElement?.classList?.toggle("is-form-open");
    signupWrapperElement?.classList?.toggle("is-wrapper-open");
  };
  // const { isLoading, isError, message } = useAppSelector((state: { auth: any; }) => state.auth)
  // const { forgetisLoading, forgetisError, forgetmessage, forgetisSuccess } = useAppSelector((state: { auth: any; }) => state.auth)
  const [passwordShown, setPasswordShown] = useState(false);
  const [forget, setForget] = useState(false);
  const [email, setEmail] = useState("");
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };



  // useEffect(() => {
  //   if (isError) {
  //     toast.error(message, {
  //       toastId: customId
  //     });
  //     dispatch(reset())
  //   }
  // }, [dispatch, isError, message]);

  const onSubmitFormlogin = (values: any) => {
    const value = { ...values };
    // @ts-ignore
    // dispatch(login(value))
    navigate('/admindashboard')
  }
  // useEffect(() => {

  //   if (userInfo) {
  //     navigate('/dashboardhub')
  //     // window.location.replace("/dashboardhub");
  //   }
  // }, [userInfo, dispatch, navigate])



  // useEffect(() => {
  //   if (forgetisError) {
  //     toast.error(forgetmessage);
  //   }
  //   else if (forgetisSuccess) {
  //     setEmail("");
  //     toast.success("Forget Password Link has been sent to your email!");

  //   }
  //   dispatch(reset());
  // }, [dispatch, forgetisError, forgetisSuccess, forgetmessage]);

  // const loginValidationSchema = yup.object().shape({
  //   email: yup
  //     .string()
  //     .email("Please enter valid email")
  //     .required('Email Address is Required'),
  //   password: yup.string().min(6, ({ min }) => `Password must be at least ${min} characters`)
  //     .required('Password is required'),
  // })

  // const handleForget = () => {
  //   setForget(!forget);
  // };
  // const handleForgetPassword = () => {
  //   // @ts-ignore
  //   dispatch(forgetPassword(email))
  // };




  return (
    <div className='login-body'>
      <ToastContainer position="top-right" />
      <div className="container-login" >
        <Formik
          // validationSchema={loginValidationSchema}
          initialValues={{
            email: '',
            password: ''
          }}
          onSubmit={onSubmitFormlogin} >
          {({ handleChange, handleSubmit, errors, values,
          }) => (
            <form className="login form" onSubmit={handleSubmit} >
              <span className="login__icon">
                <SiGoogleadsense size={35} className="logo-area-img-login" />
              </span>
              <h2 className="login__title">login Super Leads</h2>
              <div style={{ position: "relative" }}>

                <div className="login__row mb-4">
                  <label className="login__label" htmlFor="lg-em">E-mail    </label>
                  <input className="login__input" id="lg-em" type="email" placeholder="example@email.com"
                    name="username"
                    value={values.email}
                    onChange={handleChange('email')} />
                  {errors.email && <p className="formik-errors">{errors.email}</p>}
                </div>


                <div className="login__row">
                  <label className="login__label" htmlFor="lg-ps">password </label>
                  <input className="login__input" id="lg-ps"
                    placeholder="**********"
                    type={passwordShown ? "text" : "text"}
                    name="password"
                    value={values.password}
                    onChange={handleChange('password')} />
                  {/* <span id="togglePassword" onClick={togglePasswordVisiblity}>
                    {passwordShown ? <BsEye /> : <BsEyeSlash />}
                  </span> */}

                </div>
                {errors.password && <p className="formik-errors"  >{errors.password}</p>}
              </div>
              <div className="login__row">
                <button className="login__button" type="submit"   >{false ? <SVGLoader width={"30px"} height={"30px"} color={"#fff"} /> : "sign in"}</button>
              </div>
              <div className="login__row">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="login__link" onClick={openFormFunc}>forgot your password?</a>
              </div>
            </form>
          )}
        </Formik>

        <form className="signup is-form-open form" id="signup">
          <svg className="svg-icon signup__trigger signup__trigger--fixed" viewBox="0 0 20 20" onClick={openFormFunc}>
            <path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"></path>
          </svg>
          <div className="signup__wrapper is-wrapper-open" id="signup-wrapper">
            <div className="signup__row signup__row--flex">
              <span className="signup__icon">
                <SiGoogleadsense size={35} className="logo-area-img-login" color='#fff' /></span>
              <svg className="svg-icon signup__trigger" viewBox="0 0 20 20" onClick={openFormFunc}>
                <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
              </svg>
            </div>
            <h2 className="signup__title">enter email address.</h2>

            <div className="signup__row">
              <label className="signup__label" htmlFor="su-em">E-Mail</label>
              <input className="signup__input" id="su-em" type="email" placeholder="example@email.com" />
            </div>

            <div className="signup__row">
              <button className="signup__button" type="submit" >sign up</button>
            </div>
            <div className="signup__row" onClick={openFormFunc}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="signup__link" >back to login</a>
            </div>
          </div>
        </form>
      </div>
      <Copyright className={"cp-text1"} />
    </div>
  )
}

export default Login
