import React from 'react'
import { FiUsers } from "react-icons/fi";
import { FiFile } from "react-icons/fi";
import { IoCheckmarkSharp } from "react-icons/io5";
import { TiUserAddOutline } from "react-icons/ti";
import { BsDot } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const HeaderNotification = () => {
	const navigate = useNavigate();

	return (
		<div className='notification'>
			<p className='notification-header-text'>Notifications</p>
			<div className='notification-card'>
				<div className='notification-icon'>
					<IoCheckmarkSharp size={25} />
				</div>
				<div>
					<div className='notification-noti-flex'>
						<h5 className='notification-now-text'>Team Task Completed</h5>  <BsDot size={22} color='#6a6d70' />  <span className='notification-now'>Now</span>
					</div>
					<p className='notification-text'>Johnson complete <span className='notification-text-side'>Development te...</span></p>
				</div>
			</div>
			<div className='notification-card'>
				<div className='notification-icon'>
					<TiUserAddOutline size={25} />
				</div>
				<div>
					<div className='notification-noti-flex'>
						<h5 className='notification-now-text'>Join Request</h5>
						<BsDot size={22} color='#6a6d70' />  <span className='notification-now'>Now</span>
					</div>
					<p className='notification-text'>Create your tasks now <span className='notification-text-side'>Development te...</span></p>

				</div>
			</div>
			<div className='notification-card'>
				<div className='notification-icon'>
					<FiUsers size={25} />
				</div>
				<div>
					<div className='notification-noti-flex'>
						<h5 className='notification-now-text'>Accepted Team Request</h5>
						<BsDot size={22} color='#6a6d70' />  <span className='notification-now'>Now</span>
					</div>
					<p className='notification-text '>Create your tasks now <span className='notification-text-side'>Development te...</span></p>
				</div>
			</div>
			<div className='notification-card'>
				<div className='notification-icon'>
					<FiFile size={25} />
				</div>
				<div>
					<div className='notification-noti-flex'>
						<h5 className='notification-now-text'>Your Monthly Report</h5>
						<BsDot size={22} color='#6a6d70' />  <span className='notification-now'>Now</span>
					</div>
					<p className='notification-text'>Create your tasks now <span className='notification-text-side'>Development te...</span></p>
				</div>
			</div>
			<div className='notification-buttom-down' onClick={() => navigate("/notificationview")}> <p>See all</p> <FaChevronRight /></div>
		</div>
	)
}

export default HeaderNotification
