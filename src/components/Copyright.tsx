
// import logo from '../assets/img/ASLLOGO.svg';

const Copyright = ({ className }: any) => {
	const today = new Date();
	const year = today.getFullYear();
	return (
		<div className='cp-text1'>
			<footer  >
				© Copyright {year} Godwin Chinedu. All rights reserved.
			</footer>
			{/* <img src={logo} alt="Profile Display" crossOrigin="anonymous" className='logo-buttom-padding' /> */}
		</div>

	);
};

export default Copyright;
