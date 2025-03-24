import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DownloadPage() {
  const { job_name } = useParams();
  const [status, setStatus] = useState("Checking...");
  const [fileUrl, setFileUrl] = useState("");

  useEffect(() => {
    let interval;

    const checkStatus = async () => {
      const response = await fetch(`http://127.0.0.1:5000/get_subtitle/${job_name}`);
      if (response.status === 202) {
        setStatus("Transcription in progress...");
      } else if (response.status === 200) {
        const blob = await response.blob();
        setFileUrl(URL.createObjectURL(blob));
        setStatus("Ready to download!");
        clearInterval(interval);
      }
    };

    checkStatus();
    interval = setInterval(checkStatus, 5000);
    
    return () => clearInterval(interval);
  }, [job_name]);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Download Subtitle</h1>
      {status === "Transcription in progress..." ? (
        <div className="bg-red-500 px-4 py-2 rounded">Please wait...</div>
      ) : (
        fileUrl && (
          <a href={fileUrl} download="subtitles.srt" className="bg-green-500 px-4 py-2 rounded">
            Download SRT
          </a>
        )
      )}
    </div>
  );
}
