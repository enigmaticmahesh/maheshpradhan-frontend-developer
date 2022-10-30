import React from 'react';
import assets from '../../assets/images';

export default function Header() {
  return (
    <header>
      <div className="logo__container">
        <img src={assets.spacexLogo} alt="Sapcex Logo" />
      </div>
      <div className="menu__links">
        <span>FALCON 9</span>
        <span>FALCON HEAVY</span>
        <span>DRAGON</span>
        <span>STARSHIP</span>
        <span>HUMAN SPACEFLIGHT</span>
        <span>RIDESHARE</span>
        <span>STARLINK</span>
      </div>
      <button
        className="hamburger__menu"
        type="button"
        onClick={(e) => {
          e.currentTarget.classList.toggle('open');
          document
            .querySelector('.mobile__menu__links')
            .classList.toggle('show__mobile__menu');
        }}
      >
        <span className="hamburger__top"></span>
        <span className="hamburger__middle"></span>
        <span className="hamburger__bottom"></span>
      </button>
      <div className="mobile__menu__links">
        <span>FALCON 9</span>
        <span>FALCON HEAVY</span>
        <span>DRAGON</span>
        <span>STARSHIP</span>
        <span>HUMAN SPACEFLIGHT</span>
        <span>RIDESHARE</span>
        <span>STARLINK</span>
      </div>
    </header>
  );
}
