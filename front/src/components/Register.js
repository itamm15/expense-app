import { useState } from "react";
import createUser from "../hooks/user/createUser";
import "../styles/Register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthdate, setBirthdate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const registerUser = (event) => {
    event.preventDefault();
    const newUser = {
      email: email,
      password: password,
      password_confirmation: passwordConfirmation,
      firstname: firstname,
      lastname: lastname,
      birthdate: birthdate,
    };
    createUser(newUser);
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
          </div>
          <div className="form-group">
            <label>Lastname</label>
            <input
              type="text"
              onChange={(event) => setLastname(event.target.value)}
              className="form-control"
              placeholder="Lastname"
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="text"
              onChange={(event) => setEmail(event.target.value)}
              className="form-control"
              placeholder="Email address"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              onChange={(event) => setPassword(event.target.value)}
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label>Password confirmation</label>
            <input
              type="text"
              onChange={(event) => setPasswordConfirmation(event.target.value)}
              className="form-control"
              placeholder="Password confirmation"
            />
          </div>
          <div className="form-group">
            <label>Birthdate</label>
            <input
              type="date"
              onChange={(event) => setBirthdate(event.target.value)}
              className="form-control"
            />
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
