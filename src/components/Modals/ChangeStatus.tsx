import Modal from 'react-bootstrap/Modal';
import { customId } from '../TableOptions';
import ModalHeader from './ModalHeader';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { SVGLoader } from '../SVGLoader';
import { reset, updateTask } from '../../features/Tasks/taskSlice';

const ChangeStatus = ({ show, setShow, id }: any) => {
	const dispatch = useAppDispatch();
	const { updateisError, updatemessage, updateisLoading, updateisSuccess } = useAppSelector((state: any) => state.task);

	const navigate = useNavigate();
	const handleClose = () => setShow(false);


	const [input, setInput] = useState({
		status: "",
	})


	useEffect(() => {
		if (updateisSuccess) {
			toast.success("Task Updated!", { toastId: customId });
			setShow(false)
			dispatch(reset());
		} else if (updateisError) {
			toast.error(updatemessage, { toastId: customId });
		}
		dispatch(reset());
	}, [updateisError, updateisSuccess, updatemessage, dispatch, navigate, setShow]);


	const handleOnChange = (input: any, value: any) => {
		setInput((prevState: any) => ({
			...prevState,
			[input]: value,
		}));
	};

	const value = {
		input: input,
		id: id
	}

	const handleSubmit = (e: any) => {
		e.preventDefault()
		// @ts-ignore 
		dispatch(updateTask(value))
	}


	return (
		<>
			<ToastContainer position="top-right" />
			<Modal show={show} onHide={handleClose} centered>
				<ModalHeader setShow={setShow} headerTitle={"Add Team Member"} />
				<Modal.Body>
					<form onSubmit={handleSubmit}>
						<div className='mb-4'>
							<div className={"input"}>
								<label htmlFor="severity" className={"input__label"} >Change Status</label>
								<select name="priority" value={input.status} onChange={(e: any) => handleOnChange("status", e.target.value)}  >
									<option value="">Select priority</option>
									<option value="NEW">NEW</option>
									<option value="IN_PROGRESS">IN PROGRESS</option>
									<option value="COMPLETED">COMPLETED</option>
									<option value="OUTDATED">OUTDATED</option>
								</select>
							</div>
						</div>
						<button
							type="submit"
							id='custom-btn'
							className='mt-4'
							disabled={updateisLoading} >{updateisLoading ? <SVGLoader width={"30px"} height={"30px"} color={"#fff"} /> : "Update"}</button>
					</form>
				</Modal.Body>
			</Modal >
		</>
	);
}

export default ChangeStatus;