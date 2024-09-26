import React from 'react';
import '../components/style/Button.css';

function Button() {
  return (
    <div className="button-container">
      <button className="btn-custom">
        Veja mais 
        <i className="fas fa-circle-down" style={{ fontSize: '1.5rem', marginLeft: '10px' }}></i>
      </button>
    </div>
  );
}

export default Button;
