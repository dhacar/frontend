import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl">Dashboard</h1>
        <p>Welcome to Finance Tracker</p>
      </div>
    </div>
  );
}