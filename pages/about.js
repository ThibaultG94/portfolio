import Link from 'next/link';
import ArrowKey from '../components/ArrowKey';
import Buttons from '../components/Buttons';
import Meta from '../components/Meta';
import Cloud from '../components/Cloud';
import Hobbies from '../components/Hobbies';

const about = () => {
	const myBirthDate = '08/20/1994';
	const getAge = (datestring) => {
		let today = new Date();
		const birthDate = new Date(datestring);
		let age = today.getFullYear() - birthDate.getFullYear();
		let m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return age;
	};
	return (
		<div className="about">
			<Meta />
			<div className="about-container">
				<h1>About</h1>
				<div className="about-content">
					<div className="infos card">
						<div className="presentation">
							<p>Prénom: Thibault</p>
							<p>Nom: Guilhem</p>
							<p>Age: {getAge(myBirthDate)} ans</p>
							<p>Location: Noisy-le-Grand (93160)</p>
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

export default about;
