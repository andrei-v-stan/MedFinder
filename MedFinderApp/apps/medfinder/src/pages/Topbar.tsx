import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import TopbarStyle from '../styles/Topbar.module.css';

interface TopbarProps {
  isMedicinePage?: boolean;
}

const Topbar: React.FC<TopbarProps> = ({ isMedicinePage }) => {
  const profileId = Cookies.get('profileId');

  const handleLogIn = async () => {
    Cookies.remove('profileId');
    window.location.href = '/';
  };

  const renderProfileButton = () => {
    if (profileId) {
      return (
        <div className={TopbarStyle.profileButtonsWrapper}>
          <Link to={`/profile/${profileId}`} className={TopbarStyle.profileButton}>
            <img src="../../src/assets/topbar/Profile.png" alt="Profile Button" />
          </Link>
          <button type='button' onClick={handleLogIn} className={TopbarStyle.logoutButton}>
            <img src="../../src/assets/topbar/logout.png" alt="Logout Button" />
          </button>
        </div>
      );
    } else {
      return (
        <Link to="/login" className={TopbarStyle.profileButton}>
          <img src="../../src/assets/topbar/Profile.png" alt="Profile Button" />
        </Link>
      );
    }
  };

  const renderLogo = () => {
    if (isMedicinePage) {
      return (
        <button className={TopbarStyle.logoMFButton}>
          <Link to="/">
            <img src="../../src/assets/topbar/LogoBanner.png" alt="Logo Button" />
          </Link>
        </button>
      );
    } else {
      return (
        <button className={TopbarStyle.logoButton}>
          <Link to="/">
            <img src="../../src/assets/topbar/Logo.png" alt="Logo Button" />
          </Link>
        </button>
      );
    }
  };

  return (
    <>
      <div className={TopbarStyle.topbar}>
        {renderLogo()}
        {renderProfileButton()}
      </div>
      <div className={TopbarStyle.spacer}></div>
    </>
  );
};

export default Topbar;
