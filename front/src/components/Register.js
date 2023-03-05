import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";
import CreateUser from "../hooks/user/CreateUser";
import "../styles/Register.scss";
import { setUserSession } from "../Utils";

const Register = () => {
  const { setSession } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthdate, setBirthdate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const navigate = useNavigate();

  function registerUser(event) {
    event.preventDefault();
    const newUser = {
      email: email,
      password: password,
      password_confirmation: passwordConfirmation,
      firstname: firstname,
      lastname: lastname,
      birthdate: birthdate,
    };
    CreateUser(newUser, setUserSession).then(({response, errors}) => {
      if (response === "CREATED") {
        setSession({ email: email, password: password });
        navigate('/');
      }
      for (const error in errors) {
        document.getElementsByClassName(error)[0].innerText = errors[error];
      }
    });
  };

  return (
    <div className="main-view">
      <div className="logo-view">
        <img
          src={window.location.origin + "/images/main-view.png"}
          className="logo"
          alt="main-view"
        />
      </div>
      <div className="form-view">
        <form className="form">
          <span className="registration-title">Create new account</span>
          <div className="form-group">
            <label>Firstname</label>
            <input
              type="text"
              onChange={(event) => setFirstname(event.target.value)}
              className="form-control"
              placeholder="Firstname"
            />
            <span className="firstname"></span>
          </div>
          <div className="form-group">
            <label>Lastname</label>
            <input
              type="text"
              onChange={(event) => setLastname(event.target.value)}
              className="form-control"
              placeholder="Lastname"
            />
            <span className="lastname"></span>
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="text"
              onChange={(event) => setEmail(event.target.value)}
              className="form-control"
              placeholder="Email address"
            />
            <span className="email"></span>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              onChange={(event) => setPassword(event.target.value)}
              className="form-control"
              placeholder="Password"
            />
            <span className="password"></span>
          </div>
          <div className="form-group">
            <label>Password confirmation</label>
            <input
              type="text"
              onChange={(event) => setPasswordConfirmation(event.target.value)}
              className="form-control"
              placeholder="Password confirmation"
            />
            <span className="password_confirmation"></span>
          </div>
          <div className="form-group">
            <label>Birthdate</label>
            <input
              type="date"
              onChange={(event) => setBirthdate(event.target.value)}
              className="form-control"
            />
            <span className="birthdate"></span>
          </div>
          <div className="submit">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={registerUser}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
