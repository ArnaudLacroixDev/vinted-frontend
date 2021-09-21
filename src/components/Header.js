import vintedLogo from "../img/vinted-logo.png";
import { Link } from "react-router-dom";

const Header = ({ userToken, setUser }) => {
  return userToken ? (
    <div className="header">
      <div className="header-center">
        <Link to={`/`}>
          <img className="vinted-logo" src={vintedLogo} alt="Logo Vinted" />
        </Link>
        <div>
          <input
            className="searchbar"
            type="search"
            placeholder="Rechercher des articles"
          />
        </div>
        <div className="right-nav-bar">
          <input
            className="disconnect-button"
            onClick={() => setUser(null)}
            type="button"
            value="Se déconnecter"
          />
          <Link to="/publish" className="buy-or-sell-button" type="button">
            Vends maintenant
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className="header">
      <div className="header-center">
        <Link to={`/`}>
          <img className="vinted-logo" src={vintedLogo} alt="Logo Vinted" />
        </Link>
        <div>
          <input
            className="searchbar"
            type="search"
            placeholder="Rechercher des articles"
          />
        </div>
        <div className="right-nav-bar">
          <Link to="/login" className="login-button" type="button">
            Se connecter
          </Link>
          <Link to="/signup" className="signup-button" type="button">
            S'inscrire
          </Link>
          <Link to="/publish" className="buy-or-sell-button" type="button">
            Vends maintenant
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
