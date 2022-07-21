import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './Friend.css';
import { useEffect, useState } from 'react';

type FriendsProps = {
  groupData: any;
  handleClick: Function;
};

export default function Friend(props: FriendsProps) {
  const { groupData, handleClick } = props;
  const { name } = groupData;
  const [lastMessage, setLastMessage] = useState<string>();

  useEffect(() => {
    if (groupData.messages === undefined) {
      setLastMessage('...');
    } else {
      const { messages } = groupData;
      const msgArray = Object.values(messages);
      const lastMsg: any = msgArray[msgArray.length - 1];
      setLastMessage(lastMsg.message);
    }
  }, []);

  return (
    <div className="friend">
      <Avatar size={40} src={<UserOutlined />} />
      <div
        className="friend_info"
        onClick={() => {
          handleClick(groupData);
        }}
      >
        <h2>{name}</h2>
        <p>{lastMessage}</p>
      </div>
    </div>
  );
}
