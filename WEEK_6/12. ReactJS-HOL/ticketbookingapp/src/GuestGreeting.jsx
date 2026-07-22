export default function GuestGreeting({ onLogout }) {
  return (
    <>
      <h1>Please Login</h1>
      <button onClick={onLogout}>Login</button>
    </>
  );
}