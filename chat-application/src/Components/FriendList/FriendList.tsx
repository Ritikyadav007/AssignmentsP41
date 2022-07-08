/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material/';
import './FriendList.css';
import { getDocs, collection } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import Friend from '../Friend/Friend';
import db from '../../Services/UserService';
import { useAuth } from '../../store/AuthContext';
import storage from '../../Services/StorageService';
import { useUser } from '../../store/UserContext';

export default function FriendList() {
  // const [friendList, setFriendList] = useState<any[]>();

  const { user } = useAuth();
  const {friendList} = useUser();
  

  // useEffect(() => {
  //   getDocs(collection(db, 'users')).then((allUsersSnapshot) => {
  //     const allUsersData = allUsersSnapshot.docs.map(async (userDoc) => {
  //       const userData = userDoc.data();
  //       const { uid } = userData;
  //       const imageRef = ref(storage, `assets/${uid}/profileimage.jpg`);
  //       const imageURL = await getDownloadURL(imageRef);
  //       return { ...userData, url: imageURL };
  //     });

  //     Promise.all(allUsersData).then((updatedAllUserData) => {
  //       setFriendList(updatedAllUserData);
  //     });
  //   });
  // }, []);

  const renderFriendList = () => {
    if (!friendList) {
      // Show No Friends available View
      return null;
    }

    return (
      <div className="friendlist_friends">
        {friendList.map((userData: any) => {
          if (userData.uid !== user.uid) {
            return <Friend userData={userData} />;
          }
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
        </div>
        <div className="friendlist_search">
          <div className="search_container">
            <SearchIcon />
            <input type="text" placeholder="Search user" />
          </div>
        </div>
        {renderFriendList()}
      </div>
    </div>
  );
}
