import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem('name');
  useEffect(() => {
    if (localStorage.getItem("is_login") == null) {
      navigate('/signup');
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("is_login");
    navigate('/login');
  };
  const deleteAccount = () => {
    if (window.confirm('Are you sure ! \nDo you want to permanently delete your account ?')) {

      localStorage.removeItem("is_login");
      localStorage.clear();
      navigate('/signup');
    }
  }
  return (
    <>
      <header className="p-2 bg-black text-white sticky-top">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none show1">
              <img src="favicon.ico" alt="logo" width="40" height="40" />
              <Link className="navbar-brand ms-2 text-white fontSize" to="/">Authenticator</Link>
            </Link>

            <div class="flex-shrink-0 dropdown">
              <Link href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="user.png" alt="mdo" width="50" height="50" class="rounded-circle" />
              </Link>
              <ul class="dropdown-menu mx-0 border-0 shadow w-220px" data-bs-theme="light">
                <li>
                  <Link className="dropdown-item" aria-current="page" to="/home" style={{ display: 'flex', alignItems: 'center', fontWeight: '500' }}>
                    <img src="dashboard.png" alt="img" width={18} /> &nbsp;&nbsp;Dashboard
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" aria-current="page" to="/changepassword" style={{ display: 'flex', alignItems: 'center', fontWeight: '500' }}>
                    <img src="chpass.png" alt="img" width={18} /> &nbsp;&nbsp;Change Password
                  </Link>
                </li>
                <li>
                  <button className="dropdown-item" aria-current="page" to="" onClick={() => deleteAccount()} style={{ display: 'flex', alignItems: 'center', fontWeight: '500' }}>
                    <img src="delete.png" alt="img" width={18} /> &nbsp;&nbsp;Delete Account
                  </button>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <button className="logout-button dropdown-item" aria-current="page" to="" onClick={() => handleLogout()} style={{ display: 'flex', alignItems: 'center', fontWeight: '500' }}>
                    <img src="logout.png" alt="img" width={18} className="logout-img" /> &nbsp;&nbsp;Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <h1 style={{ marginTop: '50px', textTransform: 'capitalize', textDecoration: 'underline' }}>Welcome <span style={{ color: 'orange' }}>{name}</span> Sir <br />glad to see you</h1><br />
          <button onClick={() => navigate('/changepassword')} className="btn btn-success" style={{ borderRadius: '8px', padding: '5px', fontWeight: 'bold', width: '300px' }}>
            <img src="chpassw.png" alt="chpass" width={25} /> Change Password
          </button><br />
         <button onClick={() => handleLogout()} className="btn btn-primary" style={{ borderRadius: '8px', padding: '5px', fontWeight: 'bold', width: '300px' }}>
            <img src="logout.png" alt="logout" width={25} /> Logout
          </button><br />
          <button onClick={() => deleteAccount()} className="btn btn-danger" style={{ borderRadius: '8px', padding: '5px', fontWeight: 'bold', width: '300px' }}>
            <img src="deletew.png" alt="delete" width={25} /> Delete Account
          </button>
        </div>
      </div>
    </>
  )
}

export default Home

