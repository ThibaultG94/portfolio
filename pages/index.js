import React from 'react';
import ArrowKey from '../components/ArrowKey';
import Buttons from '../components/Buttons';
import Meta from '../components/Meta';
import NextTyped from '../components/NextTyped';

const index = () => {
	return (
		<div className="home">
			<Meta />
			<div className="home-main">
				<div className="main-content">
					<h1>Thibault Guilhem</h1>
					<div className="line"></div>
					<h2>Développeur Front-end</h2>
					<div className="typed-container">
						<NextTyped />
					</div>
				</div>
			</div>
			<Buttons right={'/about'} />
			<ArrowKey />
		</div>
	);
};

export default index;
