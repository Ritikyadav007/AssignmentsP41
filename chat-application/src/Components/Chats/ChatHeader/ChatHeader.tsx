/* eslint-disable react/function-component-definition */
import React, { memo } from 'react';
import { Avatar } from 'antd';
import CallIcon from '@mui/icons-material/Call';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton } from '@mui/material/';
import './ChatHeader.css';

type ChatHeaderProps = {
  chatName: string;
  chatImage: string;
};

const ChatHeaderButtons = memo(() => {
  return (
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
  );
});

const ChatHeader: React.FC<ChatHeaderProps> = (props) => {
  const { chatName, chatImage } = props;
  const defaultImg = 'https://cdn-icons-png.flaticon.com/512/166/166258.png';

  const avatar = chatImage !== undefined ? chatImage : defaultImg;
  return (
    <div className="chat_header">
      <Avatar size={45} src={avatar} />
      <div className="chat_headerInfo">
        <h3>{chatName}</h3>
      </div>
      <ChatHeaderButtons />
    </div>
  );
};

export default memo(ChatHeader);
