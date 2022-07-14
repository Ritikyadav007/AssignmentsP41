import { Avatar } from 'antd';
import './Chats.css';
import React, { useEffect, useState } from 'react';
import CallIcon from '@mui/icons-material/Call';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { set, ref as dbref, onValue, push } from 'firebase/database';
import { IconButton } from '@mui/material/';
import { useAuth } from '../../store/AuthContext';
import Message from './Message/Message';
import SendMessage from './SendMessage/SendMessage';
import realtimeDb from '../../Services/DatabaseService';

type ChatsProps = {
  selectedGroupData: any | undefined;
};

export default function Chats(props: ChatsProps) {
  const { selectedGroupData } = props;
  const { name, groupId } = selectedGroupData;
  const groupDetails = dbref(realtimeDb, `groups/${'sada'}/meta`);

  const [message, setMessage] = useState<Array<any>>();
  const [isLoaded, setisLoaded] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const messagesDBRef = dbref(
      realtimeDb,
      `groups/${groupId && groupId}/messages`,
    );
    onValue(messagesDBRef, (snapshot) => {
      const data = snapshot.val();
      const userMessages = Object.entries(data).map((val: Array<any>) => {
        return val[1];
      });
      console.log(userMessages);
      setMessage(userMessages);
    });
  }, [groupId, isLoaded]);

  const handleSentMessage = (msg: string) => {
    const messagesDBRef = dbref(
      realtimeDb,
      `groups/${groupId && groupId}/messages`,
    );
    const dbRef = push(messagesDBRef);
    set(dbRef, {
      fromUser: user.uid,
      message: msg,
      timestamp: new Date().getTime(),
    });
    setisLoaded(true);
  };

  const renderMessages = () => {
    if (message === undefined) {
      return null;
    }
    return message.map((data) => {
      return <Message messageData={data} />;
    });
  };

  const renderChatWindow = () => {
    return (
      <div className="chats">
        <div className="chat_header">
          <Avatar size={45} />
          <div className="chat_headerInfo">
            <h3>{name && name}</h3>
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
        <div className="chat_body">{renderMessages()}</div>
        <div className="chat_footer">
          <SendMessage handleMessage={handleSentMessage} />
        </div>
      </div>
    );
  };

  return renderChatWindow();
}
