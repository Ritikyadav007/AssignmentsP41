import { Avatar } from 'antd';
import './Chats.css';
import React from 'react';

export default function Chats() {
  return (
    <div className="chats">
      <div className="chats_Items">
        <Avatar size={80} />
        <h5>Welcome</h5>
        <p>Please select a chat to start messaging</p>
      </div>
    </div>
  );
}
