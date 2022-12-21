import Image from 'next/image';
import Navbar from './Navbar';

const Header = () => {
	return (
		<header className="header">
			<div className="header-content">
				<div className="header-logo-container">
					<div className="header-logo-img">
						<Image
							src="./assets/img/thibault-min.jpg"
							alt="Thibault Guilhem"
							width={50}
							height={50}
						/>
					</div>
					<span>Thibault Guilhem</span>
				</div>
				<Navbar />
			</div>
		</header>
	);
};

export default Header;
