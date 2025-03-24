import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UploadForm from "./components/UploadForm";
import DownloadPage from "./components/DownloadPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UploadForm />} />
        <Route path="/download/:job_name" element={<DownloadPage />} />
      </Routes>
    </Router>
  );
}
