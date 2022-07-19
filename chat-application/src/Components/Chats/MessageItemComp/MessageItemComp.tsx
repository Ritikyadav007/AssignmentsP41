import { Avatar } from 'antd';
import { userInfo } from 'os';
import { useAuth } from '../../../store/AuthContext';
import './MessageItemComp.css';

type MessageProps = {
  messageData: any;
};

export default function MessageItemComp(props: MessageProps) {
  const { messageData } = props;
  const { message, fromUser, timestamp } = messageData;
  const { user } = useAuth();

  const messageTimeStamp = new Date(timestamp);

  const timeStampString = `${messageTimeStamp.getHours()}:${messageTimeStamp.getMinutes()}`;

  const messageCompClass = `chat_messageComp ${
    fromUser === user.uid && 'chat_recieverComp'
  }`;
  const messageClass = `chat_message ${
    fromUser === user.uid && 'chat_reciever'
  }`;

  return (
    <div className={messageCompClass}>
      <Avatar />
      <div className={messageClass}>
        {message}
        <br />
        <span className="time">{timeStampString}</span>
      </div>
    </div>
  );
}
