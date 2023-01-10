import React, { useEffect } from 'react';
import TagCloud from 'TagCloud';

const OldHobbies = () => {
	const container = '.content';

	const textsValue = [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2];

	const texts = [
		'3D',
		'Cinéma',
		'JavaScript',
		'Photo',
		'Animation',
		'Jeux Vidéos',
		'Sciences',
		'Rolling',
		'Sphere',
		'6KB',
		'v2.x',
	];

	const options = {
		radius: 150,
		// animation speed
		// slow, normal, fast
		maxSpeed: 'fast',
		initSpeed: 'fast',
		// 0 = top
		// 90 = left
		// 135 = right-bottom
		direction: 135,
		// interact with cursor move on mouse out
		keep: true,
	};

	const changeSize = () => {
		let i = 0;
		document.querySelectorAll('.tagcloud--item').forEach((element) => {
			console.log(element);
			element.style.fontSize = `${textsValue[i]}rem`;
			i++;
		});
	};

	useEffect(() => {
		TagCloud(container, texts, options);
		changeSize();
	});
	return (
		<div className="main">
			<span className="content"></span>
		</div>
	);
};

export default OldHobbies;
