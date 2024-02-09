import { NavLink } from 'react-router-dom';
import { BiHome } from "react-icons/bi";
import { LuUsers } from "react-icons/lu";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { MdInsights } from "react-icons/md";
// import { HiLightningBolt } from "react-icons/hi";
import { FiUserPlus } from "react-icons/fi";
// import { getUserPrivileges } from '../hooks/auth';
import { SiGoogleadsense } from "react-icons/si";

const SideNav = () => {
  // const {
  //   isSuperAdmin,
  //   isSupervisor,
  //   isEmployee,

  // } = getUserPrivileges();


  return (
    <div id="side-nav">
      <div className="logo-area">
        <SiGoogleadsense size={35} className="logo-area-img" />
        <h2>Superleads</h2>
      </div>
      <nav>
        {/* {
          ((isSuperAdmin) || (isSupervisor)) && */}
        <NavLink to="/admindashboard" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }>
          <BiHome size={25} />
          <span>Home</span>
        </NavLink>
        {/* } */}

        {/* {(isEmployee) &&
          <NavLink to="/employeedashboard" className={({ isActive }) =>
            [
              "nav-link",
              isActive ? "active" : null,
            ]
              .filter(Boolean)
              .join(" ")
          }>
            <BiHome size={25} />
            <span>Home</span>
          </NavLink>
        } */}

        {/* {((isSuperAdmin) || (isSupervisor)) && */}
        <div className='nav-link-bar'>
          <NavLink to="/insight" className={({ isActive }) =>
            [
              "nav-link",
              isActive ? "active" : null,
            ]
              .filter(Boolean)
              .join(" ")
          }>
            <MdInsights size={25} />
            <span>Insight</span>
          </NavLink>
        </div>
        {/* } */}

        {/* {((isSuperAdmin) || (isSupervisor)) && */}
        <NavLink to="/teams" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }  >
          <LuUsers size={25} />
          <span>Leads</span>
        </NavLink>
        {/* } */}
        {/* {((isSuperAdmin) || (isSupervisor)) && */}
        <NavLink to="/boards" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }  >
          <HiOutlineRectangleStack size={25} />
          <span>Boards</span>
        </NavLink>
        {/* } */}
        {/* {((isEmployee)) &&
          <NavLink to="/employeeboards" className={({ isActive }) =>
            [
              "nav-link",
              isActive ? "active" : null,
            ]
              .filter(Boolean)
              .join(" ")
          }  >
            <HiOutlineRectangleStack size={25} />
            <span>Boards</span>
          </NavLink>
        } */}
        {/* {(isSuperAdmin) && */}
        <NavLink to="/register" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }  >
          <FiUserPlus size={25} />
          <span>Register</span>
        </NavLink>
        {/* } */}
        {/* <NavLink to="/timeline" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }  >
          <HiOutlineCalendar size={25} />
          <span>Timeline</span>
        </NavLink> */}

      </nav>
    </div>
  )
}

export default SideNav;