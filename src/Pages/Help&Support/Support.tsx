import BottomNavigation from '../../components/BottomNavigation'
import Header from '../../components/Header'
import SideNav from '../../components/SideNav'
import { FiMail } from "react-icons/fi";
import { BsChat } from "react-icons/bs";
import { MdRocketLaunch } from "react-icons/md";
import { IoCard } from "react-icons/io5";
import { FiFileText } from "react-icons/fi";
import { FaArrowRightArrowLeft } from "react-icons/fa6"
import { GoPlus } from "react-icons/go";
import { Accordion } from 'react-bootstrap';
import emailImage from '../../assets/img/Help_and_support.png'
 

const Support = () => {

	const teamsData = [
		{ name: "Getting Started", post: 30, icon: <MdRocketLaunch size='25' color='#6F47EB' /> },
		{ name: "Payment", post: 23, icon: <IoCard size='25' color='#6F47EB' /> },
		{ name: "How to use", post: 46, icon: <FiFileText size='25' color='#6F47EB' /> },
		{ name: "Intergration", post: 14, icon: <FaArrowRightArrowLeft size='25' color='#6F47EB' /> },
	];
	return (
		<div>
			<div id="page-wrapper">
				<SideNav />
				<Header pageTitle={"Support"} />
				<BottomNavigation />
				<main >
					<div id='notificationview-container'>
						<div className='dashboard-first-card-support mb-2'>
							<div>
								<h5 className='dashboard-first-card-h'>Help & Support</h5>
								<p className='dashboard-first-card-p'>You can find answer and get direct support here.</p>
							</div>
							<div className='dashboard-first-card-support-flex'>
								<div className='dashboard-first-card-icon-support dashboard-first-fimail'><BsChat size={15} /> <span>Chat Support</span></div>
								<div className='dashboard-first-card-icon dashboard-first-fimail'><FiMail size={15} /> <span>Email Support</span></div>
							</div>
						</div>
						<div className='dashboard-first-support-card mt-4'>
							{teamsData.map((team, index) => (
								<div key={index} className='my-teams'>
									<div className='my-teams-flex'>
										<span></span>
									</div>
									<div className='my-teams-flex-imageContainer'>
										<div className='my-teams-flex-image-post'>
											{team.icon}
										</div>
										<div className='mt-2'>{team.name}</div>
										<div className='my-teams-flex-text'>{`${team.post}+ blog Post`}</div>
									</div>
								</div>
							))}
						</div>
						<div className='dashboard-first-support-card-second mt-4'>
							<div className='support-card-second'>
								<h3>Frequently Asked Questions</h3>
								<div className='dashboard-first-card-icon-support dashboard-first-fimail'><GoPlus size={15} /> <span>Chat Support</span></div>
							</div>
							<Accordion defaultActiveKey="0">
								<Accordion.Item eventKey="0">
									<Accordion.Header>How to use super task?</Accordion.Header>
									<Accordion.Body>
										Lorem i      psum dolor sit amet, consectetur adipiscing elit, sed do
										eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
										minim veniam, quis nostrud exercitation ullamco laboris nisi ut
										aliquip ex ea commodo consequat. Duis aute irure dolor in
										reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
										pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
										culpa qui officia deserunt mollit anim id est laborum.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>How to download super task UI Kit? </Accordion.Header>
									<Accordion.Body>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
										eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
										minim veniam, quis nostrud exercitation ullamco laboris nisi ut
										aliquip ex ea commodo consequat. Duis aute irure dolor in
										reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
										pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
										culpa qui officia deserunt mollit anim id est laborum.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>How to use Change Super UI Kit Colors?</Accordion.Header>
									<Accordion.Body>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
										eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
										minim veniam, quis nostrud exercitation ullamco laboris nisi ut
										aliquip ex ea commodo consequat. Duis aute irure dolor in
										reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
										pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
										culpa qui officia deserunt mollit anim id est laborum.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="3">
									<Accordion.Header>How to customize master conponents in figma?</Accordion.Header>
									<Accordion.Body>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
										eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
										minim veniam, quis nostrud exercitation ullamco laboris nisi ut
										aliquip ex ea commodo consequat. Duis aute irure dolor in
										reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
										pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
										culpa qui officia deserunt mollit anim id est laborum.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="4" className="last-item">
									<Accordion.Header>How to buy supertask UI?</Accordion.Header>
									<Accordion.Body>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
										eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
										minim veniam, quis nostrud exercitation ullamco laboris nisi ut
										aliquip ex ea commodo consequat. Duis aute irure dolor in
										reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
										pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
										culpa qui officia deserunt mollit anim id est laborum.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
						<div className='dashboard-first-support-card-second mt-4'>
							<div className='first-support-call-container'>
								<div className='emailImage-image-container'>
									<img src={emailImage} alt="Description" className='emailImage-image' />
								</div>
								<div>
									<h5 className='dashboard-first-card-h'>Subscribe to our newletter</h5>
									<p className='dashboard-first-card-p'>We'll notify you for new updates on super task</p>
									<div className='flex-input-button-emailImage'>
										<input placeholder={"Johnonline@gmail.com"} />
										<button> 	Subscribe</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}

export default Support