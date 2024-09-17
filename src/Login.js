import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault()

    if (localStorage.length === 0) {
      alert("No Details Found");
    } else {
      if (email === '') {
        alert('Enter your Email')
      } else if (password === '') {
        alert('Enter your Password')
      } else {
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (email === storedEmail && password === storedPassword) {
          localStorage.setItem("is_login", true)
          navigate('/home');
        } else {
          alert('Invalid login credentials');
        }
      }
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

            <div class="col-md-3 text-end">
              <button type="button" class="btn btn-success me-2"><Link to={"/login"} class="nav-link px-2">Login</Link></button>
              <button type="button" class="btn btn-primary"><Link to={"/signup"} class="nav-link px-2">Sign Up</Link></button>
            </div>
          </div>
        </div>
      </header>
      < div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h1 className='my-4'>Login</h1>
        <form onSubmit={handleLogin} style={{ alignItems: 'center' }}>
          <input type="email" class="mt-2 form-control" id="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" class="my-2 form-control" id="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          <input type="checkbox" class="my-2" for="rememeberMe" /> <label for="rememberMe">Remember Me</label><br />
          <button type="submit" className="my-2 btn btn-success w-100">
            Login
          </button>

        </form>
      </ div>
    </>
  )
}

export default Login

