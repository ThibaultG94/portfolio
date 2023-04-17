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
							{/* Sorti d'un Bac S, il m'a fallu de longues années
							pour trouver ma voie. D'abord une année à la fac,
							puis une année en paysagiste qui ne m'a pas plus.
							Lassé de changer d'orientation, j'ai fini par
							devenir géomètre bien que le métier ne me plaisait
							pas tant que ça, surtout avec le temps. */}
							Après avoir obtenu mon baccalauréat scientifique,
							j'ai exploré différentes voies, notamment
							l'université et le paysagisme, sans trouver de
							réelle satisfaction. J'ai finalement opté pour une
							carrière de géomètre durant quatre années, mais là
							encore, ce métier ne me passionnait pas. Suite à
							celà, j'ai décidé de prendre une pause pour
							réfléchir à mon avenir professionnel et explorer
							d'autres pistes. C'est à ce moment que j'ai
							expérimenté divers domaines liés à l'audiovisuel,
							tels que la 3D, la stop motion et le montage vidéo.
							Bien que ces activités aient réellement suscité mon
							intérêt, elles ne représentaient pas des options
							viables pour moi.
							{/* <br />
							Après 4 ans à exercer le métier (2 en alternance, 2
							à plein temps), j'ai décidé de prendre du temps pour
							moi afin de trouver un métier qui me plairais. */}
							<br />
							<br />
							{/* Après plus de deux ans à tester des activités liés à
							l'audivisuel (3D, Stop Motion, Montage) trop
							compliquées à aboutir économiquement sur le
							court-terme, j'ai finalement découvert la formation
							en alternance d'OpenClassrooms pour devenir
							Développeur Frontend et commencer les cours HTML et
							CSS qui m'ont tout de suite beaucoup plu. J'ai
							préféré ainsi gardé mes activités audiovisuels sur
							mon temps libre pour me mettre à plein temps sur
							l'apprentissage du code. L'apprentissage de
							JavaScript, bien que difficile le premier mois, m'a
							définitivement convaincu d'avoir trouvé ma voie. */}
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
							{/* Je suis désormais à la recherche d'une entreprise
							pour travailler avec elle dans le cadre d'une
							alternance avec OpenClassrooms, afin de perpétuer
							mon apprentissage et le mettre en pratique dés que
							possible. */}
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
							href="./assets/CV_Thibault-Guilhem.pdf"
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
