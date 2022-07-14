import { useState } from 'react';
import Chats from '../../Components/Chats/Chats';
import FriendList from '../../Components/FriendList/FriendList';
import RenderChat from '../../Components/RenderChat/RenderChat';
import Sidebar from '../../Components/SideBar/Sidebar';
import { useAuth } from '../../store/AuthContext';
import './Home.css';

export default function Home() {
  const [groupData, setGroupData] = useState<any>();
  const getGroupData = (data: any) => {
    setGroupData(data);
  };
  return (
    <div className="home">
      <Sidebar />
      <FriendList handleGroupClick={getGroupData} />
      {groupData ? <Chats selectedGroupData={groupData} /> : <RenderChat />}
    </div>
  );
}
