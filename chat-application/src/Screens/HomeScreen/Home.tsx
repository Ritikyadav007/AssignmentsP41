import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Chats from '../../Components/Chats/Chats';
import GroupListComp from '../../Components/FriendList/GroupListComp';
import ReactNotification from '../../Components/ReactNotification';
import RenderChat from '../../Components/RenderChat/RenderChat';
import Sidebar from '../../Components/SideBar/Sidebar';
import Notification from '../../Components/Notification';
import { onMessageListener } from '../../Services/CloudMessageService';
import './Home.css';
import { fetchGroups, GroupState } from '../../store/redux/reducers/GroupSlice';
import { useAuth } from '../../store/AuthContext';
import { AppDispatch } from '../../store/redux/store';
import { setString, StringState } from '../../store/redux/reducers/StrSlice';

// const AppStore = {
//   currentUser: {},
//   userFriendList: []
//   allGroupData :{
//     "groupId1": {
//       // Group Data
//     },
//     groupid2: {
//       // message
//     }
//   },
//   selectedGroupChatId: ""
// }

export default function Home() {
  const [groupData, setGroupData] = useState<any>();
  // const [selectedGroupId, setSelectedGroupId] = useState<string>();
  const [show, setShow] = useState(false);
  const [activeComp, setActiveComp] = useState('friendlist');
  const [notification, setNotification] = useState({
    title: 'hello',
    body: 'hiiii',
  });
  const stringVal = useSelector((state: StringState) => state.str);
  const { user } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setString('hello'));
  }, []);

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
  console.log(stringVal);
  return (
    <div>
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
        <GroupListComp
          handleGroupClick={getGroupData}
          selectedGroupData={groupData}
        />
        {groupData ? (
          <Chats selectedGroupData={groupData} handleBackButton={() => {}} />
        ) : (
          <RenderChat />
        )}
      </div>
      <div className="mobileScreen">
        <Sidebar />
        {activeComp === 'friendlist' && (
          <GroupListComp
            handleGroupClick={(data: any) => {
              setGroupData(data);
              setActiveComp('chat');
            }}
            selectedGroupData={groupData}
          />
        )}
        {activeComp === 'chat' && (
          <Chats
            selectedGroupData={groupData}
            handleBackButton={() => {
              setActiveComp('friendlist');
            }}
          />
        )}
      </div>
    </div>
  );
}
