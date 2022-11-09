import React from 'react';
import './Navbar.css';
import NavbarAnim from './NavbarAnim';

import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Button from '@mui/material/Button';

function Navbar() {
  return (
    <div className='navbar'>

      <TwitterIcon className='navbar-twitter-icon'/>

      <NavbarAnim active text='Home' Icon={HomeIcon}/>
      <NavbarAnim text='Explore' Icon={TagIcon}/>
      <NavbarAnim text='Notifications' Icon={NotificationsNoneIcon}/>
      <NavbarAnim text='Messages' Icon={MailOutlineIcon}/>
      <NavbarAnim text='Bookmarks' Icon={BookmarkBorderIcon}/>
      <NavbarAnim text='Lists' Icon={ArticleOutlinedIcon}/>
      <NavbarAnim text='Profile' Icon={PersonOutlineOutlinedIcon}/>
      <NavbarAnim text='More' Icon={MoreHorizOutlinedIcon}/>
      
      <Button variant='outlined' className='navbar-tweet-btn'>Tweet</Button>
    </div>
  );
}

export default Navbar;