import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {

	const navigate = useNavigate();

	const handelLogout = () => {
		navigate("/login")
		localStorage.removeItem('taskmaneger');
	}


	return (
		<div className='bg404'>
			<section className="error-container">
				<span><span>4</span></span>
				<span>0</span>
				<span><span>4</span></span>
			</section>
			<div className="link-container">
				<button className="more-link" onClick={handelLogout}>Login</button>
			</div>
		</div>
	)
}

export default PageNotFound
