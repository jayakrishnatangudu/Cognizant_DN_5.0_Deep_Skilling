   
export default function UserGreeting({ onLogin }) {
  return (
    <>
      <h1>Welcome Back!</h1>
      <button onClick={onLogin}>Logout</button>
    </>
  );
}