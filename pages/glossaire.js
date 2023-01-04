import ArrowKey from '../components/ArrowKey';
import Buttons from '../components/Buttons';
import Meta from '../components/Meta';
import { terms } from '../termsData';

const glossaire = () => {
	return (
		<div className="glossaire">
			<Meta />
			<h1>Glossaire</h1>
			<div className="glossaire-container">
				{terms.map((term) => (
					<div key={term.id}>{term.title}</div>
				))}
			</div>
			<Buttons left={'/contact'} />
			<ArrowKey />
		</div>
	);
};

export default glossaire;
