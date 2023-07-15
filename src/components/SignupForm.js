import React, { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
const SignupForm = () => {
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    const newErrors = [];

  

    if (!name) {
      newErrors.push('Name field is required.');
    }
    if (!email) {
        newErrors.push('Email field is required.');
      }
    if (!password) {
      newErrors.push('Password field is required.');
    }

    if (!confirmPassword) {
      newErrors.push('Confirm Password field is required.');
    }

    if (password !== confirmPassword) {
      newErrors.push('Make sure your password and confirm password match!');
    }
    if (newErrors.length === 0) {
        // Form submission is successful
        setSuccessMessage('Successfully Created!');
      }

    setErrors(newErrors);
  };

  return (
    <div className='container'>
            <h1>Create Account</h1>

            <div className='createBtn'>
                <button className='Google'> <FaGoogle size={25} className='font' /><p>Sign up with Google</p></button>
                <button className='Google'><FaFacebook size={25} className='font' /><p>Sign up with Facebook</p></button>
            </div>

            <h3 >- OR -</h3>
    <form onSubmit={handleSubmit}>
      
      <div>
       
        <input className='inputBox'
          type="text"
          placeholder='Full Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <hr/>
      <div>
       
        <input className='inputBox'
          type="email"
          placeholder='Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <hr/>
      <div>
       
        <input className='inputBox'
          type="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <hr/>
      <div>
       
        <input className='inputBox'
          type="password"
          placeholder='Confirm Address'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <hr/><div> <button className='submit' type="submit">Create Account</button></div>
     
      {errors.length > 0 && (
        <div className="error">
          {errors.map((error, index) => (
            <p key={index} className="error-message">{error}</p>
          ))}
        </div>
      )}
       {successMessage && <p className="success">{successMessage}</p>}
    </form>
    </div>

  );
};

export default SignupForm;
