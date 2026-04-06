import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Admin() {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get("/admin/overview").then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1>Admin Panel</h1>
        <p>Total Users: {data?.users}</p>
      </div>
    </div>
  );
}