import React from 'react'
import SideNav from '../../components/SideNav'
import Header from '../../components/Header'
import Notifications from './Notifications'
import { IoAlertCircle, IoBug, IoCheckmarkSharp, IoInformationCircle, IoSettings } from 'react-icons/io5'
import BottomNavigation from '../../components/BottomNavigation'

const NotificationView = () => {

	const notificationsData = [
		{
			id: 1,
			type: 'success',
			message: 'Team Task Completed',
			details: "Johnson completed Development team's all tasks",
			extraDetails: 'Additional Info',
			time: 'just now',
		},
		{
			id: 2,
			type: 'warning',
			message: 'Warning Notification',
			details: 'This is a warning message',
			extraDetails: 'Warning details',
			time: '2 minutes ago',
		},
		{
			id: 3,
			type: 'info',
			message: 'Information Notification',
			details: 'This is an informational message',
			extraDetails: 'Info details',
			time: '5 minutes ago',
		},
		{
			id: 4,
			type: 'settings',
			message: 'Settings Update',
			details: 'App settings updated successfully',
			extraDetails: 'Settings details',
			time: '10 minutes ago',
		},
		{
			id: 5,
			type: 'error',
			message: 'Error Notification',
			details: 'An error occurred in the application',
			extraDetails: 'Error details',
			time: '15 minutes ago',
		},
		{
			id: 6,
			type: 'success',
			message: 'New Message',
			details: 'You have received a new message from Sarah',
			extraDetails: 'Message details',
			time: 'just now',
		},
		{
			id: 7,
			type: 'warning',
			message: 'Low Battery',
			details: 'Your device battery is running low',
			extraDetails: 'Battery details',
			time: '2 minutes ago',
		},
		{
			id: 8,
			type: 'info',
			message: 'Meeting Reminder',
			details: 'Don\'t forget about the team meeting at 3 PM',
			extraDetails: 'Meeting details',
			time: '5 minutes ago',
		},
		{
			id: 9,
			type: 'settings',
			message: 'Profile Update',
			details: 'Your profile information has been updated',
			extraDetails: 'Profile details',
			time: '10 minutes ago',
		},
		{
			id: 10,
			type: 'error',
			message: 'Network Issue',
			details: 'There is an issue with the network connection',
			extraDetails: 'Network details',
			time: '15 minutes ago',
		},
	];


	const getIconByType = (type: any) => {
		switch (type) {
			case 'success':
				return <IoCheckmarkSharp size={25} />;
			case 'warning':
				return <IoAlertCircle size={25} />;
			case 'info':
				return <IoInformationCircle size={25} />;
			case 'settings':
				return <IoSettings size={25} />;
			case 'error':
				return <IoBug size={25} />;
			default:
				return null;
		}
	};

	const NotificationList = ({ notifications }: any) => (
		<div>
			{notifications?.map((notification: any) => (
				<div className='personal-details-header-noti-container' key={notification.id}>
					<div className='personal-details-header-noti-container-sub'>
						<div className='noti-container-sub-icon'>
							{getIconByType(notification.type)}
						</div>
						<div>
							<h5 className='noti-container-sub-icon-h5'>{notification.message}</h5>
							<div className='noti-container-sub-icon-p'>{notification.details} <span className='noti-container-sub-icon-p-span'>{notification.extraDetails}</span></div>
						</div>
					</div>
					<div className='noti-container-sub-icon-p-now'>{notification.time}</div>
				</div>
			))}
		</div>
	);

	return (
		<div id="page-wrapper">
			<SideNav />
			<Header pageTitle={"Notifications"} />
			<BottomNavigation />
			<main >
				<div id="notificationview-container">
					<NotificationList notifications={notificationsData} />
				</div>
			</main>
		</div>
	)
}

export default NotificationView
