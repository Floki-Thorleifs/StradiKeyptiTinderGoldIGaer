import React from 'react';
import Logo from '../img/logo2.png';

export default function Header() {

  return (

    <div className="App-header">
      <div className="header">
        <img src={Logo} className="logo" />
        <div className="navs">
          <a className="nav">Um okkur</a>
          <a className="nav">Fyrirtæki</a>
          <a className="nav">Einstaklingar</a>
          <a className="nav">Hafa samband</a>
          <a className="nav blue">Innskráning</a>
        </div>
      </div>
    </div>
  )
};
