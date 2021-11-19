import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const response = await axios.post(
        "https://vinted-like-backend.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
        }
      );

      if (response.data.token) {
        setUser(response.data.token);

        history.push("/");
      }
    } catch (error) {
      console.log(error.message);

      if (error.response.status === 409) {
        setErrorMessage("Cet email est déjà utilisé !");
      }
    }
  };

  return (
    <main className="signup-login-div">
      <h2>S'inscrire</h2>
      <form className="signup-login-content" onSubmit={handleSubmit}>
        <input
          className="signup-login-div-input"
          onChange={(event) => setUsername(event.target.value)}
          type="text"
          placeholder="Nom d'utilisateur"
        />
        <input
          className="signup-login-div-input"
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          className="signup-login-div-input"
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="Mot de passe"
        />

        <p className="signup-login-error-message">{errorMessage}</p>
        <input
          className="signup-login-submit-button"
          type="submit"
          value="S'inscrire"
        />

        <a href="/login" className="signup-already-registered">
          Déjà un compte ? <span>Connecte-toi ici !</span>
        </a>
      </form>
    </main>
  );
};

export default Signup;
