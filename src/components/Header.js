import "./Header.css";
import vintedLogo from "../img/vinted-logo.png";
import { Link } from "react-router-dom";

const Header = ({ userToken, setUser }) => {
  return userToken ? (
    <header>
      <div className="header-center">
        <Link to={`/`}>
          <img
            className="header-vinted-logo"
            src={vintedLogo}
            alt="Logo Vinted"
          />
        </Link>
        <div className="header-right-nav-bar">
          <input
            className="header-disconnect-button"
            onClick={() => setUser(null)}
            type="button"
            value="Se déconnecter"
          />
          <Link
            to="/publish"
            className="header-buy-or-sell-button"
            type="button"
          >
            Vends maintenant
          </Link>
        </div>
      </div>
    </header>
  ) : (
    <header>
      <div className="header-center">
        <Link to={`/`}>
          <img
            className="header-vinted-logo"
            src={vintedLogo}
            alt="Logo Vinted"
          />
        </Link>
        <div className="header-right-nav-bar">
          <Link to="/login" className="header-login-button" type="button">
            Se connecter
          </Link>
          <Link to="/signup" className="header-signup-button" type="button">
            S'inscrire
          </Link>
          <Link
            to="/publish"
            className="header-buy-or-sell-button"
            type="button"
          >
            Vends maintenant
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
