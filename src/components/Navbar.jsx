import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-4">
      <Link to="/">Dashboard</Link>
      <Link to="/transactions">Transactions</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/admin">Admin</Link>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}