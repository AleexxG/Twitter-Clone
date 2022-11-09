import React from 'react';
import './Main.css';
import Tweet from './Tweet';
import Post from './Post';

function Main() {
  return (
    <div className='main'>
        <div className='main-header'>
            <h1>Home</h1>
        </div>

      <Tweet />

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />

    </div>
  );
}

export default Main;