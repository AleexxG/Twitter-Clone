import React from 'react';
import './Tweet.css';
import twpfp from './img/twpfp.jpg';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

function Tweet() {
  return (
    <div className='tweet'>
        <form>
          <div className='tweet-input'>
            <Avatar className='tweet-input-avatar' alt='a' src={twpfp}/>
            <input className='tweet-input-text' type='text' placeholder="What's happening?"></input>
            <input  className='tweet-input-url' type='text' placeholder="Optional: Enter image URL"></input>
            <Button className='tweet-input-btn' variant='outlined'>Tweet</Button>
          </div>  
        </form>
    </div>
  );
}

export default Tweet;