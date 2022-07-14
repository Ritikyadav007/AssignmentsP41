/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { useEffect, useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material/';
import './FriendList.css';
import { set, ref as dbref, get, child } from 'firebase/database';
import { doc, getDoc, updateDoc, arrayUnion } from '@firebase/firestore';
import { nanoid } from 'nanoid';
import Friend from '../Friend/Friend';
import db from '../../Services/UserService';
import { useAuth } from '../../store/AuthContext';
import { useUser } from '../../store/UserContext';
import CreateGroup from '../CreateGroup/CreateGroup';
import realtimeDb from '../../Services/DatabaseService';

type FriendListProps = {
  handleGroupClick: Function;
};
export default function FriendList(props: FriendListProps) {
  const { user } = useAuth();
  const { friendList } = useUser();
  const { handleGroupClick } = props;
  const [isModalVisible, setisModalVisible] = useState(false);
  const [groupList, setGroupList] = useState<Object[]>([]);
  const [isGroupCreated, setisGroupCreated] = useState<boolean>(false);

  const renderGroupList = () => {
    if (groupList === []) {
      console.log('errorrr');
      return null;
    }
    return (
      <div className="friendlist_friends">
        {groupList.map((groupData: Object) => {
          return (
            <Friend groupData={groupData} handleClick={handleGroupClick} />
          );
        })}
      </div>
    );
  };

  useEffect(() => {
    const docRef = doc(db, 'users', user.uid);
    setGroupList([]);
    getDoc(docRef).then((data: any) => {
      setGroupList([]);
      data.data().groups.map((id: string) => {
        const dbRef = dbref(realtimeDb);
        get(child(dbRef, `groups/${id}`)).then((snapshot) => {
          setGroupList((oldArray) => [...oldArray, snapshot.val()]);
        });
      });
    });
  }, [isGroupCreated, user]);

  const handleGroupCreation = async (
    groupName: string,
    selectedUser: string,
  ) => {
    const GroupId = nanoid();
    if (groupName !== '') {
      const dbRef = dbref(realtimeDb, `groups/${GroupId}`);
      set(dbRef, {
        groupId: GroupId,
        name: groupName,
        members: [user.uid, selectedUser],
      });
    } else {
      const selectedUserName = friendList.filter((friend: any) => {
        if (friend.uid === selectedUser || friend.uid === user.uid) {
          return friend.name;
        }
      });
      const GroupName = `${selectedUserName[0].name}-${selectedUserName[1].name}`;
      const dbRef = dbref(realtimeDb, `groups/${GroupId}`);
      set(dbRef, {
        groupId: GroupId,
        name: GroupName,
        members: [user.uid, selectedUser],
      });
    }

    const userUpdateRef = doc(db, 'users', user.uid);
    await updateDoc(userUpdateRef, {
      groups: arrayUnion(GroupId),
    });
    const updateRef = doc(db, 'users', selectedUser);
    await updateDoc(updateRef, {
      groups: arrayUnion(GroupId),
    });
    setisGroupCreated(true);
    setisModalVisible(false);
  };

  const handleCancel = () => {
    setisModalVisible(false);
  };

  const renderCreateGroup = () => {
    return (
      <CreateGroup
        isVisible={isModalVisible}
        onCancel={handleCancel}
        onSave={handleGroupCreation}
      />
    );
  };

  return (
    <div className="friendlist">
      <div className="friendlist_Items">
        <div className="friendlist_header">
          <span>Chats</span>
          <IconButton>
            <NotificationsIcon
              onClick={() => {
                setisModalVisible(true);
              }}
            />
          </IconButton>
          {renderCreateGroup()}
        </div>
        <div className="friendlist_search">
          <div className="search_container">
            <SearchIcon />
            <input type="text" placeholder="Search user" />
          </div>
        </div>
        {renderGroupList()}
      </div>
    </div>
  );
}
