import React from 'react'
// import outcessLogo from "../../assets/img/Tm.png"
import { IoIosLock } from "react-icons/io";



const ForgotPassword = () => {
  return (
    <div id="login_container">
      <div className='login_header'>
        <header>
          <div className='outcess_logo header_item'>
            {/* <img src={outcessLogo} alt='outcess_logo' /> */}
          </div>
          <div className='explore_section header_item'>
            <button>Explore features</button>
            <button>Get Started</button>
          </div>
        </header>
      </div>
      <div className='login_body'>
        <div id='login_body_container'>
          <div className='super_faces'>
            <div className='super_faces_icon'>

              <div className='password'>
                <span><IoIosLock size={30} /></span>
              </div>

            </div>
          </div>
          <h3>Forgot Password</h3>
          <p>We will send a new password link to email</p>


          <form>
            <div className='sign_up_fields'>
              <div className='field'>
                <label htmlFor="email">Email Address</label>
                <div className='inputField'>
                  <input type="email" />
                </div>
              </div>
            </div>
            <div className='field'>
              <button>Send Password Link</button>
            </div>
          </form>

        </div>

      </div>


      <div className='copyrighgt'>
        <p>&#169; Outcess Team </p>
      </div>

    </div>
  )
}

export default ForgotPassword;