import ArrowKey from '../components/ArrowKey';
import Buttons from '../components/Buttons';
import Meta from '../components/Meta';

const about = () => {
	return (
		<div className="about">
			<Meta />
			<div className="about-container">
				<h1>About</h1>
			</div>
			<Buttons left={'/'} right={'/projects/1'} />
			<ArrowKey />
		</div>
	);
};

export default about;
