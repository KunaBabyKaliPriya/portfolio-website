# Priya_Portfolio

A modern, premium personal portfolio website for **Kuna Baby Kali Priya** — CSE student at Amrita Vishwa Vidyapeetham, Coimbatore.

Built with **React + Vite + Tailwind CSS + Framer Motion** on the frontend and **Node.js + Express + MongoDB** on the backend.

---

## ✨ Features

- Dark theme with purple/blue gradient accents
- Animated hero with typing effect & floating blobs
- Smooth scroll, scroll-progress bar, reveal animations
- Glassmorphism cards, hover/tilt effects
- Fully responsive (mobile hamburger menu)
- Skills, Projects, Resume timeline, Contact form
- Backend API: stores contact messages in MongoDB + Nodemailer notifications
- SEO-friendly meta + Open Graph tags
- Toast notifications & form validation

---

## 📁 Folder Structure

```
Priya_Portfolio/
├── client/        # React + Vite frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── data/
│       ├── hooks/
│       ├── animations/
│       └── assets/
└── server/        # Node + Express + MongoDB backend
    ├── controllers/
    ├── routes/
    ├── models/
    ├── config/
    └── middleware/
```

---

## 🚀 Installation

### 1. Frontend

```bash
cd client
npm install
npm run dev          # http://localhost:5173
npm run build        # production build
```

### 2. Backend

```bash
cd server
npm install
cp .env.example .env # fill in values
npm run dev          # http://localhost:5000
```

---

## 🔐 Environment Variables (`server/.env`)

```
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/portfolio
CLIENT_URL=http://localhost:5173

# Nodemailer (Gmail app password recommended)
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=your@gmail.com
MAIL_PASS=your-app-password
MAIL_TO=priya@example.com
```

Frontend `client/.env`:
```
VITE_API_URL=http://localhost:5000/api
```

---

## 🌐 API

| Method | Endpoint            | Description              |
|--------|---------------------|--------------------------|
| POST   | `/api/contact`      | Submit contact message   |
| GET    | `/api/contact`      | List messages (admin)    |
| GET    | `/api/health`       | Health check             |

---

## 🚢 Deployment

- **Frontend** → Vercel: import the `client/` folder, set `VITE_API_URL` to your deployed backend.
- **Backend** → Render/Railway: deploy the `server/` folder, set all env vars above, expose port `5000`.

---

Built with React & Tailwind by Priya.
