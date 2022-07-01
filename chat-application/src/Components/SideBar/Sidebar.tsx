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
  return (
    <div className="sidebar">
      <div className="sidebar_items">
        <div className="sidebar_avatar">
          <Avatar size={45} />
        </div>
        {Icons.map((Icon) => {
          return (
            <IconButton>
              <Icon />
            </IconButton>
          );
        })}
      </div>
    </div>
  );
}
