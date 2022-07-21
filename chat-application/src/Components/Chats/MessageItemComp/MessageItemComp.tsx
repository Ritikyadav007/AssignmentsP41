import { Avatar } from 'antd';
import { getDownloadURL, ref } from 'firebase/storage';
import { userInfo } from 'os';
import { useEffect, useState } from 'react';
import storage from '../../../Services/StorageService';
import { useAuth } from '../../../store/AuthContext';
import './MessageItemComp.css';

type MessageProps = {
  messageData: any;
};

export default function MessageItemComp(props: MessageProps) {
  const { messageData } = props;
  const { message, fromUser, timestamp } = messageData;
  const { user } = useAuth();
  const [imageUrl, setImageUrl] = useState<string>();

  useEffect(() => {
    const imageRef = ref(storage, `assets/${fromUser}/profileimage.jpg`);
    getDownloadURL(imageRef).then((url) => {
      setImageUrl(url);
    });
  }, [fromUser]);

  const messageTimeStamp = new Date(timestamp);

  const timeStampString = `${messageTimeStamp.getHours()}:${messageTimeStamp
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;

  const messageCompClass = `chat_messageComp ${
    fromUser === user.uid && 'chat_recieverComp'
  }`;
  const messageClass = `chat_message ${
    fromUser === user.uid && 'chat_reciever'
  }`;

  return (
    <div className={messageCompClass}>
      <Avatar src={imageUrl} />
      <div className={messageClass}>
        {message}
        <br />
        <span className="time">{timeStampString}</span>
      </div>
    </div>
  );
}
