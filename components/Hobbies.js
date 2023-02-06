import React from 'react';
import { TagCloud } from 'react-tagcloud';
import { Fade } from 'react-awesome-reveal';

const Hobbies = () => {
	const skillsData = [
		{ value: 'Sport', count: 1 },
		{ value: 'Lecture', count: 2 },
		{ value: 'Voyages', count: 3 },
		{ value: 'Jeux Vidéos', count: 4 },
		{ value: 'Sciences', count: 5 },
		{ value: '3D', count: 6 },
		{ value: 'Animation', count: 7 },
		{ value: 'Etalonnage', count: 8 },
		{ value: 'Photo', count: 9 },
		{ value: 'Montage', count: 10 },
		{ value: 'Code', count: 11 },
		{ value: 'Films', count: 12 },
		{ value: 'Cinéma', count: 13 },
	];
	return (
		// <Fade cascade>
		<TagCloud minSize={7} maxSize={40} tags={skillsData} />
		// {/* </Fade> */}
	);
};

export default Hobbies;
