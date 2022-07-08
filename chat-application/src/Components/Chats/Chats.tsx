import { Avatar } from 'antd';
import './Chats.css';
import React, { useState } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';
import { useAuth } from '../../store/AuthContext';
import storage from '../../Services/StorageService';

export default function Chats() {
  const [userImage, setuserImage] = useState('');
  const { user } = useAuth();
  const imageRef = ref(storage, `assets/${user.uid}/profileimage.jpg`);
  getDownloadURL(imageRef).then((url) => {
    setuserImage(url);
  });

  return (
    <div className="chats">
      <div className="chats_Items">
        <Avatar size={80} src={userImage} />
        <h5>Welcome</h5>
        <p>Please select a chat to start messaging</p>
      </div>
    </div>
  );
}
