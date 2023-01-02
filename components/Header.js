import Image from 'next/image';
import Navbar from './Navbar';
import MediaQuery from 'react-responsive';
import ToggleNavbar from './ToggleNavbar';

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
				<MediaQuery minWidth={700}>
					<Navbar />
				</MediaQuery>
				<MediaQuery maxWidth={699}>
					<ToggleNavbar />
				</MediaQuery>
			</div>
		</header>
	);
};

export default Header;
