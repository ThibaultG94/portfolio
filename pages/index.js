import React from 'react';
import Buttons from '../components/Buttons';
// import DynamicText from '../components/DynamicText';
import Meta from '../components/Meta';
import NextTyped from '../components/NextTyped';
// import Typed from 'typed.js';

const index = () => {
	// var typed = new Typed('.typed', {
	// 	strings: [
	// 		"Bonjour à tous et à toutes, je me présente je m'appelle Henry",
	// 		"Après une carrière m'ayant fait découvrir plusieurs milieux professionnels et exercer plus de 15 métiers différents. J'ai décidé de me lancer à fond dans l'apprentissage du code, depuis près de 6 mois je me forme à temps plein en autodidacte aux langages Front tels que CSS, JavaScript et son Framework React afin de devenir le plus rapidement possible développeur. Plus qu'un avenir professionnel, je me suis découvert une passion, celle de coder.",
	// 	],
	// 	typeSpeed: 20,
	// });
	return (
		<div className="home">
			<Meta />
			<div className="home-main">
				<div className="main-content">
					<h1>Thibault Guilhem</h1>
					<div className="line"></div>
					<h2>Développeur Front-end</h2>
					{/* <h3>
						<DynamicText />
					</h3> */}
					<div className="typed-container">
						<NextTyped />
					</div>
				</div>
			</div>
			<Buttons right={'/projects/1'} />
		</div>
	);
};

export default index;
