import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useAppSelector } from "../../store/useStore";
import { reset, resetPassword } from "../../features/Registration/registrationSlice";
import { SVGLoader } from "../SVGLoader";



const ResetPasswordModal = ({ id }: any) => {
	const dispatch = useDispatch();
	const { resetPasswordisLoading, resetPasswordisSuccess, resetPasswordisError, resetPasswordmessage } = useAppSelector((state: { reg: any; }) => state.reg)

	//  Update Current Password State
	const [newPassword, setNewPassword] = useState("");
	const [confirmNewPassword, setConfirmNewPassword] = useState("");
	const value = { id, newPassword }
	const customId = "custom-id-yes";

	const passwordhandelSubmit = (e: any) => {
		e.preventDefault();
		if (newPassword !== confirmNewPassword) {
			toast.error("Password do not match");
		} else {
			// @ts-ignore 
			dispatch(resetPassword(value));
		}
	};



	useEffect(() => {
		if (resetPasswordisError) {
			toast.error(resetPasswordmessage, { toastId: customId });
		}
		else if (resetPasswordisSuccess) {
			setNewPassword("");
			setConfirmNewPassword("");
			toast.success("Password Updated!", {
				toastId: customId
			});
		}
		dispatch(reset());
	}, [dispatch, resetPasswordisSuccess, resetPasswordisError, resetPasswordmessage]);

	return (
		<div>
			<ToastContainer position="top-right" />
			<form onSubmit={passwordhandelSubmit}>
				<div className="user__details-long">
					<div className="input__box mt-5">
						<span className="details">New Password</span>
						<input type="text" placeholder="New Password"
							value={newPassword}
							onChange={(e) => {
								setNewPassword(e.target.value);
							}}
							required />
					</div>
					<div className="input__box">
						<span className="details">Confirm New Password</span>
						<input type="text" placeholder="Confirm New Password"
							value={confirmNewPassword}
							onChange={(e) => {
								setConfirmNewPassword(e.target.value);
							}}
							required />
					</div>

					<button
						id='custom-btn'
						className='mt-4'
						type="submit"
						value="Submit"
						disabled={resetPasswordisLoading && true}>
						{resetPasswordisLoading ? <SVGLoader width={"30px"} height={"30px"} color={"#fff"} /> : "Submit"}

					</button>
				</div>
			</form>
		</div>
	);
};

export default ResetPasswordModal;
