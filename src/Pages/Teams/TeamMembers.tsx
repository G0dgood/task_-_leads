import React, { useEffect, useState } from 'react'
import BottomNavigation from '../../components/BottomNavigation'
import Header from '../../components/Header'
import SideNav from '../../components/SideNav'
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import { toast } from 'react-toastify';
import { getTeammembers, reset } from '../../features/Team/teamSlice';
import { TiUserOutline } from 'react-icons/ti';
import { FaRegUser, FaUserCircle } from 'react-icons/fa';
import { SVGLoader } from '../../components/SVGLoader';
import HomeEmpty from '../../assets/img/Home_Empty_State.png'
import { BsPencil, BsThreeDots, BsTrash } from 'react-icons/bs';

const TeamMembers = () => {
	const { id } = useParams()
	const customId = "custom-id-yes";
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [selectedTeam, setSelectedTeam] = useState(null);
	const [showAssignMember, setShowAssignMember] = useState(false);
	const handleTeamOptionsClick = (teamId: any) => {
		setSelectedTeam(teamId);
	};
	const closeTeamOptions = () => {
		setSelectedTeam(null);
	};
	// const { membersdata, membersisLoading, membersisError, membersmessage } = useAppSelector((state: any) => state.team);




	useEffect(() => {
		// @ts-ignore
		// dispatch(getTeammembers(id))
	}, [dispatch, id])
	// --- Pagination --- //
	const [entriesPerPage] = useState(() => {
		return localStorage.getItem("reportsPerPages") || "8";
	});

	useEffect(() => {
		localStorage.setItem("reportsPerPages", entriesPerPage);
	}, [entriesPerPage]);

	// useEffect(() => {
	// 	toast.dismiss(); // Dismiss any existing toasts
	// 	if (membersisError) {
	// 		toast.error(membersmessage, {
	// 			toastId: customId
	// 		});
	// 		setTimeout(() => {
	// 			dispatch(reset());
	// 		}, 6000);
	// 	}
	// }, [dispatch, membersisError, membersmessage]);

	const teamsData = [
		{
			id: 1,
			teamName: 'UI/UX Design Team',
			members: 36,
		},
		{
			id: 2,
			teamName: 'Development Team',
			members: 48,
		},
		{
			id: 3,
			teamName: 'Marketing Team',
			members: 25,
		},
		{
			id: 4,
			teamName: 'Quality Assurance Team',
			members: 30,
		},
		{
			id: 5,
			teamName: 'Product Management Team',
			members: 22,
		},
		{
			id: 6,
			teamName: 'Customer Support Team',
			members: 15,
		},
		{
			id: 7,
			teamName: 'Sales Team',
			members: 40,
		},
		{
			id: 8,
			teamName: 'Research and Development Team',
			members: 28,
		},
		// Add more teams as needed
	];


	return (
		<div id="page-wrapper">
			<SideNav />
			<Header pageTitle={"Teams"} />
			<BottomNavigation />
			<main id="dashboard">
				<div className='dashboard-first-card-boards mb-2 mt-2'>
					<div>
						<h5 className='dashboard-first-card-h'>My Members</h5>
						<p className='dashboard-first-card-p'>{teamsData?.length} Team Members</p>
					</div>
					<div className='dashboard-first-icon-boards' onClick={() => navigate(-1)}>
						<MdArrowBackIos size={18} /> <span>Back</span>
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
									<h5 className='dashboard-first-card-h'>No team members avialable</h5>
								</div>
							</div>
						</div>
					) : <div className='team-card-main-container'>
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
													<span>Assign Lead</span>
												</div>
												<div className='team-card-option' onClick={() => console.log('Delete team clicked')}>
													<BsTrash size={16} />
													<span>Delete Team</span>
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
										<h5>{(team?.teamName + " " + team?.teamName).length > 25 ? `${team?.teamName?.slice(0, 20)}...` : team?.teamName + " " + team?.teamName}</h5>
									</div>

									{/* <div className='my-teams-flex-text'>{`${team.members} Members`}</div> */}
								</div>
							</div>
						))}
					</div>
					}
				</div>
			</main>
		</div>
	)
}

export default TeamMembers


// 		<div className='team-card-main-container'>
// 	{membersdata?.map((team: any) => (
// 		<div key={team?.id} className='team-card-container' >
// 			<div className='team-card-container-sup'>
// 				<div className='team-card-container-sup-image'>
// 					<FaUserCircle size={45} />
// 				</div>
// 				<div>
// 					<h5>{(team?.user?.firstName + " " + team?.user?.LastName).length > 25 ? `${team?.user?.firstName?.slice(0, 20)}...` : team?.user?.firstName + " " + team?.user?.LastName}</h5>
// 					<div className='team-card-container-sup-ptext'>
// 						<TiUserOutline size={20} />
// 					</div>
// 				</div>
// 			</div>
// 			<div className='team-card-options' onMouseLeave={closeTeamOptions}>
// 				<BsThreeDots size={18} onClick={() => handleTeamOptionsClick(team.id)} onMouseEnter={() => handleTeamOptionsClick(team.id)} />
// 				{selectedTeam === team.id && (
// 					<div className='team-card-dropdown'>
// 						<div className='team-card-option' onClick={() => setShowAssignMember(true)}>
// 							<FaRegUser size={16} />
// 							<span>Assign Task</span>
// 						</div>
// 						<div className='team-card-option' onClick={() => setSelectedTeam}>
// 							<BsPencil size={16} />
// 							<span>Edit Team</span>
// 						</div> */}
// 					  <div className='team-card-option' onClick={() => console.log('Delete team clicked')}>
// 							<BsTrash size={16} />
// 							<span>Delete Team</span>
// 						</div>
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	))}
// </div> 