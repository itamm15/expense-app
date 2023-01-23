import { useState } from "react";
import "../styles/Register.scss";


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  return (
    <div className="main-view">
      <div className="logo-view">
        <img src={window.location.origin + '/images/main-view.png'} className="logo" />
      </div>
      <div className="form-view">
        <form className='form'>
          <span className="registration-title">Create new account</span>
          <div className="form-group">
            <label>Email address</label>
            <input type="text" onChange={(event) => setEmail(event.target.value)} className="form-control" placeholder="Email address" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="text" onChange={(event) => setPassword(event.target.value)} className="form-control" placeholder="Password"/>
          </div>
          <div className="form-group">
            <label>Password confirmation</label>
            <input type="text" onChange={(event) => setPasswordConfirmation(event.target.value)} className="form-control" placeholder="Password confirmation" />
          </div>
          <button type="submit" className="btn btn-primary">Create</button>
        </form>
      </div>
    </div>
  )
}

export default Register;
