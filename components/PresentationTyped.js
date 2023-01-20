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
				)} ans</strong><br /><em>Location:</em> <strong>Noisy-le-Grand</strong><br /><em>Anciennement :</em><ul> <li class="elements-right"><strong>Monteur</strong></li><li class="elements-right"><strong>Géomètre</strong></li><li class="elements-right"><strong>Paysagiste</strong></li><em>Recherche:</em> <strong>Alternance OpenClassrooms</strong>`,
			],
			typeSpeed: 40,
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
