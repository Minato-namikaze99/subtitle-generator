# 🎬 Subtitle Generator

A **Subtitle Generator Web Application** that automatically generates `.srt` subtitle files for uploaded videos using **AWS Transcribe**.

## 🚀 Features
- Upload video files via a simple **React + Tailwind CSS** frontend.
- Backend processes videos using **Flask** and **AWS Transcribe**.
- Displays real-time transcription status updates.
- Automatically downloads the generated **.srt subtitle file**.

## 🛠️ Tech Stack
**Frontend:**  
- React ⚛️  
- Tailwind CSS 🎨  

**Backend:**  
- Flask (Python) 🐍  
- AWS Transcribe ☁️  

**Cloud Services:**  
- Amazon S3 (File Storage)  
- AWS Transcribe (Speech-to-Text)  

## ⚡ Installation & Setup

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/subtitle-generator.git
cd subtitle-generator
```

### **2. Backend Setup (Flask)**
```bash
cd backend
python -m venv venv
source venv/bin/activate  # For macOS/Linux
venv\Scripts\activate      # For Windows
pip install -r requirements.txt
```

### **3. AWS Setup**
Configure AWS Credentials in `.env` by modifying the same contents as in `.env.example`

### **4. Starting the Backend**
```bash
python app.py
```

### **5. Frontend Setup (React)**
```bash
cd frontend
npm install
npm run dev
```

Visit http://localhost:3000 in your browser.