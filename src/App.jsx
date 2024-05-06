import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import Home from './components/Home';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <section>
        <Home/>
      </section>
    </React.Fragment>
  );
}

export default App;
