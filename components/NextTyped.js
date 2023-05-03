import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const NextTyped = () => {
	const el = useRef(null);
	const typed = useRef(null);

	useEffect(() => {
		const options = {
			strings: [
				"Bonjour à tous et à toutes, je m'appelle Thibault, je suis à la recherche d'une alternance pour devenir développeur web.",
				"Après une carrière m'ayant fait découvrir plusieurs milieux professionnels et exercer des métiers différents, j'ai décidé de me lancer à fond dans l'apprentissage du code. Depuis près de 6 mois je me forme à temps plein en autodidacte aux langages Front tels que CSS, JavaScript et son Framework React afin de devenir le plus rapidement possible développeur. Plus qu'un avenir professionnel, je me suis découvert une passion, celle de coder.",
			],
			typeSpeed: 20,
			backSpeed: 0,
		};

		typed.current = new Typed(el.current, options);

		return () => {
			typed.current.destroy();
		};
	}, []);
	return <span className="typed" ref={el}></span>;
};

export default NextTyped;
