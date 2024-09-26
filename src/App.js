import React from 'react';
import './App.css';
import Description from './components/Description';
import './components/Navbar';
import Header from './components/Navbar';
import './components/Button';
import Button from './components/Button';
import Homepage_footer from './components/Homepage_footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';





function App() {
  return (
    <div className="App">
      <div className="text-container">
        <Header />
        <Description />
        <Button />
        <Homepage_footer/>
      </div>
      
    </div>
  );
}


export default App;
