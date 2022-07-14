import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './Friend.css';

type FriendsProps = {
  groupData: any;
  handleClick: Function;
};

export default function Friend(props: FriendsProps) {
  const { groupData, handleClick } = props;
  const { name } = groupData;
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
        <p>Last Message...</p>
      </div>
    </div>
  );
}
