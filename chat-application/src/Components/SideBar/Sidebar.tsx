/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import { Avatar } from 'antd';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined';
import { IconButton } from '@mui/material/';
import './Sidebar.css';
import { useEffect, useState } from 'react';
import { getDownloadURL, list, ref } from 'firebase/storage';
import { doc, updateDoc } from '@firebase/firestore';
import EditProfile from '../EditProfile/EditProfile';
import storage, { uploadImage } from '../../Services/StorageService';
import { useAuth } from '../../store/AuthContext';
import db from '../../Services/UserService';
import { useUser } from '../../store/UserContext';

export default function Sidebar() {
  const Icons = [
    AccountCircleOutlinedIcon,
    ChatOutlinedIcon,
    GroupOutlinedIcon,
    AssignmentIndOutlinedIcon,
    SettingsOutlinedIcon,
    LanguageOutlinedIcon,
    Brightness2OutlinedIcon,
  ];

  const [isModalVisible, setisModalVisible] = useState(false);
  const [userImage, setuserImage] = useState('');
  const { LogOut, user } = useAuth();
  const { friendList } = useUser();

  const handleCancel = () => {
    setisModalVisible(false);
  };

  const handleUserChanges = async (
    name: string,
    phone: string,
    newImage: any,
  ) => {
    setisModalVisible(false);
    uploadImage(newImage, user.uid);
    const updateRef = doc(db, 'users', user.uid);
    await updateDoc(updateRef, {
      name,
    });
   
  };

  const handleLogOut = async () => {
    try {
      await LogOut();
    } catch {
      console.log('error');
    }
  };

  useEffect(() => {
    const imageRef = ref(storage, `assets/${user.uid}/profileimage.jpg`);
    getDownloadURL(imageRef).then((url) => {
      setuserImage(url);
    });
  }, []);

  const renderEditModal = () => {
    return (
      <EditProfile
        isVisible={isModalVisible}
        onCancel={handleCancel}
        onSave={handleUserChanges}
      />
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar_items">
        <div className="sidebar_avatar">
          <Avatar size={45} src={userImage} />
        </div>
        <IconButton>
          <AccountCircleOutlinedIcon
            onClick={() => {
              setisModalVisible(true);
            }}
          />
          {renderEditModal()}
        </IconButton>
        <IconButton>
          <ChatOutlinedIcon />
        </IconButton>
        <IconButton>
          <GroupOutlinedIcon />
        </IconButton>
        <IconButton>
          <AssignmentIndOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon onClick={handleLogOut} />
        </IconButton>
        <IconButton>
          <LanguageOutlinedIcon />
        </IconButton>
        <IconButton>
          <Brightness2OutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
}
