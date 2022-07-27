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
import { PlusOutlined } from '@ant-design/icons';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import Friend from '../Friend/Friend';
import db from '../../Services/UserService';
import { useAuth } from '../../store/AuthContext';
import CreateGroup from '../CreateGroup/CreateGroup';
import realtimeDb from '../../Services/DatabaseService';

type FriendListProps = {
  handleGroupClick: Function;
};
export default function FriendList(props: FriendListProps) {
  const { user } = useAuth();
  const { handleGroupClick } = props;
  const [isModalVisible, setisModalVisible] = useState(false);
  const [groupList, setGroupList] = useState<Object[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isGroupCreated, setisGroupCreated] = useState<boolean>(false);

  useEffect(() => {
    const docRef = doc(db, 'users', user.uid);
    getDoc(docRef).then((data: any) => {
      const dbRef = dbref(realtimeDb);
      const groupDataPromise = data.data().groups.map((id: string) => {
        return get(child(dbRef, `groups/${id}`)).then((snapshot) => {
          return snapshot.val();
        });
      });
      Promise.all(groupDataPromise).then((values) => {
        setGroupList(values);
      });
    });
    setisGroupCreated(false);
  }, [isGroupCreated, user]);

  const handleGroupCreation = async (
    groupName: string,
    selectedUsers: CheckboxValueType[],
    groupImage: string,
  ) => {
    const GroupId = nanoid();
    const dbRef = dbref(realtimeDb, `groups/${GroupId}`);
    const groupMembers = selectedUsers.map((id) => {
      return id.toString();
    });
    set(dbRef, {
      groupId: GroupId,
      name: groupName,
      members: [user.uid, ...groupMembers],
      imageUrl: groupImage,
    });
    // selectedUsers.map((member) => {
    //   set(dbRef, {
    //     groupId: GroupId,
    //     name: groupName,
    //     members: arrayUnion(member),
    //   });
    // });

    // } else {
    //   const selectedUserName = friendList.filter((friend: any) => {
    //     if (friend.uid === selectedUser || friend.uid === user.uid) {
    //       return friend.name;
    //     }
    //   });
    //   const GroupName = `${selectedUserName[0].name}-${selectedUserName[1].name}`;
    //   const dbRef = dbref(realtimeDb, `groups/${GroupId}`);
    //   set(dbRef, {
    //     groupId: GroupId,
    //     name: GroupName,
    //     members: [user.uid, selectedUser],
    //   });
    //   setisGroupCreated(true);
    // }

    const userUpdateRef = doc(db, 'users', user.uid);
    await updateDoc(userUpdateRef, {
      groups: arrayUnion(GroupId),
    });

    selectedUsers.map(async (id) => {
      const updateRef = doc(db, 'users', id.toString());
      await updateDoc(updateRef, {
        groups: arrayUnion(GroupId),
      });
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

  const fetchSearchedGroup = (Term: string) => {
    const searchedGroups =
      Term === ''
        ? groupList
        : groupList.filter((group: any) => {
            return group && group.name.toLowerCase().includes(Term);
          });
    return searchedGroups;
  };

  const renderGroupList = () => {
    if (fetchSearchedGroup(searchTerm) === []) {
      return null;
    }
    return (
      <div className="friendlist_friends">
        {fetchSearchedGroup(searchTerm).map((groupData: Object) => {
          return (
            <Friend groupData={groupData} handleClick={handleGroupClick} />
          );
        })}
      </div>
    );
  };

  return (
    <div className="friendlist">
      <div className="friendlist_Items">
        <div className="friendlist_header">
          <span>Chats</span>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          {renderCreateGroup()}
        </div>
        <div className="friendlist_search">
          <div className="search_container">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search user and Groups"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        {renderGroupList()}
        <div className="friendlist_creategroup">
          <button
            type="button"
            className="btn btn-light btn-sm"
            onClick={() => {
              setisModalVisible(true);
            }}
          >
            {' '}
            <p>
              <PlusOutlined />
            </p>
            <span>Create Group</span>
          </button>
        </div>
      </div>
    </div>
  );
}
