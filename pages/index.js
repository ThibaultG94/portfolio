import React from 'react';
import ArrowKey from '../components/ArrowKey';
import Buttons from '../components/Buttons';
import Meta from '../components/Meta';
import NextTyped from '../components/NextTyped';
import { motion } from 'framer-motion';

const index = () => {
	const titleTransition = {
		in: {
			opacity: 1,
			y: 0,
		},
		out: {
			opacity: 0,
			y: -60,
		},
	};
	return (
		<div className="home">
			<Meta />
			<motion.div
				className="home-main"
				initial="out"
				animate="in"
				exit="out"
				variants={titleTransition}
				transition={{ duration: 0.5 }}>
				<div className="main-content">
					<h1>Thibault Guilhem</h1>
					<div className="line"></div>
					<h2>Développeur Web</h2>
					<div className="typed-container">
						<NextTyped />
					</div>
				</div>
			</motion.div>
			<Buttons right={'/about'} />
			<ArrowKey />
		</div>
	);
};

export default index;
