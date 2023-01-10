import React, { useEffect } from 'react';
import TagCloud from 'TagCloud';

const Cloud = () => {
	const container = '.content';

	// const textsValue = [
	// 	0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4,
	// 	1.5, 1.6,
	// ];

	const texts = [
		'PHP',
		'Wordpress',
		'jQuery',
		'TypeScript',
		'ExpressJs',
		'Firebase',
		'Bootstrap',
		'Redux',
		'npm',
		'NodeJs',
		'JSON',
		'Git',
		'NextJs',
		'React',
		'JavaScript',
		'Sass',
		'VSCode',
		'CSS3',
		'HTML5',
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
		let i = 0.1;
		document.querySelectorAll('.tagcloud--item').forEach((element) => {
			element.style.fontSize = `${i}rem`;
			i = i + 0.1;
		});
	};

	useEffect(() => {
		TagCloud(container, texts, options);
		changeSize();
	}, []);
	return (
		<div className="main">
			<span className="content"></span>
		</div>
	);
};

export default Cloud;
