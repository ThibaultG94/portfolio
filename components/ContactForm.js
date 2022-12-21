import React from 'react';

const ContactForm = () => {
	return (
		<div className="form-container">
			<h2>Me contacter</h2>
			<form className="form-content">
				<label>Nom</label>
				<input
					type="text"
					name="name"
					required
					autoComplete="off"
					id="name"
				/>
				<label>Email</label>
				<input
					type="email"
					name="email"
					required
					autoComplete="off"
					id="email"
				/>
				<label>Message</label>
				<textarea name="message" id="mess" />
				<input type="submit" value="Envoyer" className="hover button" />
			</form>
			<div className="formMessage"></div>
		</div>
	);
};

export default ContactForm;
