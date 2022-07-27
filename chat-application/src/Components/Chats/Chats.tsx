import './Chats.css';
import React, { useEffect, useState } from 'react';
import { set, ref as dbref, onValue, push } from 'firebase/database';
import { useAuth } from '../../store/AuthContext';
import Message from './MessageItemComp/MessageItemComp';
import SendMessage from './SendMessage/SendMessage';
import realtimeDb from '../../Services/DatabaseService';
import ChatHeader from './ChatHeader/ChatHeader';

type ChatsProps = {
  selectedGroupData: any | undefined;
};

export default function Chats(props: ChatsProps) {
  const { selectedGroupData } = props;
  const { name, imageUrl, groupId } = selectedGroupData;

  const [messages, setMessages] = useState<any[]>([]);
  const [isLoaded, setisLoaded] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const messagesDBRef = dbref(
      realtimeDb,
      `groups/${groupId && groupId}/messages`,
    );
    onValue(messagesDBRef, (snapshot) => {
      const data = snapshot.val();
      if (data === null) {
        setMessages([]);
      }
      const userMessages = Object.entries(data).map((val: Array<any>) => {
        return val[1];
      });
      console.log(userMessages);
      setMessages(userMessages);
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
    return messages.map((data) => {
      return <Message messageData={data} />;
    });
  };

  return (
    <div className="chats">
      <ChatHeader chatName={name} chatImage={imageUrl} />
      <div className="chat_body">{renderMessages()}</div>
      <div className="chat_footer">
        <SendMessage handleMessage={handleSentMessage} />
      </div>
    </div>
  );
}
