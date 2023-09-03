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
        <div className="login__form-input">
          <input
            type="submit"
            placeholder="submit"
            className="login--input__submit"
          />
        </div>
        <div className="login__form-register">
          <p>
            Don't have an account?
            <a href="/register" className="login__form-register-route">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
