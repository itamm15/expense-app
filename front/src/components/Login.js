import "../styles/Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login__form">
        <div className="login__form-title">
          <h1>Login</h1>
        </div>
        <div className="login__form-input">
          <input
            type="email"
            placeholder="email"
            className="login--input"
            required
          />
        </div>
        <div className="login__form-input">
          <input
            type="password"
            placeholder="password"
            className="login--input"
            required
          />
        </div>
        <div className="login__form-submit">
          <button type="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
