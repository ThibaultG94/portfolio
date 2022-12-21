import React from 'react';
import Buttons from '../components/Buttons';
import ContactForm from '../components/ContactForm';
import Meta from '../components/Meta';

const contact = () => {
	return (
		<div className="contact">
			<Meta />
			<ContactForm />
			<Buttons left={'/projects/4'} />
		</div>
	);
};

export default contact;
