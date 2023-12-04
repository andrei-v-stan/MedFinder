import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

import '../styles/Topbar.css';

interface TopbarProps {
  isMedicinePage?: boolean;
}

const Topbar: React.FC<TopbarProps> = ({ isMedicinePage }) => {
  const profileId = Cookies.get('profileId');

  const renderProfileButton = () => {
    if (profileId) {
      return (
        <Link to={`/profile/${profileId}`} className="profile-button">
          <img src="../../src/assets/topbar/Profile.png" alt="Profile Button" />
        </Link>
      );
    } else {
      return (
        <Link to="/login" className="profile-button">
          <img src="../../src/assets/topbar/Profile.png" alt="Profile Button" />
        </Link>
      );
    }
  };

  const renderLogo = () => {
    if (isMedicinePage) {
      return (
        <button className="logo-MF-button">
          <Link to="/">
            <img src="../../src/assets/topbar/LogoBanner.png" alt="Logo Button" />
          </Link>
        </button>
      );
    } else {
      return (
        <button className="logo-button">
          <Link to="/">
            <img src="../../src/assets/topbar/Logo.png" alt="Logo Button" />
          </Link>
        </button>
      );
    }
  };

  return (
    <>
      <div className="topbar">
        {renderLogo()}
        {renderProfileButton()}
      </div>
      <div className="spacer"></div>
    </>
  );
};

export default Topbar;
