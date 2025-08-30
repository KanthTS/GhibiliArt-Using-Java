# 🌸 Ghibli Art Generator 🎨

A full-stack web application that generates **Studio Ghibli-style images** using **AI prompts**.  
Built with a **Java Spring Boot backend** and a **React frontend**, powered by **Stability AI’s API**.

---

## 🚀 Features
- ✨ Generate Studio Ghibli-style images from text prompts  
- 🖼️ Download and save generated images  
- 🔑 Secure backend using **Spring Boot & REST APIs**  
- 📦 Manage data persistence with **Hibernate & MySQL/MongoDB**  
- 🎭 Modern and responsive frontend with **React + Tailwind CSS**  
- 🔐 JWT-based authentication for users  
- 🌍 Deployed on **GitHub Pages / Netlify (frontend)** & **Heroku / Render (backend)**  

---

## 🛠️ Tech Stack

### 🌐 Frontend
- ![React](https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  
- Tailwind CSS  
- Axios (API calls)  

### ⚙️ Backend
- ![Java](https://img.shields.io/badge/Java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white)  
- ![Spring Boot](https://img.shields.io/badge/Spring_Boot-%236DB33F.svg?style=for-the-badge&logo=springboot&logoColor=white)  
- ![Spring](https://img.shields.io/badge/Spring_Framework-6DB33F?style=for-the-badge&logo=spring&logoColor=white)  
- ![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=hibernate&logoColor=white)  
- REST APIs  

### 📊 Database
- ![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)  
or  
- ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)  

### 🤖 AI Integration
- [Stability AI API](https://platform.stability.ai/)  
- Text-to-Image model (Ghibli-inspired prompts)  

---

## 📂 Project Structure

```bash
GhibliArt-Using-Java/
│
├── backend/                     # Java Spring Boot Backend
│   ├── src/main/java/com/app    # Controllers, Services, Models
│   ├── src/main/resources/      # Application properties
│   └── pom.xml                  # Maven dependencies
│
├── frontend/                    # React Frontend
│   ├── src/
│   │   ├── components/          # UI Components
│   │   ├── pages/               # Main Pages
│   │   ├── services/            # Axios API calls
│   │   └── App.js
│   ├── public/
│   └── package.json
│
├── README.md                    # Documentation
└── .gitignore

🔑 How It Works:

User enters a text prompt (e.g., "A magical forest with Ghibli-style characters").

Frontend (React) sends the request to the backend.

Backend (Spring Boot + REST API) processes the request and calls Stability AI API.

Stability AI generates a Studio Ghibli-style image.

The image is returned to the frontend and displayed.

User can download or save the image(currently implementing).

⚡ Installation & Setup
Backend (Spring Boot):

cd backend
mvn clean install
mvn spring-boot:run

Frontend(ReactJs):

cd frontend
npm install
npm run dev

📌 Future Enhancements

📝 User profiles with saved artworks

🎨 Multiple AI models for different art styles

🗂️ Gallery view with community sharing

❤️ Like & comment system for artworks

🙌 Tools Used:

Eclipse (Backend Development)

VS Code (Frontend Development)

Postman (API Testing)

Git & GitHub (Version Control)
