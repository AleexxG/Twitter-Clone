import React from 'react';
import twpfp from './img/twpfp.jpg';
import './Post.css';

import Avatar from '@mui/material/Avatar';
import VerifiedIcon from '@mui/icons-material/Verified';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

function Post() {
  return (
    <div className='post'>
        <div className='post-avatar'>
          <Avatar src={twpfp}/>
        </div>

        <div className='post-content'>
          <div className='post-name'>
            <h2>Gruja 
              <span>
                <VerifiedIcon className='post-verified' />
              </span>
              <small className='post-username'>@gruja22</small>
            </h2>
          </div>
          <div className='post-text'>
            <p>prvi post</p>
          </div>
          <div className='post-image'>
            <img alt='' src={twpfp}></img>
          </div>
          <div className='post-interaction'>
            <ModeCommentOutlinedIcon fontSize='small'/>
            <RepeatRoundedIcon fontSize='small'/>
            <FavoriteBorderRoundedIcon fontSize='small'/>
            <FileUploadOutlinedIcon fontSize='small'/>
          </div>
        </div>
    </div>
  )
}

export default Post;