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
  const defaultImg = 'https://cdn-icons-png.flaticon.com/512/166/166258.png';

  const groupAvatar =
    groupData.imageUrl === undefined ? defaultImg : groupData.imageUrl;

  useEffect(() => {
    if (groupData.messages === undefined) {
      setLastMessage('...');
    } else {
      const { messages } = groupData;
      const msgArray = Object.values(messages);
      const lastMsg: any = msgArray[msgArray.length - 1];
      if (lastMsg.message.length > 10) {
        setLastMessage(`${lastMsg.message.slice(0, 9)}...`);
      } else {
        setLastMessage(lastMsg.message);
      }
    }
  }, [groupData]);

  return (
    <div
      className="friend"
      onClick={() => {
        handleClick(groupData);
      }}
    >
      <Avatar size={40} src={groupAvatar} />
      <div className="friend_info">
        <h2>{name}</h2>
        <p>{lastMessage}</p>
      </div>
    </div>
  );
}
