import React from 'react';

export default function Landing() {
  return (
    <div className="App-body">
      <div className="box yellow">
        <div className="yellow-content">
          <p className="yellow-title">
            Aukin ánægja starfsfólks fjarri höfuðstöðvunum
          </p>
          <p className="yellow-text">
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
          <div id="picture">
            <p>Halló</p>
          </div>
        </div>
      </div>
      <div className="box white">
        <div id="pictur2">
          <p>Halló</p>
        </div>
        <p className="white-text">
          Aukin afköst með nútímalegu starfsumhverfi og lausnum fyrir
          sameiginleg vinnusvæði.
        </p>
      </div>
      <div className="box pink">
        <p>Halló hora</p>
      </div>
      <div className="box end">
        <p>Halló hora</p>
      </div>
    </div>
  );
}
