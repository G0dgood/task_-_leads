import Modal from 'react-bootstrap/Modal';
import { InputField, customId } from '../TableOptions';
import ModalHeader from './ModalHeader';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import { SVGLoader } from '../SVGLoader';
import { createTask, reset } from '../../features/Tasks/taskSlice';
import { Form } from 'react-bootstrap';
import { convertToISOString } from '../../hooks/date';

const CreateTask = ({ showTask, setShowTask }: any) => {
	// @ts-ignore  
	// const userInfo = JSON.parse(localStorage.getItem("taskmaneger"));
	// const dispatch = useAppDispatch();
	// const { createisError, createisLoading, createmessage, createisSuccess } = useAppSelector((state: any) => state.task)
	// const id = userInfo?.user?.id

	const [input, setInput] = useState({
		title: "",
		taskStatus: "NEW",
		description: "",
		dueDate: "",
		priority: "",
		createdById: ''
	})
	const [severityStyle, setSeverityStyle] = useState<any>({
		background: "transparent",
		width: "0%",
	});



	// useEffect(() => {
	// 	if (createisSuccess) {
	// 		setShowTask(false)
	// 		toast.success("Task created", { toastId: customId });
	// 		setInput({
	// 			title: "",
	// 			taskStatus: "new",
	// 			description: "",
	// 			dueDate: "",
	// 			priority: "",
	// 			createdById: id
	// 		})
	// 		dispatch(reset())
	// 	} else if (createisError) {
	// 		toast.error(createmessage, { toastId: customId });
	// 		dispatch(reset())
	// 	}
	// 	;
	// }, [createisError, createisSuccess, createmessage, dispatch, id, setShowTask]);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		// Convert the expiryDate to ISO format using convertToISOString
		input.dueDate = convertToISOString(input.dueDate);
		// @ts-ignore
		dispatch(createTask(input));
	}

	const handleClose = () => setShowTask(false);


	const handleOnChange = (input: any, value: any) => {
		setInput((prevState: any) => ({
			...prevState,
			[input]: value,
		}));
	};

	useEffect(() => {
		if (input.priority === "LOW") {
			setSeverityStyle(() => ({
				background: "green",
				width: "25%",
			}));
		} else if (input.priority === "MEDIUM") {
			setSeverityStyle(() => ({
				background: "#7149eb",
				width: "50%",
			}));
		} else if (input.priority === "HIGH") {
			setSeverityStyle(() => ({
				background: "red",
				width: "100%",
			}));
		} else {
			setSeverityStyle(() => ({
				background: "#eee9fd",
				width: "100%",
			}));
		}
	}, [input.priority]);


	return (
		<>
			<ToastContainer position="top-right" />
			<Modal show={showTask} onHide={handleClose} centered>
				<ModalHeader setShow={setShowTask} headerTitle={"Create Leads"} />
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<InputField label={"Title"} placeholder={"Design new draft"} className={"mb-4"}
							value={input.title}
							onChange={(e: any) => handleOnChange("title", e.target.value)} />


						<div className='flex-date-input mb-4'>
							<InputField label={"Due date"} type={"date"} className={"100%"}
								value={input.dueDate}
								onChange={(e: any) => handleOnChange("dueDate", e.target.value)} />

						</div>
						<div className={"input"}>
							<label htmlFor="severity" className={"input__label"} >Priority</label>
							<select name="priority" value={input.priority} onChange={(e: any) => handleOnChange("priority", e.target.value)}  >
								<option value="">Select priority</option>
								<option value="LOW">Low</option>
								<option value="MEDIUM">Medium</option>
								<option value="HIGH">High</option>
							</select>
						</div>

						<label htmlFor="severity" style={{ display: "flex", marginBottom: "20px" }} className={"input__label"}>
							Severity
							<span
								style={{
									backgroundColor: severityStyle.background,
									width: severityStyle.width,
									height: 7,
									marginLeft: 7.5,
									borderRadius: 5,
									alignSelf: "center",
									transition: "all .75s",
								}}
							/>
						</label>
						<textarea
							name="message"
							id="message-textarea"
							value={input.description}
							onChange={(e: any) => handleOnChange("description", e.target.value)}
							placeholder="description..."
							rows={4} // Adjust the number of rows as needed
						/>
						<button id='custom-btn' className='mt-4'   >{false ? <SVGLoader width={"30px"} height={"30px"} color={"#fff"} /> : "Create"}</button>
					</Form>
				</Modal.Body>
			</Modal >
		</>
	);
}

export default CreateTask;
