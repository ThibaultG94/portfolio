import ArrowKey from '../components/ArrowKey';
import Buttons from '../components/Buttons';
import ContactForm from '../components/ContactForm';
import Meta from '../components/Meta';

const contact = () => {
	return (
		<div className="contact">
			<Meta />
			<ContactForm />
			<Buttons left={'/portfolio'} right={'/glossaire'} />
			<ArrowKey />
		</div>
	);
};

export default contact;
