import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};

    if (!name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    if (!mobile) {
      errors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(mobile)) {
      errors.mobile = "Mobile number must be 10 digits";
    }

    return errors;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Save user data to localStorage
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      localStorage.setItem('mobile', mobile);
      alert('Signup successful! \nNow you can log in');
      navigate('/login');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <header className="p-2 bg-black text-white sticky-top">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <Link to="" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none show1">
              <img src="favicon.ico" alt="logo" width="40" height="40" />
              <Link className="navbar-brand ms-2 text-white fontSize" to="">Authenticator</Link>
            </Link>

            <div className="col-md-3 text-end">
              <button type="button" className="btn btn-success me-2">
                <Link to="/login" className="nav-link px-2">Login</Link>
              </button>
              <button type="button" className="btn btn-primary">
                <Link to="/signup" className="nav-link px-2">Sign Up</Link>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h1 className='my-4'>Signup</h1>
        <form onSubmit={handleSignup} style={{ alignItems: 'center' }}>
          <input 
            type="text" 
            className="mt-2 form-control" 
            value={name} 
            placeholder="Name" 
            onChange={(e) => setName(e.target.value)} 
          />
          {errors.name && <p className="text-danger">{errors.name}</p>}
          
          <input 
            type="email" 
            className="mt-2 form-control" 
            value={email} 
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)} 
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}
          
          <input 
            type="password" 
            className="mt-2 form-control" 
            value={password} 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)} 
          />
          {errors.password && <p className="text-danger">{errors.password}</p>}
          
          <input 
            type="number" 
            className="my-2 form-control" 
            value={mobile} 
            placeholder="Mobile No." 
            onChange={(e) => setMobile(e.target.value)} 
          />
          {errors.mobile && <p className="text-danger">{errors.mobile}</p>}
          
          <button type='submit' className="my-2 btn btn-primary w-100">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
