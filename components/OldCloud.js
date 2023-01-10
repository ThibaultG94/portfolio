import React from 'react';
import { TagCloud } from 'react-tagcloud';

const OldCloud = () => {
	const skillsData = [
		{ value: 'HTML5', count: 33 },
		{ value: 'CSS3', count: 29 },
		{ value: 'VSCode', count: 32 },
		{ value: 'Sass', count: 26 },
		{ value: 'JavaScript', count: 38 },
		{ value: 'Bootstrap', count: 12 },
		{ value: 'TypeScript', count: 16 },
		{ value: 'React', count: 30 },
		{ value: 'Nodejs', count: 18 },
		{ value: 'Nextjs', count: 22 },
		{ value: 'Redux', count: 25 },
		{ value: 'Firebase', count: 18 },
		{ value: 'Git', count: 24 },
	];
	return (
		<TagCloud
			minSize={12}
			maxSize={35}
			tags={skillsData}
			onClick={(tag) => alert(`'${tag.value}' was selected!`)}
		/>
	);
};

export default OldCloud;
