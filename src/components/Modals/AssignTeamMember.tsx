import Modal from 'react-bootstrap/Modal';
import { customId, customStyles } from '../TableOptions';
import ModalHeader from './ModalHeader';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import { useEffect, useState } from 'react';
import { createTeamMembers, reset } from '../../features/Team/teamSlice';
import { ToastContainer, toast } from 'react-toastify';
import { SVGLoader } from '../SVGLoader';
import Select from 'react-select'
import { getallReguser } from '../../features/Registration/registrationSlice';

const AssignTeamMember = ({ showAssignMember, setShowAssignMember, TeamId }: any) => {
	const dispatch = useAppDispatch();
	const { dataAll, isErrorAll, messageAll, isLoadingAll } = useAppSelector((state: any) => state.reg);
	const { createTeamMembersisLoading, createTeamMembersisSuccess, createTeamMembersisError, createTeamMembersmessage } = useAppSelector((state: any) => state.team)
	const navigate = useNavigate();
	const handleClose = () => setShowAssignMember(false);
	const [selectedOption, setSelectedOption] = useState(null);
	const [teamid, setTeamid] = useState<any>(TeamId)

	// Data Fetching (Conditional) Effect
	// useEffect(() => {
	// 	// Fetch data when the component is mounted or dispatch changes
	// 	dispatch(getallReguser());
	// }, [dispatch]);





	// useEffect(() => {
	// 	if (createTeamMembersisSuccess) {
	// 		toast.success("Team Members Added successfully", { toastId: customId });
	// 		setShowAssignMember(false)
	// 		dispatch(reset());
	// 	} else if (createTeamMembersisError) {
	// 		toast.error(createTeamMembersmessage, { toastId: customId });
	// 	} else if (isErrorAll) {
	// 		toast.error(messageAll, { toastId: customId });
	// 	}
	// 	dispatch(reset());
	// }, [createTeamMembersisError, createTeamMembersisSuccess, createTeamMembersmessage, dispatch, isErrorAll, messageAll, navigate, setShowAssignMember]);


	const allAgents = [] as any;
	dataAll &&
		dataAll?.forEach((employee: any) =>
			allAgents?.push({
				value: employee?.id,
				label: employee?.firstName + " " + employee?.LastName,
			})
		);

	const handleSelectedChange = (selectedOption: any) => {
		setSelectedOption(selectedOption);
		setTeamid(TeamId)
	};


	const [userId, setUserId] = useState<any>(null)

	useEffect(() => {
		// @ts-ignore  
		setUserId(selectedOption?.value)
	}, [selectedOption])




	const handleSubmit = (e: any) => {
		e.preventDefault()
		const inputs = {
			id: teamid,
			value: { "userId": userId }
		};
		// @ts-ignore 
		// dispatch(createTeamMembers(inputs))
	}

	return (
		<>
			<ToastContainer position="top-right" />
			<Modal show={showAssignMember} onHide={handleClose} centered>
				<ModalHeader setShow={setShowAssignMember} headerTitle={"Add Team Member"} />
				<Modal.Body>
					<form onSubmit={handleSubmit}>
						<div className='mb-4'>
							<Select name="AssignedTo" id="register-select"
								value={selectedOption}
								onChange={handleSelectedChange}
								options={allAgents}
								isDisabled={isLoadingAll}
								isLoading={isLoadingAll}
								styles={customStyles} />
						</div>
						<button
							type="submit"
							id='custom-btn'
							className='mt-4'
							disabled={createTeamMembersisLoading} >{createTeamMembersisLoading ? <SVGLoader width={"30px"} height={"30px"} color={"#fff"} /> : "Assign"}</button>
					</form>
				</Modal.Body>
			</Modal >
		</>
	);
}

export default AssignTeamMember;