import { Avatar } from 'antd';
import './Message.css';

type MessageProps = {
  message: string;
  time: string;
};

export default function Message(props: MessageProps) {
  const { message, time } = props;
  return (
    <div className={`chat_messageComp ${true && 'chat_recieverComp'} `}>
      <Avatar />
      <div className={`chat_message ${true && 'chat_reciever'} `}>
        {message} <br />
        <span className="time">{time}</span>
      </div>
    </div>
  );
}
