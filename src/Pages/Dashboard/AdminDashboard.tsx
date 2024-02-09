
import Header from '../../components/Header'
import SideNav from '../../components/SideNav'
import { HiOutlineCalendar, HiOutlineChevronRight } from "react-icons/hi";
import { RxFile } from "react-icons/rx";
import { HiOutlineRectangleStack } from 'react-icons/hi2';
import { HiOutlineAtSymbol } from "react-icons/hi2";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import DoughnutChat from '../../components/DoughnutChat';
import LineChart from '../../components/LineChart';
import LinePerformanceChart from '../../components/LinePerformanceChart';
import BottomNavigation from '../../components/BottomNavigation';
import { reset } from '../../features/Auth/authSlice';
import { useAppDispatch } from '../../store/useStore';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate();
	// @ts-ignore  
	// const userInfo = JSON.parse(localStorage.getItem("taskmaneger"));
	// useEffect(() => {
	// 	if (!userInfo || userInfo == null) {
	// 		localStorage.removeItem('taskmanager');
	// 		dispatch(reset());
	// 		navigate("/login");
	// 	}
	// }, [dispatch, navigate, userInfo]);


	return (
		<div>
			<div id="page-wrapper">
				<SideNav />
				<Header pageTitle={"Dashboard"} />
				<BottomNavigation />
				<main id="dashboard">
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
									<p className='task-text'>Facebook Lead</p>
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
									<p className='task-text'>Facebook Lead</p>
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
									<p className='task-text'>YouTube Lead</p>
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
									<p className='task-text'>Twitter Lead</p>
									<h3>23</h3>
								</div>
							</div>
						</div>
					</div>
					<div className='dashboard-center-item-container'>
						<div className='dashboard-center-item'>
							<div className='dashboard-first-card2 mb-2'>
								<div>
									<h5 className='dashboard-first-card-h'>Total Leads done</h5>
									<p className='dashboard-first-card-p'>Task completed in 7 days</p>
								</div>
								<div className='dashboard-first-card-second-icon'>	<PiDotsSixVerticalBold size={20} /></div>
							</div>
							<LineChart />
						</div>
						<div className='dashboard-center-item'>
							<div className='dashboard-first-card2 mb-2'>
								<div>
									<h5 className='dashboard-first-card-h'>Total Leads done</h5>
									<p className='dashboard-first-card-p'>Task completed in 7 days Bar chart</p>
								</div>
								<div className='dashboard-first-card-second-icon'>	<PiDotsSixVerticalBold size={20} /></div>
							</div>
							<DoughnutChat />
							<div className='DoughnutChatIconcon'>
								<div className='DoughnutChatIconconsub'>
									<span className='DoughnutChatIcon1'></span>
									<p>Leads</p>
								</div>
								<div className='DoughnutChatIconconsub'>
									<span className='DoughnutChatIcon2'></span>
									<p>Completed</p>
								</div>
								<div className='DoughnutChatIconconsub'>
									<span className='DoughnutChatIcon3'></span>
									<p>Pending</p>
								</div>
							</div>
						</div>
					</div>
					{/* My Teams Performance */}
					<div className='dashboard-bottom-item-container'>
						<div className='dashboard-first-card2 mb-2'>
							<div>
								<h5 className='dashboard-first-card-h'>My Teams Performance</h5>
								<p className='dashboard-first-card-p'>Teams with leads graph analysis</p>
							</div>
							<div className='dashboard-first-card-second-icon'>	<PiDotsSixVerticalBold size={20} /></div>
						</div>
						<div className='TeamsPerformancechart'>
							<div className='TeamsPerformancechartsub1'>
								<ul className='TeamsPerformanceUL'>
									<li>Development team</li>
									<li>Digi Marketing team</li>
									<li>Product design team</li>
									<li>product design team</li>
									<li>Growth team</li>
								</ul>
							</div>
							<LinePerformanceChart />
						</div>
					</div>
				</main>

			</div>
		</div>
	)
}

export default AdminDashboard
