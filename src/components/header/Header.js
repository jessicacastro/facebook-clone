import React from 'react';
import './Header.css';

import FacebookLogo from '../../assets/facebook-logo.png';

function Header() {
  return(
    <header>
      <div className="logo">
        <img src={FacebookLogo} alt="Facebook Logo"/>
      </div>
      <div className="option">Meu perfil</div>
    </header>
  );
}

export default Header;