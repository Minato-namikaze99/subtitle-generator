import { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    setLoading(true);
    setShowModal(false);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:5000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.job_name) {
        navigate(`/download/${data.job_name}`);
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-900 text-white">
      <div className="flex flex-col w-250 h-40">
        <div className="text-6xl flex-1 font-bold">
          Upload a Video File
        </div>
        <input
          onChange={handleFileChange} 
          className="block w-full border border-gray-200 shadow-sm rounded-lg text-l focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
            file:bg-gray-50 file:border-0
            file:me-4
            file:py-3 file:px-4
            dark:file:bg-neutral-700 dark:file:text-neutral-400"
          type="file"
        />
        {file && (
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
          >
            Upload
          </button>
        )}
        {showModal && (
          <ConfirmationModal
            onConfirm={handleUpload}
            onCancel={() => setShowModal(false)}
          />
        )}
        {loading && <Loader />}
      </div>
    </div>
  );
}
