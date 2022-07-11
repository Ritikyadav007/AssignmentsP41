import { Avatar } from 'antd';
import './Chats.css';
import React, { useEffect, useState } from 'react';
import CallIcon from '@mui/icons-material/Call';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { getDownloadURL, ref } from 'firebase/storage';
import { IconButton } from '@mui/material/';
import { useAuth } from '../../store/AuthContext';
import storage from '../../Services/StorageService';
import Message from './Message/Message';
import SendMessage from './SendMessage/SendMessage';

export default function Chats() {
  const [userImage, setuserImage] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    const imageRef = ref(storage, `assets/${user.uid}/profileimage.jpg`);
    getDownloadURL(imageRef).then((url) => {
      setuserImage(url);
    });
  }, []);

  return (
    <div className="chats">
      {/* <div className="chats_Items">
        <Avatar size={80} src={userImage} />
        <h5>Welcome</h5>
        <p>Please select a chat to start messaging</p>
      </div> */}
      <div className="chat_header">
        <Avatar size={45} />
        <div className="chat_headerInfo">
          <h3>Chat</h3>
        </div>

        <div className="chat_headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <CallIcon />
          </IconButton>
          <IconButton>
            <VideoCallIcon />
          </IconButton>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <Message message="hello" time="2:20" />
      </div>
      <div className="chat_footer">
        <SendMessage />
      </div>
    </div>
  );
}
