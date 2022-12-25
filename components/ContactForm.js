import React from 'react';

const ContactForm = () => {
	return (
		<div className="form-container">
			<form className="form-content">
				<h2>Me contacter</h2>
				<div className="name-container">
					<label>Nom</label>
					<input
						type="text"
						name="name"
						required
						autoComplete="off"
						id="name"
					/>
				</div>
				<div className="email-container">
					<label>Email</label>
					<input
						type="email"
						name="email"
						required
						autoComplete="off"
						id="email"
					/>
				</div>
				<div className="message-container">
					<label>Message</label>
					<textarea name="message" id="mess" />
				</div>
				<input type="submit" value="Envoyer" className="hover button" />
			</form>
			<div className="formMessage"></div>
		</div>
	);
};

export default ContactForm;
