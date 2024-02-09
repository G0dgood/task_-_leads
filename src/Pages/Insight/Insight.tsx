import { useState } from 'react'
import SideNav from '../../components/SideNav'
import Header from '../../components/Header'
import { PiDotsSixVerticalBold } from 'react-icons/pi'
import { HiOutlineAtSymbol, HiOutlineCalendar, HiOutlineChevronRight, HiOutlineRectangleStack } from 'react-icons/hi2'
import { RxFile } from 'react-icons/rx'
import { BsPencil, BsThreeDots, BsTrash } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FiPlus } from 'react-icons/fi'
import CreateTask from '../../components/Modals/CreateTask'
import TaskPriorities from './TaskPriorities'
import ThreeinOneBarChart from '../../components/ThreeinOneBarChart'
import BottomNavigation from '../../components/BottomNavigation';
import { useAppDispatch, useAppSelector } from '../../store/useStore'
import { getTeam, reset as Teamreset } from '../../features/Team/teamSlice'
import { toast } from 'react-toastify'
import { customId } from '../../components/TableOptions'
import { useNavigate } from 'react-router-dom'


const Insight = () => {
	const navigate = useNavigate();
	// const { data: task } = useAppSelector((state: any) => state.task)
	// const { data, isLoading, message, isError } = useAppSelector((state: any) => state.team)
	const dispatch = useAppDispatch();
	const [showTask, setShowTask] = useState(false);
	const [selectedTeam, setSelectedTeam] = useState(null);
	const handleTeamOptionsClick = (teamId: any) => {
		setSelectedTeam(teamId);
	};

	const closeTeamOptions = () => {
		setSelectedTeam(null);
	};

	// const TaskStatus = task?.reduce((counts: any, task: any) => {
	// 	const taskStatus = task.taskStatus.toUpperCase(); // Convert to uppercase for case-insensitivity
	// 	counts[taskStatus] = (counts[taskStatus] || 0) + 1;
	// 	return counts;
	// }, {});



	const teamsData = [
		{ name: "John's Team", members: 2, id: 1, },
		{ name: "Alice's Squad", members: 5, id: 2, },
		{ name: "Bob's Crew", members: 3, id: 3, },
		{ name: "Eva's Group", members: 7, id: 4, },
		{ name: "Mike's Ensemble", members: 4, id: 5, },
		{ name: "Sophie's Collective", members: 6, id: 6, },
		{ name: "Alex's Unit", members: 8, id: 7, },
		{ name: "Emma's Assembly", members: 3, id: 8, },
		{ name: "Charlie's Coalition", members: 5, id: 9, },
		{ name: "Olivia's Alliance", members: 4, id: 10, },
		// Add more team data as needed
	];

	const Prioritiesdata = [
		{
			id: 1,
			title: 'Complete UX for new landing page',
			date: '30 Aug 2022',
			time: '11:30AM',
			tag: 'UX',
		},
		{
			id: 2,
			title: 'Implement new feature',
			date: '01 Sep 2022',
			time: '2:00PM',
			tag: 'Development',
		},
		{
			id: 3,
			title: 'Design marketing materials',
			date: '05 Sep 2022',
			time: '10:00AM',
			tag: 'Design',
		},
		{
			id: 4,
			title: 'Review and update documentation',
			date: '10 Sep 2022',
			time: '3:30PM',
			tag: 'Documentation',
		},
	];

	// useEffect(() => {
	// 	dispatch(getTeam());
	// }, [dispatch]);

	// useEffect(() => {
	// 	if (isError) {
	// 		toast.error(message, {
	// 			toastId: customId
	// 		});
	// 		dispatch(Teamreset())
	// 	}
	// }, [dispatch, isError, message]);

	return (
		<div>
			<div id="page-wrapper">
				<SideNav />
				<Header pageTitle={"Insight"} />
				<BottomNavigation />
				<main >
					<div className='dashboard-container-card mb-2'>
						<div className='dashboard-first-card mb-2'>
							<div>
								<h5 className='dashboard-first-card-h'>Hi Johnson, You are almost Done!</h5>
								<p className='dashboard-first-card-p'>Please complete few steps to setup your account completely.</p>
							</div>
							<div className='dashboard-first-card-icon' onClick={() => navigate("/setting")}>Setup Account <HiOutlineChevronRight /></div>
						</div>
						<div className='dashboard-second-card'>
							<div className='dashboard-radius-icon'>
								<div className="dashboard-second-card-circle">
									<div className="inner-content">
										<RxFile size={23} color='#990000' />
									</div>
								</div>
								<div>
									<p className='task-text'>Upcoming Task</p>
									<h3>10.2K</h3>
								</div>
							</div>
							<div className='dashboard-radius-icon'>
								<div className="dashboard-second-card-circle">
									<div className="inner-content">
										<HiOutlineAtSymbol size={25} color='#990000' />
									</div>
								</div>
								<div>
									<p className='task-text'>Inprogress Lead</p>
									<h3>10.2K</h3>
								</div>
							</div>
							<div className='dashboard-radius-icon'>
								<div className="dashboard-second-card-circle">
									<div className="inner-content">
										<HiOutlineRectangleStack size={25} color='#990000' />
									</div>
								</div>
								<div>
									<p className='task-text'>Completed Lead</p>
									<h3>450</h3>
								</div>
							</div>
							<div className='dashboard-radius-icon'>
								<div className="dashboard-second-card-circle">
									<div className="inner-content">
										<HiOutlineCalendar size={25} color='#990000' />
									</div>
								</div>
								<div>
									<p className='task-text'>Overdue Lead</p>
									<h3>23</h3>
								</div>
							</div>
						</div>
					</div>
					<div className='dashboard-center-item-container-insight'>
						<div className='dashboard-center-item'>
							<div className='dashboard-first-card2 mb-2'>
								<div>
									<h5 className='dashboard-first-card-h'>Lead Priorities</h5>
									<p className='dashboard-first-card-p'>Team lead sorted by priority</p>
								</div>
								<div className='dashboard-first-card-second-icon'>
									<div className='dashboard-first-icon-boards-move'>
										<div className="dashboard-first-icon-boards" onClick={() => setShowTask(true)}>
											<FiPlus size={18} /> <span>Lead</span>
										</div>
										<PiDotsSixVerticalBold size={25} />
									</div>
								</div>
							</div>

							<div className='priorities-btn-container'>
								<div className='priorities-btn-active'>4 Upcoming</div>
								<div className='priorities-btn'>2 Overdue</div>
								<div className='priorities-btn'>0 Completed</div>
							</div>
							<div>

								<TaskPriorities Prioritiesdata={Prioritiesdata} />
							</div>
						</div>
						<div className='dashboard-center-item'>
							<div className='dashboard-first-card2 mb-2'>
								<div>
									<h5 className='dashboard-first-card-h'>Total Leads done</h5>
									<p className='dashboard-first-card-p'>Lead completed in 7 days Bar chart</p>
								</div>
								<div className='dashboard-first-card-second-icon'>	<PiDotsSixVerticalBold size={20} /></div>
							</div>

							<ThreeinOneBarChart />
							<div className='DoughnutChatIconcon'>
								<div className='DoughnutChatIconconsub'>
									<span className='DoughnutChatIcon1'></span>
									<p>Completed</p>
								</div>
								<div className='DoughnutChatIconconsub'>
									<span className='DoughnutChatIcon2'></span>
									<p>Pending</p>
								</div>
								<div className='DoughnutChatIconconsub'>
									<span className='DoughnutChatIcon3'></span>
									<p>Overdue</p>
								</div>
							</div>
						</div>
					</div>
					{/* My Teams Performance */}
					<div className='dashboard-bottom-item-container'>
						<div className='dashboard-first-card2 mb-2'>
							<div>
								<h5 className='dashboard-first-card-h'>My Teams</h5>
								<p className='dashboard-first-card-p'>Teams with assigned leads</p>
							</div>
							<div className='dashboard-first-icon-boards-move'>
								<div className="dashboard-first-icon-boards" onClick={() => setShowTask(true)}>
									<FiPlus size={18} /> <span>Lead</span>
								</div>
								<PiDotsSixVerticalBold size={25} />
							</div>
						</div>
						<div className='TeamsPerformancechartteam'>

							<div className='my-teams-flex-direction'>
								{teamsData?.map((team: any, index: any) => (
									<div key={index} className='my-teams'>
										<div className='my-teams-flex'>
											<span></span>
											<div onMouseLeave={closeTeamOptions} className='team-card-options'>
												<BsThreeDots size={20} onClick={() => handleTeamOptionsClick(team.id)} onMouseEnter={() => handleTeamOptionsClick(team.id)} />
												{selectedTeam === team.id && (
													<div className='team-card-dropdown'>
														<div className='team-card-option' onClick={() => setSelectedTeam}>
															<BsPencil size={16} />
															<span>Edit Lead</span>
														</div>
														<div className='team-card-option' onClick={() => console.log('Delete team clicked')}>
															<BsTrash size={16} />
															<span>Delete Lead</span>
														</div>
													</div>
												)}
											</div>
										</div>

										<div className='my-teams-flex-imageContainer'>
											<div className='my-teams-flex-image'>
												<FaUserCircle color='#c5c5c5' size={45} />
											</div>
											<div className='mt-2'>
												{team.name.length > 10 ? `${team.name.slice(0, 10)} Team...` : team.name + " Team"}
											</div>

											<div className='my-teams-flex-text'>{`${team.members} Members`}</div>
										</div>
									</div>
								))}
							</div>

						</div>
					</div>
				</main>
			</div>
			<CreateTask showTask={showTask} setShowTask={setShowTask} />
		</div>
	)
}

export default Insight
