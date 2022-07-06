import { Avatar } from 'antd';
import './Friend.css';
import React from 'react';

type FriendsProps = {
  userData: any;
};

export default function Friend(props: FriendsProps) {
  const { userData } = props;
  const { name, url } = userData;
  // console.log(userData);
  return (
    <div className="friend">
      <Avatar size={40} src={url} />
      <div className="friend_info">
        <h2>{name}</h2>
        <p>Last Message...</p>
      </div>
    </div>
  );
}
