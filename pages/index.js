import React from 'react';
import DynamicText from '../components/DynamicText';
import Meta from '../components/Meta';

const index = () => {
	return (
		<div className="home">
			<Meta />
			<div className="home-main">
				<div className="main-content">
					<h1>DEVELOPPEUR WEB</h1>
					<h2>
						<DynamicText />
					</h2>
				</div>
			</div>
		</div>
	);
};

export default index;
