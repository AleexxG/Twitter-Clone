import React from 'react';
import './NavbarAnim.css';

function NavbarAnim({active, text, Icon}) {
  return (
    <div className={`navbarAnim ${active && 'navbarAnim-active'}`}>
        <Icon />
        <h2>{text}</h2>
    </div>
  );
}

export default NavbarAnim;