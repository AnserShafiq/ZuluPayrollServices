// Loading.js
import React from 'react';
import './style.css';

const Loading = () => {
  return (
    <div className="loading-screen">
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      <h1>Loading...</h1>
    </div>
  );
};

export default Loading;