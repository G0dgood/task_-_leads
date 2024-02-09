import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from './Pages/Dashboard/AdminDashboard';
import Login from "./Pages/Login/Login"
import ForgetPassword from "./Pages/Login/ForgotPassword"
import VerifyEmail from "./Pages/Login/VerifyEmail"
import Setting from "./Pages/Settings/Setting"
import Insight from './Pages/Insight/Insight';
import Teams from './Pages/Teams/Teams';
import Boards from './Pages/Boards/Boards';
import NotificationView from './Pages/Notification/NotificationView';
import Register from './Pages/ Register/ Register';
import LandingPage from './Pages/LandingPage/LandingPage';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import GeneralSetting from './Pages/Settings/GeneralSetting';
import PasswordSetting from './Pages/Settings/PasswordSetting';
import Deactivation from './Pages/Settings/Deactivation';
import Notifications from './Pages/Notification/Notifications';
import Support from './Pages/Help&Support/Support';
import TeamMembers from './Pages/Teams/TeamMembers';
import DashboardHUB from './Pages/Dashboard/DashboardHub';
import EmployeeDashboard from './Pages/Dashboard/EmployeeDashboard';
import EmployeeBoards from './Pages/Boards/EmployeeBoards';





function App() {
  // @ts-ignore
  // const users = JSON.parse(localStorage.getItem("SuperTM"));


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/employeedashboard" element={<EmployeeDashboard />} />
          <Route path="/dashboardhub" element={<DashboardHUB />} />
          <Route path="/insight" element={<Insight />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teammembers/:id" element={<TeamMembers />} />
          <Route path="/forgotpassword" element={<ForgetPassword />} />
          <Route path="/verifyemail" element={<VerifyEmail />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/boards" element={<Boards />} />
          <Route path="/employeeboards" element={<EmployeeBoards />} />
          <Route path="/notificationview" element={<NotificationView />} />
          <Route path="/register" element={<Register />} />
          <Route path="/generalsetting" element={<GeneralSetting userData={undefined} />} />
          <Route path="/passwordsetting" element={<PasswordSetting />} />
          <Route path="/deactivation" element={<Deactivation />} />
          <Route path="/notification" element={<Notifications />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;