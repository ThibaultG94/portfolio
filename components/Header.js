import Navbar from './Navbar';

const Header = () => {
	return (
		<header className="header">
			<div className="header-content">
				<div className="header-logo-container">
					<div className="header-logo-img">
						{/* <img
							src="./assets/img/thibault.jpg"
							alt="Photo de Thibault"
						/> */}
					</div>
					<span>Thibault Guilhem</span>
				</div>
				<Navbar />
			</div>
		</header>
	);
};

export default Header;
