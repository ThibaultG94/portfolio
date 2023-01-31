import React, { useEffect } from 'react';
import TagCloud from 'TagCloud';

const Cloud = () => {
	const container = '.content';

	const texts = [
		'PHP',
		'Wordpress',
		'jQuery',
		'TypeScript',
		'ExpressJs',
		'Firebase',
		'Bootstrap',
		'Linux',
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
		radius: 140,
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
		let i = 0.2;
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
