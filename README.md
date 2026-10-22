# StaffSync — HR Management System

A simple MERN-stack Human Resource Management System built as a SkillWallet capstone project.

## Tech Stack

- **Frontend**: React + Vite + Bootstrap
- **Backend**: Node.js + Express
- **Database**: MongoDB + Mongoose
- **Other**: Axios, React Router DOM

## Project Structure

```
StaffSync/
├── client/          # React frontend (Vite)
├── server/          # Express backend
│   ├── index.js     # Server entry point
│   ├── .env         # Environment variables (not committed)
│   └── .env.example # Example env file
├── .gitignore
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js v18+
- MongoDB running locally or a MongoDB Atlas URI

### 1. Clone the repo
```bash
git clone <repo-url>
cd StaffSync
```

### 2. Setup the Backend
```bash
cd server
cp .env.example .env    # Then edit .env with your MongoDB URI
npm install
npm run dev
```

The server runs at **http://localhost:5000**

### 3. Setup the Frontend
```bash
cd client
npm install
npm run dev
```

The client runs at **http://localhost:5173**

### 4. Health Check
Visit **http://localhost:5000/api/health** to verify the backend is running and connected to MongoDB.

## Environment Variables

| Variable    | Description                    | Default                                   |
|-------------|--------------------------------|-------------------------------------------|
| `PORT`      | Backend server port            | `5000`                                    |
| `MONGO_URI` | MongoDB connection string      | `mongodb://localhost:27017/staffsync`     |
