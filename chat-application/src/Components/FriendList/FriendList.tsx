import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material/';
import './FriendList.css';

export default function FriendList() {
  return (
    <div className="friendlist">
      <div className="friendlist_Items">
        <div className="friendlist_header">
          <span>Chats</span>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
        </div>
        <div className="friendlist_search">
          <div className="search_container">
            <SearchIcon />
            <input type="text" placeholder="Search user" />
          </div>
        </div>
        <div className="friendlist_friends">hmm</div>
      </div>
    </div>
  );
}
