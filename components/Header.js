import Image from 'next/image';
import Navbar from './Navbar';

const Header = () => {
	return (
		<header className="header">
			<div className="header-content">
				<div className="header-logo-container">
					<div className="header-logo-img">
						<Image
							src="./assets/img/profil/IMG_7081(cut).webp"
							alt="Thibault Guilhem"
							width={70}
							height={97}
							loading="eager"
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
