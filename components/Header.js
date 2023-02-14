import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo-container">
          <div className="header-logo-img">
            <Image
              // src="./assets/img/thibault-min.jpg"
              src="./assets/img/profil/IMG_7081(cut).jpg"
              alt="Thibault Guilhem"
              // width={50}
              // height={69}
              // width={60}
              // height={83}
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
