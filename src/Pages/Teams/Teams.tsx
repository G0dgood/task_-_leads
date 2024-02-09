import { useState } from 'react'
import SideNav from '../../components/SideNav'
import Header from '../../components/Header'
import { FiPlus } from 'react-icons/fi'
// import { BsPencil, BsThreeDots, BsTrash } from 'react-icons/bs'
// import { FaRegUser, FaUserCircle } from 'react-icons/fa'
// import { TiUserOutline } from "react-icons/ti";
import CreateTeam from '../../components/Modals/CreateTeam'
import BottomNavigation from '../../components/BottomNavigation'
import { useAppDispatch, } from '../../store/useStore'
// import { getTeam, reset } from '../../features/Team/teamSlice'
import { SVGLoader } from '../../components/SVGLoader'
// import { toast } from 'react-toastify'
// import { customId } from '../../components/TableOptions'
import AssignTeamMember from '../../components/Modals/AssignTeamMember'
import HomeEmpty from '../../assets/img/Home_Empty_State.png'
import { useNavigate } from 'react-router-dom'
import { RiFilter2Fill } from "react-icons/ri";
// import FilterModal from '../../components/FilterModal'
import { RiArrowUpDownFill } from "react-icons/ri";
import ModalHeader from '../../components/Modals/ModalHeader'

const Teams = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	// const { data, isLoading, message, isError } = useAppSelector((state: any) => state.team)
	// const { createisSuccess } = useAppSelector((state: any) => state.team)
	const [showTeam, setShowTeam] = useState(false);
	const [showAssignMember, setShowAssignMember] = useState(false);
	const [selectedTeam, setSelectedTeam] = useState(null);
	const [startDates, setStartDates] = useState();
	const [endDates, setEndDates] = useState();
	const [show, setShow] = useState(false);

	// --- Pagination --- //
	// const [entriesPerPage, setEntriesPerPage] = useState(() => {
	// 	return localStorage.getItem("reportsPerPage") || "8";
	// });





	// useEffect(() => {
	// 	if (isError) {
	// 		toast.error(message, {
	// 			toastId: customId
	// 		});
	// 		dispatch(reset())
	// 	}
	// }, [dispatch, isError, message]);

	// useEffect(() => {
	// 	dispatch(getTeam());
	// 	if (createisSuccess) {
	// 		dispatch(getTeam());
	// 	}
	// }, [createisSuccess, dispatch]);

	// const handleTeamOptionsClick = (teamId: any) => {
	// 	setSelectedTeam(teamId);
	// };

	// const closeTeamOptions = () => {
	// 	setSelectedTeam(null);
	// };

	const [tasksData, setTasksData] = useState([
		{
			id: 1,
			firstname: 'John',
			lastname: 'Doe',
			email: 'johndoe@gmail.com',
			phoneNumber: '123304947',
			location: 'new york',

		},
		{
			id: 2,
			firstname: 'Grace',
			lastname: 'Wall',
			email: 'gracewall@gmail.com',
			phoneNumber: '0873436282',
			location: 'new jersey',

		},
		{
			id: 3,
			firstname: 'Daniel',
			lastname: 'Johnson',
			email: 'danieljohnsion@gmail.com',
			phoneNumber: '1246474959',
			location: 'Atlanta',

		},
		{
			id: 4,
			firstname: 'Erik',
			lastname: 'Moore',
			email: 'erikmoore@yahoo.uk',
			phoneNumber: '093574884',
			location: 'Georgia',

		},
		{
			id: 5,
			firstname: 'Diana',
			lastname: 'Griffins',
			email: 'dianagriffins@yahoo.com',
			phoneNumber: '090876543',
			location: 'Canada',

		},
	]);

	const teamsData = [
		{
			id: 1,
			teamName: 'UI/UX Design Lead',
			members: 36,
		},
		{
			id: 2,
			teamName: 'Development Lead',
			members: 48,
		},
		{
			id: 3,
			teamName: 'Marketing Lead',
			members: 25,
		},
		{
			id: 4,
			teamName: 'Quality Assurance Lead',
			members: 30,
		},
		{
			id: 5,
			teamName: 'Product Management Lead',
			members: 22,
		},
		{
			id: 6,
			teamName: 'Customer Support Lead',
			members: 15,
		},
		{
			id: 7,
			teamName: 'Sales Lead',
			members: 40,
		},
		{
			id: 8,
			teamName: 'Research and Development Lead',
			members: 28,
		},
		// Add more teams as needed
	];

	const handleFilter = () => {
		if (!show) {
			setShow(true)
		} else {
			setShow(false)
		}
	}


	return (
		<div id="page-wrapper">
			<SideNav />
			<Header pageTitle={"Leads"} />
			<BottomNavigation />
			<main id="dashboard">
				<div className='dashboard-first-card-boards mb-2 mt-2'>
					<div>
						<h5 className='dashboard-first-card-h'>My Leads</h5>
						<p className='dashboard-first-card-p'>8 Total leads are added</p>
					</div>
					{/* <div className='searchandfilter'>
						<input placeholder='search...' />
					</div> */}
					<div className='dashboard-first-card-filter'>
						<div className='dashboard-first-icon-boards'  >
							<RiArrowUpDownFill size={18} /> <span>Sort</span>
						</div>
						<div className='dashboard-first-icon-boards' onClick={handleFilter}>
							<RiFilter2Fill size={18} /> <span>Filter</span>
							{false && <div className='dashboard-first-icon-boards-subs' >
								{/* <div className='filter-cards-one'>Filter</div> */}
								<ModalHeader setShow={setShow} headerTitle={"Filter"} sys={"style-modal-padding "} />
								<div className='filter-cards-one-btw-shadow '  >
									<div className='filter-cards-one-btw  ' >
										<div>Date Range</div>
										<div className='filter-reset'>Reset</div>
									</div>
									<div className='filter-cards-one-btw-second'>
										<div className='mt-3'>
											<p className='filter-reset'>from:</p>
											<input type='data' />
										</div>
										<div className='mt-3'>
											<p className='filter-reset'>to:</p>
											<input />
										</div>
									</div>
								</div>
								<div className='filter-cards-one-btw-shadow'>
									<div className='filter-cards-one-btw'>
										<div>Activity type</div>
										<div className='filter-reset'>Reset</div>
									</div>
									<div>
										<div>
											<input />
										</div>
									</div>
								</div>
								<div className='filter-cards-one-btw-shadow'>
									<div className='filter-cards-one-btw'>
										<div>Status</div>
										<div className='filter-reset'>Reset</div>
									</div>
									<div>
										<div>
											<input />
										</div>
									</div>
								</div>
								<div className='filter-cards-one-btw-shadow'>
									<div className='filter-cards-one-btw'>
										<div>Keyword Search</div>
										<div className='filter-reset'>Reset</div>
									</div>
									<div>
										<div>
											<input />
										</div>
									</div>
								</div>
								<div className='dashboard-first-icon-button-footer'>
									<div className='dashboard-first-icon-boards'  >
										<span>Reset all</span>
									</div>
									<div className='dashboard-first-icon-boards'  >
										<span>Apply now</span>
									</div>
								</div>
							</div>}


						</div>
						{/* <FilterModal show={show} setShow={setShow} setStartDates={setStartDates} setEndDates={setEndDates} /> */}
						<div className='dashboard-first-icon-boards' onClick={() => setShowTeam(true)}>
							<FiPlus size={18} /> <span>Lead</span>
						</div>
					</div>
				</div>
				<div >
					{false ? (<div className='loading-center-container'>
						<SVGLoader width={"40px"} height={"40px"} color={"#000"} />
					</div>
					) : teamsData?.length === 0 || teamsData === undefined || teamsData === null ? (
						<div className='loading-center-container'>
							<div className='Home_Empty_State-container'>
								< img src={HomeEmpty} alt='Home_Empty_State' />
								<div>
									<h5 className='dashboard-first-card-h'>No lead avialable</h5>
								</div>
							</div>
						</div>
					) : <div className='table-container'>
						{/* {isLoadingAll ? <TableLoader isLoading={isLoadingAll} /> : ""} */}
						<table>
							<thead>
								<tr>
									<th>First Name</th>
									<th>Last Name</th>
									<th>Email</th>
									<th>Phone Number</th>
									<th>Location</th>
									<th>View</th>
								</tr>
							</thead>
							<tbody className="data-table-content">
								{tasksData?.map((item: any, i: any) => (
									<tr key={i}>
										<td >{item.firstname}</td>
										<td >{item.lastname}</td>
										<td >{item.email}</td>
										<td >{item.phoneNumber}</td>
										<td >{item?.location}</td>
										<td >
											<button id='custom-btn-two-active' style={{ whiteSpace: "nowrap" }}>
												View
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>}
				</div>
			</main>


			<AssignTeamMember showAssignMember={showAssignMember} setShowAssignMember={setShowAssignMember} TeamId={selectedTeam} />
			<CreateTeam showTeam={showTeam} setShowTeam={setShowTeam} />

		</div>
	)
}

export default Teams




