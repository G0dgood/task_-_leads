import { InputField } from "../../components/TableOptions";
import { MdLogout } from "react-icons/md";



const Deactivation = () => {

	return (
		<div id="general-setting-container">
			<section className="personal-details">
				<h3 className="personal-details-header-text">Deactivation Account</h3>
				<div className="mt-4 ">
					<div className="deactivation-container ">
						<div className="deactivation-circle">
							<MdLogout size={22} color="#5d6063" />
						</div>
						<div>
							<h4>Deactivate Account</h4>
							<p className="deactivation-circle-p">You can active your account within 30days using your existing login credentials</p>
						</div>
					</div>
					<div className="deactivation-container mt-4">
						<div className="deactivation-circle">
							<MdLogout size={22} color="#5d6063" />
						</div>
						<div>
							<h4>Deactivate Account</h4>
							<p className="deactivation-circle-p">You can active your account within 30days using your existing login credentials</p>
						</div>
					</div>
				</div>

				<div className="flex-input-button mt-4">
					<InputField label={"What is the reason ? (Optional)"} className={"class-input2"} placeholder={"Write your reason..."} />
				</div>
				<div className="mt-4">
					<h4>Account Deactive or Delete Terms</h4>

					<div className="input-check-container mt-2">
						<input
							id={`wp-comment-cookies-consent-1`}
							name={`wp-comment-cookies-consent-1`}
							type='checkbox'
							value='yes'
						/>
						<p className="deactivation-circle-p">You can active your account within 30days using your existing login credentials</p>
					</div>

				</div>
				<div className="deactivation-bottom-buttom mt-4">
					<button>Deactivate Account</button>
					<button id="delete-account">Delete Account</button>
				</div>
			</section>

		</div>

	)
}

export default Deactivation;