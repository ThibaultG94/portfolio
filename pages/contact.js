import { useState } from 'react';
import ArrowKey from '../components/ArrowKey';
import Buttons from '../components/Buttons';
import ContactForm from '../components/ContactForm';
import Meta from '../components/Meta';
import { AnimatePresence, motion } from 'framer-motion';

const Contact = () => {
	const [textPhone, setTextPhone] = useState('');
	const [textEmail, setTextEmail] = useState('');
	const pageTransition = {
		in: {
			opacity: 1,
			x: 0,
		},
		out: {
			opacity: 0,
			x: 200,
		},
	};

	const copyClipboard = (e, copyText, textAlert) => {
		navigator.clipboard.writeText(copyText);
		if (e.target.id === 'phone') {
			setTextPhone(textAlert);
			setTimeout(() => {
				setTextPhone('');
			}, 2000);
		} else if (e.target.id === 'email') {
			setTextEmail(textAlert);
			setTimeout(() => {
				setTextEmail('');
			}, 2000);
		}
	};

	return (
		<div className="contact">
			<Meta />
			<motion.div
				initial="out"
				animate="in"
				exit="out"
				variants={pageTransition}
				transition={{ duration: 0.5 }}
				className="contact-container">
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
								id="phone"
								onClick={(e) =>
									copyClipboard(
										e,
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
								id="email"
								onClick={(e) =>
									copyClipboard(
										e,
										'thibault.guilhem@gmail.com',
										'Email copié !'
									)
								}>
								thibault.guilhem@gmail.com
							</p>
						</div>
					</div>
					<div className="contact-message">
						<p className="copy-phone">{textPhone && textPhone}</p>
						<p className="copy-email">{textEmail && textEmail}</p>
					</div>
				</div>
			</motion.div>
			<Buttons left={'/portfolio'} />
			<ArrowKey />
		</div>
	);
};

export default Contact;
