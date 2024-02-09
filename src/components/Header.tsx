import { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { BsBell } from "react-icons/bs";
import HeaderNotification from '../Pages/Notification/HeaderNotification';
import HeaderCreateTask from '../Pages/Notification/HeaderCreateTask';
import ProfileDropDown from './ProfileDropDown';
import CreateTask from './Modals/CreateTask';
import CreateTeam from './Modals/CreateTeam';
import SearchInput from './SearchInput';

const Header = ({ pageTitle }: any) => {
  // @ts-ignore  
  const userInfo = JSON.parse(localStorage.getItem("taskmaneger"));

  const [notification, setNotification] = useState(false)
  const [createTask, setCreateTask] = useState(false)
  const [profile, setProfile] = useState(false)
  const [showTask, setShowTask] = useState(false);
  const [showTeam, setShowTeam] = useState(false);

  useEffect(() => {
    if (notification) {
      setCreateTask(false)
      setProfile(false)
    } else if (createTask) {
      setNotification(false)
      setProfile(false)
    } else if (profile) {
      setNotification(false)
      setCreateTask(false)
    }
  }, [createTask, notification, profile])




  const [title, setTitle] = useState("Super | Leads Manager");
  document.title = title;

  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    if (window.location.pathname === "/home") {
      setTitle("STM | Dashboard");
    } else if (window.location.pathname === "/admindashboard") {
      setTitle("STM | Dashboard");
    }
  }, [title]);

  return (
    <div id="header">
      <div className="header-pageTitle">{pageTitle}</div>
      <SearchInput />
      <div className='FaPlus-icon-container' >
        {/* <span className='FaPlus-icon' onMouseEnter={() => setCreateTask(true)} onMouseLeave={() => setCreateTask(false)}>
          <FaPlus size={18} />
          {createTask && <HeaderCreateTask setShowTask={setShowTask} setShowTeam={setShowTeam} />}

        </span> */}
        <span className='FaPlus-bell' onMouseEnter={() => setNotification(true)} onMouseLeave={() => setNotification(false)}>
          <BsBell size={18} />
          {notification && <HeaderNotification />}
        </span>
        <span className='FaPlus-name' onMouseEnter={() => setProfile(true)} onMouseLeave={() => setProfile(false)}>
          {"G"}
          {profile && <ProfileDropDown />}
        </span>
      </div>
      {showTask && <CreateTask showTask={showTask} setShowTask={setShowTask} />}
      {showTeam && <CreateTeam showTeam={showTeam} setShowTeam={setShowTeam} />}
    </div>
  )
}

export default Header;





// {/* <NetworkConnetion /> */ }
//       <ToastContainer position="top-right" />
//       <div style={{ position: "relative" }}>
//         {/* <Button onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
//           <div className="user_avatar" >
//             {userInfo.user.firstName.charAt(0)}{userInfo.user.LastName.charAt(0)}
//           </div>
//         </Button> */}
//         {/* <DrawerComponent isOpen={isDrawerOpen} onClose={toggleDrawer} /> */}

//       </div>