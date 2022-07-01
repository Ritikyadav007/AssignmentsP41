import Chats from '../../Components/Chats/Chats';
import FriendList from '../../Components/FriendList/FriendList';
import Sidebar from '../../Components/SideBar/Sidebar';
import { useAuth } from '../../store/AuthContext';
import './Home.css';

export default function Home() {
  const { LogOut } = useAuth();
  const handleLogOut = async () => {
    try {
      await LogOut();
    } catch {
      console.log('error');
    }
  };
  return (
    <div className="home">
      <Sidebar />
      <FriendList />
      <Chats />
    </div>
  );
}
