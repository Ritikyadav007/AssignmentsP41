import { useState } from 'react';
import Chats from '../../Components/Chats/Chats';
import FriendList from '../../Components/FriendList/FriendList';
import ReactNotification from '../../Components/ReactNotification';
import RenderChat from '../../Components/RenderChat/RenderChat';
import Sidebar from '../../Components/SideBar/Sidebar';
import Notification from '../../Components/Notification';
import { onMessageListener } from '../../Services/CloudMessageService';
import { useAuth } from '../../store/AuthContext';
import './Home.css';

export default function Home() {
  const [groupData, setGroupData] = useState<any>();
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({
    title: 'hello',
    body: 'hiiii',
  });

  onMessageListener()
    .then((payload: any) => {
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
    })
    .catch((err: any) => console.log(err));

  const getGroupData = (data: any) => {
    setGroupData(data);
  };
  return (
    <div className="home">
      {show ? (
        <ReactNotification
          title={notification.title}
          body={notification.body}
        />
      ) : (
        <> </>
      )}
      <Notification />
      <Sidebar />
      <FriendList handleGroupClick={getGroupData} />
      {groupData ? <Chats selectedGroupData={groupData} /> : <RenderChat />}
    </div>
  );
}
