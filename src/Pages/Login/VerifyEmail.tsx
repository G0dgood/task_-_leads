// import outcessLogo from "../../assets/img/Tm.png"
import { IoMdMail } from "react-icons/io";




const VerifyEmail = () => {
  return (
    <div id="login_container">
      <div className='login_header'>
        <header>
          <div className='outcess_logo header_item'>
            {/* <img src={outcessLogo} alt='outcess_logo'/> */}
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
                <span><IoMdMail size={30} /></span>
              </div>

            </div>
          </div>
          <h3>Verify Email Address</h3>
          <form>
            <div className='sign_up_fields'>
              <div className='field otherfield'>
                <div className='verifyInput'>
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className='field otherfield'>
              <button>Verify Now</button>
            </div>
          </form>
          <a href='/'>still not recieved? Resend</a>
        </div>

      </div>


      <div className='copyrighgt'>
        <p>&#169; Outcess Team </p>
      </div>

    </div>
  )
}

export default VerifyEmail;