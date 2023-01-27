import Link from 'next/link';
import ArrowKey from '../components/ArrowKey';
import Buttons from '../components/Buttons';
import Meta from '../components/Meta';
import Cloud from '../components/Cloud';
import Hobbies from '../components/Hobbies';
import PresentationTyped from '../components/PresentationTyped';

const About = () => {
	return (
		<div className="about">
			<Meta />
			<div className="about-container">
				<h1>À propos</h1>
				<div className="about-content">
					<div className="infos card">
						<div className="presentation">
							<PresentationTyped />
						</div>
					</div>
					<div className="skills card">
						<Cloud />
					</div>
					<div className="hobbies card">
						<Hobbies />
					</div>
				</div>
				<div className="about-links">
					<div className="button-container">
						<Link
							href={'https://github.com/ThibaultG94/portfolio'}
							target="_blank"
							rel="noopener noreferrer"
							className="hover">
							<span className="button">
								voir le code source du site portfolio
								<i className="fa-brands fa-github"></i>
							</span>
						</Link>
					</div>
				</div>
			</div>
			<Buttons left={'/'} right={'/projects/1'} />
			<ArrowKey />
		</div>
	);
};

export default About;
