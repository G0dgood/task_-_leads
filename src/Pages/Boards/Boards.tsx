import { useState } from 'react'
import SideNav from '../../components/SideNav'
import Header from '../../components/Header'
import { FiPlus } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { IoCalendarClear } from "react-icons/io5";
import { HiComputerDesktop } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import CreateTask from '../../components/Modals/CreateTask';
import BottomNavigation from '../../components/BottomNavigation';

const Boards = () => {
	const [showTask, setShowTask] = useState(false);






	const [tasksData, setTasksData] = useState([
		{
			id: 1,
			title: 'Create Wireframes',
			description: 'Design 12 screens for first 2 days...',
			date: '20 Oct, 2022',
			assignee: 'Ugent',
			status: 'new',
		},
		{
			id: 2,
			title: 'Develop Prototype',
			description: 'Code a prototype based on the approved wireframes...',
			date: '25 Oct, 2022',
			assignee: 'Alice',
			status: 'new',
		},
		{
			id: 3,
			title: 'Client Meeting',
			description: 'Schedule and prepare for a client meeting...',
			date: '30 Oct, 2022',
			assignee: 'Bob',
			status: 'new',
		},
		{
			id: 4,
			title: 'Testing Phase',
			description: 'Conduct thorough testing of the prototype...',
			date: '5 Nov, 2022',
			assignee: 'Charlie',
			status: 'completed',
		},
		{
			id: 5,
			title: 'Finalize Design',
			description: 'Incorporate feedback and finalize the UI design...',
			date: '10 Nov, 2022',
			assignee: 'David',
			status: 'outdated',
		},
	]);

	const handleDragStart = (e: any, id: any) => {
		e.dataTransfer.setData('text/plain', id);
	};

	const handleDragOver = (e: any) => {
		e.preventDefault();
	};

	const handleDrop = (e: any, targetStatus: any) => {
		e.preventDefault();

		const draggedTaskId = e.dataTransfer.getData('text/plain');
		const updatedTasks = tasksData.map((task) =>
			task.id.toString() === draggedTaskId ? { ...task, status: targetStatus } : task
		);

		setTasksData(updatedTasks);
	};

	const renderTasks = (status: any) => {
		const filteredTasks = tasksData.filter((task) => task.status === status);

		return (
			<div
				className="tasks-board-container"
				onDragOver={handleDragOver}
				onDrop={(e) => handleDrop(e, status)}
			>
				<div className="tasks-board-container-sup">
					<div className="BsFillRocketTake">
						{status === 'new' && <BsFillRocketTakeoffFill size={15} />}
						{status === 'working' && <HiComputerDesktop size={15} />}
						{status === 'completed' && <IoCheckmarkCircleSharp size={16} />}
						{status === 'outdated' && <IoCalendarClear size={15} />}
						{status.charAt(0).toUpperCase() + status.slice(1)} {status === 'new' ? "Tasks" : status === 'working' ? "On" : status === 'completed' ? "" : status === 'outdated' && ""}  ({filteredTasks.length})
					</div>
					<div className="tasks-board-container-sup-icon">
						<FiPlus size={18} /> <BsThreeDots size={18} />
					</div>
				</div>
				<div>
					{filteredTasks.map((task) => (
						<div
							key={task.id}
							className="tasks-board-container-sup-card"
							draggable
							onDragStart={(e) => handleDragStart(e, task.id)}
						>
							<div className="tasks-board-container-sup-header">
								<div>
									<input
										id={`wp-comment-cookies-consent-${task.id}`}
										name={`wp-comment-cookies-consent-${task.id}`}
										type="checkbox"
										value="yes"
									/>
								</div>
								<div>
									<h5>{task.title}</h5>
									<p className="tasks-board-container-sup-card-text">{task.description}</p>
								</div>
							</div>
							<div className="tasks-board-container-second">
								<div className="Ugent-container">
									<div className="Ugent-img">
										<FaUserCircle size={35} />
									</div>
									<p className="Ugent-img-text">{task.date}</p>
								</div>
								<div className="Ugent">{task.assignee}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	};

	return (
		<div id="page-wrapper">
			<SideNav />
			<Header pageTitle={"Leads Board"} />
			<BottomNavigation />

			<CreateTask showTask={showTask} setShowTask={setShowTask} />
			<main id="dashboard">
				<div className="dashboard-first-card-boards mb-2 mt-2">
					<div>
						<h5 className="dashboard-first-card-h">Leads Board</h5>
						<p className="dashboard-first-card-p">Create and complete leads using boards</p>
					</div>
					<div className="dashboard-first-icon-boards" onClick={() => setShowTask(true)}>
						<FiPlus size={18} /> <span>Add Task</span>
					</div>
				</div>

				<div className="tasks-board-items-container mt-4">
					{renderTasks('new')}
					{renderTasks('working')}
					{renderTasks('completed')}
					{renderTasks('outdated')}
				</div>
			</main>
		</div>
	)
}

export default Boards