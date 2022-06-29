import { useAuth } from '../../store/AuthContext';

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
    <div>
      <button type="submit" onClick={handleLogOut}>
        LogOut
      </button>
    </div>
  );
}
