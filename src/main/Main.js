import React from 'react';
import Tweet from './Tweet';
import './Main.css';

function Main() {
  return (
    <div className='main'>
        <div className='main-header'>
            <h1>Home</h1>
        </div>

      <Tweet />

    </div>
  );
}

export default Main;