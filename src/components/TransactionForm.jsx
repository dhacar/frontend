import { useState } from "react";
import API from "../api/axios";

export default function TransactionForm({ reload }) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    type: "income",
  });

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/transactions", form);
    setForm({ title: "", amount: "", type: "income" });
    reload();
  };

  return (
    <form onSubmit={submit} className="mb-4 flex gap-2">
      <input
        placeholder="Title"
        className="border p-2"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <input
        placeholder="Amount"
        className="border p-2"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />

      <button className="bg-blue-500 text-white px-4">Add</button>
    </form>
  );
}