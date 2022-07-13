import { Avatar } from 'antd';
import './Chats.css';
import React, { useEffect, useState } from 'react';
import CallIcon from '@mui/icons-material/Call';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { getDownloadURL, ref } from 'firebase/storage';
import { set, ref as dbref, onValue, push } from 'firebase/database';
import { IconButton } from '@mui/material/';
import firebase from 'firebase/compat/app';
import { useAuth } from '../../store/AuthContext';
import storage from '../../Services/StorageService';
import Message from './Message/Message';
import SendMessage from './SendMessage/SendMessage';
import realtimeDb from '../../Services/DatabaseService';

export default function Chats() {
  const messagesDBRef = dbref(realtimeDb, `groups/${'sadas'}/messages`);
  const groupDetails = dbref(realtimeDb, `groups/${'sada'}/meta`);
  // {
  //   chatName: "Ritik - sam",
  //   users: [],
  // }

  const [userImage, setuserImage] = useState('');
  const [message, setMessage] = useState<Array<any>>();
  const [isLoaded, setisLoaded] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const imageRef = ref(storage, `assets/${user.uid}/profileimage.jpg`);
    getDownloadURL(imageRef).then((url) => {
      setuserImage(url);
    });
  }, []);

  useEffect(() => {
    const dataRef = dbref(realtimeDb, 'groups/group1/messages');
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      const userMessages = Object.entries(data).map((val: Array<any>) => {
        return val[1];
      });
      console.log(userMessages);
      setMessage(userMessages);
    });
  }, []);

  const handleSentMessage = (msg: string) => {
    const dbRef = push(dbref(realtimeDb, 'groups/group1/messages'));
    set(dbRef, {
      fromUser: user.uid,
      message: msg,
      timestamp: new Date().getTime(),
    });
    setisLoaded(true);
  };

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
        {message &&
          message.map((data) => {
            return <Message messageData={data} time="2:20" />;
          })}
      </div>
      <div className="chat_footer">
        <SendMessage handleMessage={handleSentMessage} />
      </div>
    </div>
  );
}
