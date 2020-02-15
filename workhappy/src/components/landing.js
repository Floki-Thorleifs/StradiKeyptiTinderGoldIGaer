import React from 'react';
import Pic1 from '../img/026.png';
import Pic2 from '../img/034.png';
import Pic3 from '../img/024.png';

export default function Landing() {
  return (
    <div className="App-body">
      <div className="box yellow">
        <div className="yellow-content">
          <p className="box-title">
            Aukin ánægja starfsfólks fjarri höfuðstöðvunum
          </p>
          <p className="box-text">
            Við gerum þér kleift að útvega starfsfólki sem frekar vilja vinna
            nær sínu heimili vinnuaðstöðu í félagslegu umhverfi innan annarra
            fyrirtækja.
          </p>
          <div className="yellow-buttons">
            <a className="yellow-button" href="/">
              Skrá mitt fyrirtæki
            </a>
            <a className="yellow-button" href="/">
              Skrá mitt fyrirtæki
            </a>
          </div>
        </div>
        <img className="box-picture" src={Pic1} alt="Woman" />
      </div>
      <div className="box white">
        <img className="box-picture" src={Pic2} alt="Woman" />
        <p className="box-text center">
          Aukin afköst með nútímalegu starfsumhverfi og lausnum fyrir
          sameiginleg vinnusvæði.
        </p>
      </div>
      <div className="box pink">
        <div className="box-content">
          <p className="box-title">Ísland er meira en bara Reykjavík.</p>
          <p className="box-text">
            Víkkaðu sjóndeildarhringinn með félagslegri lausn á
            vinnusvæða-hugtakinu.
          </p>
        </div>
        <img className="box-picture" src={Pic3} alt="Woman" />
      </div>
      <div className="box end">
        <p>Halló hora</p>
      </div>
    </div>
  );
}
