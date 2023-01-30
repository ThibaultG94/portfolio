import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const PresentationTyped = () => {
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

	const el = useRef(null);
	const typed = useRef(null);

	useEffect(() => {
		const options = {
			strings: [
				`<em>Prénom:</em> <strong>Thibault</strong><br /><em>Nom:</em> <strong>Guilhem</strong><br /><em>Age:</em> <strong>${getAge(
					myBirthDate
				)} ans</strong><br /><em>Location:</em> <strong>Noisy-le-Grand</strong><br /><br />Sorti d'un Bac S, il m'a fallu de
				longues années pour trouver ma voie.
				D'abord une année à la fac, puis une
				année en paysagiste qui ne m'a pas
				plus. Lassé de changer
				d'orientation, j'ai fini par devenir
				géomètre bien que le métier ne me
				plaisait pas tant que ça, surtout
				avec le temps.<br />
				Fin 2019, après 4 ans à exercer le
				métier (2 en alternance, 2 à plein
				temps), j'ai décidé de prendre du
				temps pour moi afin de trouver un
				métier qui me plairais.
				<br /><br />Après plus de deux ans à
				tester des activités liés à
				l'audivisuel (3D, Stop Motion,
				Montage) trop compliquées à aboutir
				économiquement sur le court-terme,
				j'ai finalement découvert la
				formation en alternance
				d'OpenClassrooms pour devenir
				Développeur Frontend et commencer
				les cours HTML et CSS qui m'ont tout
				de suite beaucoup plu. J'ai préféré
				ainsi gardé les activités
				audivipsuels sur mon temps libre pour
				me mettre à plein temps sur
				l'apprentissage du code.
				L'apprentissage de JavaScript, bien
				que difficile le premier mois, m'a
				définitivement convaincu que j'ai
				enfin trouvé ma voie.<br /><br />
				Je suis désormais à la recherche d'une entreprise pour travailler avec elle dans le cadre d'une alternance avec OpenClassrooms.`,
			],
			typeSpeed: 10,
			backSpeed: 0,
		};

		typed.current = new Typed(el.current, options);

		return () => {
			typed.current.destroy();
		};
	}, []);
	return <span className="typed" ref={el}></span>;
};

export default PresentationTyped;
