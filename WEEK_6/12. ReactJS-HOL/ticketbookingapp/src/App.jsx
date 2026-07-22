import './App.css';
import { useState } from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

function App() {
  const [onLogin, setOnLogin] = useState(false);

  const handleLogin = () => {
    setOnLogin(true);
  };

  const handleLogout = () => {
    setOnLogin(false);
  };

  const PagetoShow = onLogin
    ? <UserGreeting onLogin={handleLogout} />
    : <GuestGreeting onLogout={handleLogin} />;

  return (
    <>
      {PagetoShow}
    </>
  );
}

export default App;