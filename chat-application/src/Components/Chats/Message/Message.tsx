import { Avatar } from 'antd';
import { userInfo } from 'os';
import { useAuth } from '../../../store/AuthContext';
import './Message.css';

type MessageProps = {
  messageData: any;
  time: string;
};

export default function Message(props: MessageProps) {
  const { messageData, time } = props;
  const { message, fromUser, timestamp } = messageData;
  const { user } = useAuth();

  // 3 MINS AGO
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
