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

  return (
    <div
      className={`chat_messageComp ${
        fromUser === user.uid && 'chat_recieverComp'
      } `}
    >
      <Avatar />
      <div
        className={`chat_message ${fromUser === user.uid && 'chat_reciever'} `}
      >
        {message}
        <br />
        <span className="time">{timeStampString}</span>
      </div>
    </div>
  );
}
