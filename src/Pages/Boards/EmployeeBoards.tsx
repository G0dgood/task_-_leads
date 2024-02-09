
import React, { useEffect, useState } from 'react'
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
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import { SVGLoader } from '../../components/SVGLoader';
import BoardEmpty from '../../assets/Board_Empty.png'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getTask, reset } from '../../features/Tasks/taskSlice';
import ChangeStatus from '../../components/Modals/ChangeStatus';
import AdminChangeStatus from '../../components/Modals/AdminChangeStatus';

const EmployeeBoards = () => {
	const customId = "custom-id-yes";
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [showTask, setShowTask] = useState(false);
	const [show, setShow] = useState(false);
	const [id, setid] = useState<any>(null);
	const [taskdata, setTaskdata] = useState<any>([]);
	const { data, isLoading, message, isError } = useAppSelector((state: any) => state.task)
	const { adminUpdateisSuccess, adminUpdateisLoading } = useAppSelector((state: any) => state.task)
	const { createisError, createisLoading, createmessage, createisSuccess } = useAppSelector((state: any) => state.task)

	console.log('adminUpdateisSuccess', adminUpdateisSuccess)

	useEffect(() => {
		dispatch(getTask())
	}, [dispatch])
	// --- Pagination --- //
	const [entriesPerPage] = useState(() => {
		return localStorage.getItem("reportsPerPages") || "8";
	});

	useEffect(() => {
		localStorage.setItem("reportsPerPages", entriesPerPage);
	}, [entriesPerPage]);

	useEffect(() => {
		toast.dismiss(); // Dismiss any existing toasts
		if (isError) {
			toast.error(message, {
				toastId: customId
			});
			setTimeout(() => {
				dispatch(reset());
			}, 6000);
		}
	}, [dispatch, isError, message]);


	const [tasksData, setTasksData] = useState(
		[{
			id: 1,
			title: '',
			description: '',
			date: '',
			assignee: '',
			status: '',
		},]
	);

	const transformedData = data?.map((item: { id: any; title: any; description: any; dueDate: string | number | Date; taskStatus: string; }) => ({
		id: item.id,
		title: item.title,
		description: item.description,
		date: new Date(item.dueDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
		assignee: 'Ugent', // You can replace this with the actual assignee data if available
		status: item.taskStatus === "NEW" ? "new" :
			item.taskStatus === "IN_PROGRESS" ? "inprogress" :
				item.taskStatus === "COMPLETED" ? "completed" :
					item.taskStatus === "OUTDATED" ? "outdated" : "new", // Converting to lowercase as per your request
	}));

	const [updateTrigger, setUpdateTrigger] = useState(false);

	useEffect(() => {
		setTasksData(transformedData);
		setUpdateTrigger((prev) => !prev);
	}, [updateTrigger]);

	// Call this function whenever you want to trigger the effect

	useEffect(() => {
		if (adminUpdateisSuccess) {
			setTasksData(transformedData)
			dispatch(getTask())
			setUpdateTrigger((prev) => !prev);
		}
	}, [adminUpdateisSuccess, dispatch]);



	const handleDragStart = (e: any, id: any) => {
		e.dataTransfer.setData('text/plain', id);
	};

	const handleDragOver = (e: any) => {
		e.preventDefault();
	};

	const handleDrop = (e: any, targetStatus: any) => {
		e.preventDefault();

		const draggedTaskId = e.dataTransfer.getData('text/plain');
		const updatedTasks = tasksData?.map((task) =>
			task.id.toString() === draggedTaskId ? { ...task, status: targetStatus } : task
		);
		setTasksData(updatedTasks);
	};

	const handelShow = () => {
		setShow(true)
	}

	const renderTasks = (status: any) => {
		const filteredTasks = tasksData.filter((task) => task?.status === status);


		return (
			<div
				className="tasks-board-container"
				onDragOver={handleDragOver}
				onDrop={(e) => handleDrop(e, status)}
			>
				<div className="tasks-board-container-sup">
					<div className="BsFillRocketTake">
						{status === 'new' && <BsFillRocketTakeoffFill size={15} />}
						{status === 'inprogress' && <HiComputerDesktop size={15} />}
						{status === 'completed' && <IoCheckmarkCircleSharp size={16} />}
						{status === 'outdated' && <IoCalendarClear size={15} />}
						{status.charAt(0).toUpperCase() + status.slice(1)} {status === 'new' ? "Tasks" : status === 'inprogress' ? "" : status === 'completed' ? "" : status === 'outdated' && ""}  ({filteredTasks?.length})
					</div>
					<div className="tasks-board-container-sup-icon">
						<span className='FiPlus-circle'>
							<FiPlus size={18} />
						</span>
						<BsThreeDots size={18} />
					</div>
				</div>
				<div>
					{filteredTasks?.map((task) => (
						<div
							key={task?.id}
							className="tasks-board-container-sup-card"
							draggable
							onDragStart={(e) => handleDragStart(e, task?.id)}
						>
							<div className="tasks-board-container-sup-header">
								<div>
									<input
										id={`wp-comment-cookies-consent-${task?.id}`}
										name={`wp-comment-cookies-consent-${task?.id}`}
										type="checkbox"
										value="yes"
										onClick={() => { setid(task?.id); handelShow(); setTaskdata(task) }}
									/>
								</div>
								<div>
									<h5>{task?.title}</h5>
									<p className="tasks-board-container-sup-card-text">{task?.description}</p>
								</div>
							</div>
							<div className="tasks-board-container-second">
								<div className="Ugent-container">
									<div className="Ugent-img"  >
										<FaUserCircle size={35} />
									</div>
									<p className="Ugent-img-text">{task?.date}</p>
								</div>
								<div className="Ugent">{task?.assignee}</div>
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
			<Header pageTitle={"Tasks Board"} />
			<BottomNavigation />
			<AdminChangeStatus show={show} setShow={setShow} id={id} data={taskdata} />
			<main id="dashboard">
				<div className="dashboard-first-card-boards mb-2 mt-2">
					<div>
						<h5 className="dashboard-first-card-h">Tasks Board</h5>
						<p className="dashboard-first-card-p">Create and complete tasks using boards</p>
					</div>
				</div>
				<div>
					{isLoading ? (<div className='loading-center-container'>
						<SVGLoader width={"40px"} height={"40px"} color={"#000"} />
					</div>
					) : data?.length === 0 || data === undefined || data === null ? (
						<div className='loading-center-container'>
							<div className='Home_Empty_State-container'>
								< img src={BoardEmpty} alt='Home_Empty_State' style={{ width: "220px", height: "120px" }} />
								<div>
									<h5 className='dashboard-first-card-h'>No task avialable</h5>
								</div>
							</div>
						</div>
					) : (
						<div className="tasks-board-items-container mt-4">
							{renderTasks('new')}
							{renderTasks('inprogress')}
							{renderTasks('completed')}
							{renderTasks('outdated')}
						</div>
					)}
				</div>

			</main>
		</div>
	)
}

export default EmployeeBoards
