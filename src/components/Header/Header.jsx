import { Link } from "react-router-dom";

import logo_hrnet from "../../assets/logo_hrnet.jpg";
import "./Header.css";

/**
 * Le composant Header affiche l'en-tête de l'application avec le logo et le titre.
 * Il inclut également un lien vers la page d'accueil.
 */

const Header = () => {
  return (
    <div className="headerDiv">
      <div className="logoDiv">
      <Link to="/"><img src={logo_hrnet} alt="logo_hrnet" className="logo" /></Link>
              <h1 className="logoh1"><span className="firstPartLogo">hr</span><span className="secondPartLogo ">net</span></h1>
      </div>
    </div>
  );
};

export default Header;
