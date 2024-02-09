import { FaRegSquareCheck } from 'react-icons/fa6'
import { FiUsers } from "react-icons/fi";
 

const HeaderCreateTask = ({ setShowTask, setShowTeam }: any) => {


	return (
		<div className='CreateTask'>
			<p className='notification-header-text'>Create Task</p>
			<div className='notification-card' onClick={() => setShowTask(true)}>
				<div className='notification-icon' >
					<FaRegSquareCheck size={25} />
				</div>
				<div>
					<h5>Create Task</h5>
					<p className='notification-text'>Create your tasks now</p>
				</div>
			</div>
			<div className='notification-card' onClick={() => setShowTeam(true)}>
				<div className='notification-icon'>
					<FiUsers size={25} />
				</div>
				<div>
					<h5>Create Team</h5>
					<p className='notification-text'>Create your tasks now</p>
				</div>
			</div>
			{/* <div className='notification-card'>
				<div className='notification-icon'>
					<MdOutlineSpaceDashboard size={25} />
				</div>
				<div>
					<h5>Create Board</h5>
					<p className='notification-text'>Create your tasks now</p>
				</div>
			</div> */}
			{/* <div className='notification-card'>
				<div className='notification-icon'>
					<HiOutlineCalendar size={25} />
				</div>
				<div>
					<h5>Create Timeline</h5>
					<p className='notification-text'>Create your tasks now</p>
				</div>
			</div> */}

		</div>
	)
}

export default HeaderCreateTask