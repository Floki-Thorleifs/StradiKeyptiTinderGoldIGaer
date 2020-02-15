import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleMap from './components/googleMaps';
import Header from './components/header';
import Landing from './components/landing';
import Footer from './components/footer';

function App() {
  return (
    <div className="">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
