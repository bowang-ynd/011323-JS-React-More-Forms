import React, {useState} from "react";

const App = () => {
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");
  
  const createUser = (e) => {
    e.preventDefault();
    const newUser = {firstName, lastName, email, password, confirmPassword}
    setFirst("");
    setLast("");
    setEmail("");
    setPassword("");
    setConfirm("");
  }

  // validation handlers
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  // validation for first name
  const handleFirst = (e) => {
    setFirst(e.target.value);
    e.target.value.length < 2 ?
      e.target.value.length == 0 ? 
        setFirstNameError("") :
        setFirstNameError("First Name should have at least 2 characters!") :
      setFirstNameError("");
  }

  // validation for last name
  const handleLast = (e) => {
    setLast(e.target.value);
    e.target.value.length < 2 ?
      e.target.value.length == 0 ? 
        setLastNameError("") :
        setLastNameError("Last Name should have at least 2 characters!") :
      setLastNameError("");
  }

  // validation for email
  const handleEmail = (e) => {
    setEmail(e.target.value);
    e.target.value.length < 5 ?
      e.target.value.length == 0 ?
        setEmailError("") :
        setEmailError("Email should have at least 5 characters!") :
      setEmailError("");
  }

  // validation for password
  const handlePassword = (e) => {
    setPassword(e.target.value);
    e.target.value.length < 8 ?
      e.target.value.length == 0 ? 
        setPasswordError("") :
        setPasswordError("Password should have at least 8 characters!") :
      setPasswordError("");
  }

  // validation for confirm password
  const handleConfirm = (e) => {
    setConfirm(e.target.value);
    e.target.value !== password ?
      setConfirmError("Passwords should match!") :
      setConfirmError("");
  }

  // return to the html page
  return (
    <form onSubmit={ createUser }>
      <div className="container my-3 d-flex flex-column">
        <div className="container my-3">
          <div className="container">
            {
              firstNameError ? 
              <p style={ {color: 'red'} }>{ firstNameError }</p> :
              ''
            }
            <div className="input-group mb-3">
              <span className="input-group-text">First Name: </span>
              <input type="text" className="form-control" placeholder={ firstName } onChange={ handleFirst } value={ firstName } />
            </div>
          </div>

          <div className="container">
            {
              lastNameError ? 
              <p style={ {color: 'red'} }>{ lastNameError }</p> :
              ''
            }
            <div className="input-group mb-3">
              <span className="input-group-text">Last Name: </span>
              <input type="text" className="form-control" placeholder={ lastName } onChange={ handleLast } value={ lastName } />
            </div>
          </div>

          <div className="container">
            {
              emailError ? 
              <p style={ {color: 'red'} }>{ emailError }</p> :
              ''
            }
            <div className="input-group mb-3">
              <span className="input-group-text">Email: </span>
              <input type="text" className="form-control" placeholder={ email } onChange={ handleEmail } value={ email } />
            </div>
          </div>

          <div className="container">
            {
              passwordError ? 
              <p style={ {color: 'red'} }>{ passwordError }</p> :
              ''
            }
            <div className="input-group mb-3">
              <span className="input-group-text">Password: </span>
              <input type="password" className="form-control" onChange={ handlePassword } value={ password } />
            </div>
          </div>

          <div className="container">
            {
              confirmError ? 
              <p style={ {color: 'red'} }>{ confirmError }</p> :
              ''
            }
            <div className="input-group mb-3">
              <span className="input-group-text">Confirm Password: </span>
              <input type="password" className="form-control" onChange={ handleConfirm } value={ confirmPassword } />
            </div>
          </div>
        </div>
        <div className="container p-3">
          <button type="submit" className='btn btn-primary'>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default App;
