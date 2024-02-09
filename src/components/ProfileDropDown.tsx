import { BiHelpCircle } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { TiUserAddOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../features/Auth/authSlice";
import { useAppDispatch, useAppSelector } from "../store/useStore";
import { SVGLoader } from "./SVGLoader";
import { useEffect } from "react";
import { toast } from "react-toastify";

const ProfileDropDown = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate();
	const customId = "custom-id-yes";
	const { isLoadinglogout, isErrorlogout, messagelogout, isSuccesslogout } = useAppSelector((state: { auth: any; }) => state.auth)
	// @ts-ignore  
	// const userInfo = JSON.parse(localStorage.getItem("taskmaneger"));

	const handleLogout = () => {
		// dispatch(logout())
		navigate("/login");
	}
	// useEffect(() => {
	// 	if (isErrorlogout) {
	// 		localStorage.removeItem('taskmaneger');
	// 		toast.error(messagelogout, {
	// 			toastId: customId
	// 		});
	// 		dispatch(reset());
	// 	}
	// }, [dispatch, isErrorlogout, messagelogout]);

	// useEffect(() => {
	// 	if (isSuccesslogout) {
	// 		dispatch(reset());
	// 		navigate("/login")
	// 		localStorage.removeItem('taskmaneger');
	// 	} else if (isErrorlogout) {
	// 		dispatch(reset());
	// 		navigate("/login")
	// 		localStorage.removeItem('taskmaneger');
	// 	}
	// }, [dispatch, isErrorlogout, isSuccesslogout, navigate])

	// useEffect(() => {
	// 	if (!userInfo || userInfo == null) {
	// 		localStorage.removeItem('taskmaneger');
	// 		dispatch(reset());
	// 		navigate("/login");
	// 	}
	// }, [dispatch, navigate, userInfo]);



	return (
		<div className='notification-profile'>
			<div className='notification-card' onClick={() => navigate("/setting")}>
				<div className='notification-icon-profile'>
					{"G"}
				</div>
				<div>
					<p className='notification-text-profile'>My profile</p>
				</div>
			</div>
			<div className='notification-card' onClick={() => navigate("/support")}>
				<div className='notification-icon-profile-sup'>
					<BiHelpCircle size={25} />
				</div>
				<div>
					<p className='notification-text-profile'>Help and Support</p>
				</div>
			</div>
			{/* <div className='notification-card'>
				<div className='notification-icon-profile-sup'>
					<TiUserAddOutline size={25} />
				</div>
				<div>
					<p className='notification-text-profile'>Invite Friends</p>
				</div>
			</div> */}
			<div className='notification-card' onClick={handleLogout}>
				<div className='notification-icon-profile-sup'>
					<MdLogout size={25} />
				</div>
				<div>
					{false ? <SVGLoader width={"30px"} height={"30px"} color={"#000"} /> : <p className='notification-text-profile'>Logout</p>}

				</div>
			</div>
		</div>
	)
}

export default ProfileDropDown