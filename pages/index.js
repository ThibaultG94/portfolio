import React from 'react';
import Buttons from '../components/Buttons';
import DynamicText from '../components/DynamicText';
import Meta from '../components/Meta';

const index = () => {
	return (
		<div className="home">
			<Meta />
			<div className="home-main">
				<div className="main-content">
					<h1>THIBAULT GUILHEM</h1>
					<h2>DEVELOPPEUR WEB</h2>
					<h3>
						<DynamicText />
					</h3>
				</div>
			</div>
			<Buttons right={'/projects/1'} />
		</div>
	);
};

export default index;
