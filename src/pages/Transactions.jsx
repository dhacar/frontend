import { useEffect, useState } from "react";
import API from "../api/axios";
import TransactionForm from "../components/TransactionForm";
import Navbar from "../components/Navbar";

export default function Transactions() {
  const [data, setData] = useState([]);

  const load = async () => {
    const res = await API.get("/transactions");
    setData(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <TransactionForm reload={load} />

        {data.map((t) => (
          <div key={t._id} className="border p-2 mt-2">
            {t.title} - ${t.amount}
          </div>
        ))}
      </div>
    </div>
  );
}