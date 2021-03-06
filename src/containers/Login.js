import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const response = await axios.post(
        "https://vinted-like-backend.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );

      if (response.data.token) {
        setUser(response.data.token);

        history.push("/");
      }
    } catch (error) {
      if (error.response.status === 401) {
        setErrorMessage("Mauvais e-mail et/ou mot de passe !");
      }
    }
  };

  return (
    <main className="signup-login-div">
      <h2>Se connecter</h2>
      <form className="signup-login-content" onSubmit={handleSubmit}>
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
          value="Se connecter"
        />
      </form>
    </main>
  );
};

export default Login;
