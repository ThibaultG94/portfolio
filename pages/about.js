import Link from 'next/link';
import ArrowKey from '../components/ArrowKey';
import Buttons from '../components/Buttons';
import Meta from '../components/Meta';
import Cloud from '../components/Cloud';
import Hobbies from '../components/Hobbies';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
	const myBirthDate = '08/20/1994';
	const [age, setAge] = useState();

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

	useEffect(() => {
		setAge(getAge(myBirthDate));
	}, []);

	const titleTransition = {
		in: {
			opacity: 1,
		},
		out: {
			opacity: 0,
		},
	};

	const infosCardTransition = {
		in: {
			opacity: 1,
			x: 0,
		},
		out: {
			opacity: 0,
			x: -200,
		},
	};

	const skillCardTransition = {
		in: {
			opacity: 1,
			x: 0,
		},
		out: {
			opacity: 0,
			x: 200,
		},
	};

	const hobbieCardTransition = {
		in: {
			opacity: 1,
			y: 0,
		},
		out: {
			opacity: 0,
			y: 200,
		},
	};

	const firstButtonTransition = {
		in: {
			opacity: 1,
			x: 0,
		},
		out: {
			opacity: 0,
			x: -200,
		},
	};

	const secondButtonTransition = {
		in: {
			opacity: 1,
			x: 0,
		},
		out: {
			opacity: 0,
			x: 200,
		},
	};

	return (
		<div className="about">
			<Meta />
			<div className="about-container">
				<motion.h1
					initial="out"
					animate="in"
					exit="out"
					variants={titleTransition}
					transition={{ duration: 1.5, delay: 0.5 }}>
					À propos
				</motion.h1>
				<div className="about-content">
					<motion.div
						className="infos card"
						initial="out"
						animate="in"
						exit="out"
						variants={infosCardTransition}
						transition={{ duration: 0.5 }}>
						<p>
							<em>Prénom: </em> <strong>Thibault</strong>
							<br />
							<em>Nom: </em> <strong>Guilhem</strong>
							<br />
							<em>Age: </em>
							<strong>{age && age} ans</strong>
							<br />
							<em>Location: </em>
							<strong>Noisy-le-Grand</strong>
							<br />
							<br />
							Après avoir obtenu mon baccalauréat scientifique,
							j'ai exploré différentes voies, notamment
							l'université et le paysagisme, sans trouver de
							réelle satisfaction. J'ai finalement opté pour une
							carrière de géomètre durant plusieurs années, mais
							là encore, ce métier ne me convenait pas. Suite à
							celà, j'ai décidé de prendre une pause pour
							réfléchir à mon avenir professionnel et explorer
							d'autres pistes. C'est à ce moment que j'ai
							expérimenté divers domaines liés à l'audiovisuel,
							tels que la 3D, la stop motion et surtout, le
							montage vidéo. Bien que ces activités aient
							réellement suscité mon intérêt, elles ne
							représentaient pas des options viables pour moi.
							<br />
							<br />
							C'est alors que j'ai découvert la formation en
							alternance d'OpenClassrooms pour devenir Développeur
							Frontend. Les premiers cours en HTML et CSS m'ont
							immédiatement captivé, et j'ai décidé de me
							consacrer pleinement à l'apprentissage du code tout
							en gardant mes activités audiovisuelles comme
							passe-temps. L'étude du JavaScript, bien que
							difficile au début, m'a conforté dans mon choix de
							carrière.
							<br />
							<br />
							Je suis actuellement à la recherche d'une entreprise
							qui m'accueillera en alternance avec OpenClassrooms.
							Mon objectif est de poursuivre mon apprentissage et
							de mettre en pratique mes compétences dans le
							développement web dès que possible. Je suis
							convaincu que cette nouvelle voie me permettra de
							m'épanouir professionnellement et de contribuer de
							manière significative à mon futur employeur.
						</p>
					</motion.div>
					<motion.div
						className="skills card"
						initial="out"
						animate="in"
						exit="out"
						variants={skillCardTransition}
						transition={{ duration: 0.5 }}>
						<Cloud />
					</motion.div>
					<motion.div
						className="hobbies card"
						initial="out"
						animate="in"
						exit="out"
						variants={hobbieCardTransition}
						transition={{ duration: 0.5 }}>
						<Hobbies />
					</motion.div>
					<div className="button-container">
						<Link
							href={'https://github.com/ThibaultG94/portfolio'}
							target="_blank"
							rel="noopener noreferrer"
							className="hover">
							<motion.span
								className="button"
								initial="out"
								animate="in"
								exit="out"
								variants={firstButtonTransition}
								transition={{ duration: 0.5 }}>
								voir le code source du site portfolio
								<i className="fa-brands fa-github"></i>
							</motion.span>
						</Link>
						<motion.a
							href="./assets/CV_Guilhem_Thibault.pdf"
							download
							className="hover"
							initial="out"
							animate="in"
							exit="out"
							variants={secondButtonTransition}
							transition={{ duration: 0.5 }}>
							<span className="button">Télécharger le CV</span>
						</motion.a>
					</div>
				</div>
			</div>
			<Buttons left={'/'} right={'/projects/1'} />
			<ArrowKey />
		</div>
	);
};

export default About;
