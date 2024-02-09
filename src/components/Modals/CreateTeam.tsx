import Modal from 'react-bootstrap/Modal';
import { InputField, customId } from '../TableOptions';
import ModalHeader from './ModalHeader';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import { useEffect } from 'react';
import { createTeams, reset } from '../../features/Team/teamSlice';
import { ToastContainer, toast } from 'react-toastify';
import { SVGLoader } from '../SVGLoader';
import { Formik } from 'formik';
import * as yup from 'yup'

const CreateTeam = ({ showTeam, setShowTeam }: any) => {

	const dispatch = useAppDispatch();
	// const { createisLoading, createisSuccess, createisError, createmessage } = useAppSelector((state: any) => state.team)
	const navigate = useNavigate();
	const handleClose = () => setShowTeam(false);



	// useEffect(() => {
	// 	if (createisSuccess) {
	// 		toast.success("Team created successfully", { toastId: customId });
	// 		setShowTeam(false)
	// 	} else if (createisError) {
	// 		toast.error(createmessage, { toastId: customId });
	// 	}
	// 	dispatch(reset());
	// }, [createisError, createisSuccess, createmessage, dispatch, navigate, setShowTeam]);


	const handleCreateTeam = (values: any) => {
		const input = { ...values };
		// @ts-ignore
		dispatch(createTeams(input))
	}
	const loginValidationSchema = yup.object().shape({
		teamName: yup.string().required('Team Name is Required'),
		description: yup.string().required('Description is Required'),
	})

	return (
		<>
			<ToastContainer position="top-right" />
			<Modal show={showTeam} onHide={handleClose} centered>
				<ModalHeader setShow={setShowTeam} headerTitle={"Create Lead"} />
				<Modal.Body>
					<Formik
						validationSchema={loginValidationSchema}
						initialValues={{
							teamName: "",
							description: "",
						}}
						onSubmit={handleCreateTeam} >
						{({ handleChange, handleSubmit, errors, values,
						}) => (
							<form onSubmit={handleSubmit}>
								<div className='mb-4'>

									<InputField
										label={"Lead Name"}
										placeholder={"Design new draft"}
										value={values.teamName}
										onChange={handleChange("teamName")}
										error={errors.teamName && <p className="formik-errors">{errors.teamName}</p>}
									/>
								</div>

								<InputField
									label={"Description"}
									placeholder={"@john"}
									className={" "}
									value={values.description}
									onChange={handleChange("description")}
									error={errors.description && <p className="formik-errors">{errors.description}</p>}
								/>
								<button
									type="submit"
									id='custom-btn'
									className='mt-4'
								>{false ? <SVGLoader width={"30px"} height={"30px"} color={"#fff"} /> : "Create"}</button>
							</form>
						)}
					</Formik>
				</Modal.Body>
			</Modal >
		</>
	);
}

export default CreateTeam;

