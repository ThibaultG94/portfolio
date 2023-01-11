import React from 'react';
import { TagCloud } from 'react-tagcloud';
import { Fade } from 'react-awesome-reveal';

const Hobbies = () => {
	const skillsData = [
		{ value: 'Sport', count: 1 },
		{ value: 'Littérature', count: 2 },
		{ value: 'Voyages', count: 3 },
		{ value: 'Jeux Vidéos', count: 4 },
		{ value: 'Sciences', count: 5 },
		{ value: '3D', count: 6 },
		{ value: 'Animation', count: 7 },
		{ value: 'Photo', count: 8 },
		{ value: 'Montage', count: 9 },
		{ value: 'Code', count: 10 },
		{ value: 'Films', count: 11 },
		{ value: 'Cinéma', count: 12 },
	];
	return (
		// <Fade cascade>
		<TagCloud minSize={1} maxSize={35} tags={skillsData} />
		// {/* </Fade> */}
	);
};

export default Hobbies;
