/* eslint-disable jsx-a11y/anchor-is-valid */
import { HiLightningBolt } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';
import { SiGoogleadsense } from "react-icons/si";

const LandingPage = () => {

	const navigate = useNavigate();

	return (
		<div className='ld'>
			<header className="header container container-pall">
				<nav className="nav-page  flex flex-jc-sp flex-ai-c">
					<div className="logo-area-landing">
						<SiGoogleadsense size={35} className="logo-area-img" />
						<h1>Superleads</h1>
					</div>
				</nav>
			</header>

			<section className="hero container-landing-page container-pall">
				<div className="hero__image">
					{/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
					<img
						src="https://a.top4top.io/p_1996ri7a41.png"
						alt="Hero Image"
						className="hero__illustration-image"
						draggable="false" />
				</div>

				<div className="hero__text">
					<h1 className="hero__heading">Simple lead tracking. Powerful reporting.</h1>
					<p className="hero__description" >
						Turn your team on to productivity
						with Super lead  the lead tracker.
					</p>
					<a className="hero__cta hero__cta--primary" onClick={() => navigate('/login')}>Sign In</a>
				</div>
			</section>
		</div>
	)
}

export default LandingPage
