import Navbar from "../components/Navbar";
import { useState } from "react";
import API from "../api/axios";

export default function Profile() {
  const [file, setFile] = useState(null);

  const upload = async () => {
    const formData = new FormData();
    formData.append("image", file);
    await API.post("/upload/profile-picture", formData);
    alert("Uploaded");
  };

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button onClick={upload} className="bg-blue-500 text-white px-4 ml-2">
          Upload
        </button>
      </div>
    </div>
  );
}