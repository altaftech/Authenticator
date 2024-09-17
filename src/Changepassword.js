import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css'

const Changepassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleChangePassword = (e) => {
    e.preventDefault()
    const storedPassword = localStorage.getItem('password');

    if (oldPassword === '') {
      alert('Enter your old password')
    } else {
      if (oldPassword === storedPassword) {
        if (newPassword === '') {
          alert('Enter your new password')
        }
        else {
          if (newPassword === confirmPassword) {
            localStorage.setItem('password', newPassword);
            alert('Password changed successfully! \nNow you will need to login again.');
            navigate('/login');
          } else {
            alert('New password and confirm password do not match');
          }
        }
      } else {
        alert('Old password is incorrect');
      }
    }
  };

  return (
    <>
      <header className="p-2 bg-black text-white sticky-top">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none show1">
              <img src="favicon.ico" alt="logo" width="40" height="40" />
              <Link className="navbar-brand ms-2 text-white fontSize" to="/">Authenticator</Link>
            </Link>

            <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0 ms-auto">
              <li className="nav-item"><Link className="nav-link text-white" aria-current="page" to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="dashboardw.png" alt="img" width={20} /> Dashboard</Link></li>
            </ul>
          </div>
        </div>
      </header>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h1 className='my-4'>Change Password</h1>
        <form onSubmit={handleChangePassword} style={{ alignItems: 'center' }}>
          <input type="password" class="mt-2 form-control" placeholder="Old Password" value={oldPassword} onChange={e => setOldPassword(e.target.value)} />
          <input type="password" class="mt-2 form-control" placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
          <input type="password" class="my-2 form-control" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          <button type="submit" className="btn btn-success" style={{ padding: '5px 30px', borderRadius: '8px' }}>
            Change Password
          </button>

        </form>
      </div>
    </>
  )
}

export default Changepassword
