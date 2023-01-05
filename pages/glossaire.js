import { useState } from 'react';
import ArrowKey from '../components/ArrowKey';
import Buttons from '../components/Buttons';
import Meta from '../components/Meta';
import { terms } from '../termsData';

const glossaire = () => {
	const [displayExplanations, setDisplayExplanations] = useState();
	const [displayExplanations2, setDisplayExplanations2] = useState();
	const [displayExplanations3, setDisplayExplanations3] = useState();

	const displayTerm = (term) => {
		setDisplayExplanations(term.explanations);
		setDisplayExplanations2(term.explanations2);
		setDisplayExplanations3(term.explanations3);
	};
	return (
		<div className="glossaire">
			<Meta />
			<div className="glossaire-container">
				<h1>Glossaire</h1>
				<div className="glossaire-content">
					<div className="glossaire-content-title">
						{terms.map((term) => (
							<h3 key={term.id} onClick={() => displayTerm(term)}>
								{term.title}
							</h3>
						))}
					</div>
					<div className="glossaire-content-explanations">
						<p>{displayExplanations}</p>
						<br />
						<p>{displayExplanations2}</p>
						<br />
						<p>{displayExplanations3}</p>
					</div>
				</div>
			</div>
			<Buttons left={'/contact'} />
			<ArrowKey />
		</div>
	);
};

export default glossaire;
