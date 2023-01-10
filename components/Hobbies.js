import React from 'react';
import { TagCloud } from 'react-tagcloud';

const Hobbies = () => {
	const skillsData = [
		{ value: 'Littérature', count: 1 },
		{ value: '3D', count: 2 },
		{ value: 'Sciences', count: 3 },
		{ value: 'Jeux Vidéos', count: 4 },
		{ value: 'Animation', count: 5 },
		{ value: 'Photo', count: 6 },
		{ value: 'Montage', count: 7 },
		{ value: 'Code', count: 8 },
		{ value: 'Cinéma', count: 9 },
		// { value: 'React', count: 30 },
		// { value: 'Nodejs', count: 18 },
		// { value: 'Nextjs', count: 22 },
		// { value: 'Redux', count: 25 },
		// { value: 'Firebase', count: 18 },
		// { value: 'Git', count: 24 },
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

export default Hobbies;
