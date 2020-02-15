import React from 'react';
import Logo from '../img/logo2.png';

export default function Header() {

  return (

    <div className="App-header">
      <div className="header logo">
        <img src={Logo} className="logo" />
      </div>
      <div className="navs">
        <ul>
          <li className="nav">Um okkur</li>
          <li className="nav">Fyrirtæki</li>
          <li className="nav">Einstaklingar</li>
          <li className="nav">Hafa samband</li>
          <li className="nav blue">Innskráning</li>
        </ul>
      </div>
    </div>
  )
};
