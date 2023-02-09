import ArrowKey from '../components/ArrowKey';
import Buttons from '../components/Buttons';
import ContactForm from '../components/ContactForm';
import Meta from '../components/Meta';

const Contact = () => {
	const copyClipboard = (copyText, textAlert) => {
		navigator.clipboard.writeText(copyText);
		alert(textAlert);
	};

	return (
		<div className="contact">
			<Meta />
			<div className="contact-container">
				<ContactForm />
				<div className="contact-infos">
					<div className="address">
						<h4>addresse</h4>
						<p>54 Clos des Cascades</p>
						<p>93160 Noisy-le-Grand</p>
					</div>
					<div className="phone">
						<div className="content">
							<h4>téléphone</h4>
							<p
								style={{ cursor: 'pointer' }}
								className="clipboard"
								onClick={() =>
									copyClipboard(
										'06 42 55 00 71',
										'Téléphone copié !'
									)
								}>
								06 42 55 00 71
							</p>
						</div>
					</div>
					<div className="email">
						<div className="content">
							<h4>email</h4>
							<p
								style={{ cursor: 'pointer' }}
								className="clipboard"
								onClick={() =>
									copyClipboard(
										'thibault.guilhem@gmail.com',
										'Email copié !'
									)
								}>
								thibault.guilhem@gmail.com
							</p>
						</div>
					</div>
				</div>
			</div>
			<Buttons left={'/portfolio'} />
			<ArrowKey />
		</div>
	);
};

export default Contact;
