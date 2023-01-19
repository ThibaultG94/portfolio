import ArrowKey from '../components/ArrowKey';
import Buttons from '../components/Buttons';
import ContactForm from '../components/ContactForm';
import Meta from '../components/Meta';

const Contact = () => {
	return (
		<div className="contact">
			<Meta />
			<ContactForm />
			<Buttons left={'/portfolio'} />
			<ArrowKey />
		</div>
	);
};

export default Contact;
