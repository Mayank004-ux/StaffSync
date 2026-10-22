# StaffSync — HR Management System

A MERN-stack Human Resource Management System built as a SkillWallet capstone project.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React + Vite + Bootstrap |
| Backend | Node.js + Express |
| Database | MongoDB + Mongoose |
| HTTP Client | Axios |
| Routing | React Router DOM |

## Project Structure

```
StaffSync/
├── client/                          # React frontend (Vite)
│   ├── src/
│   │   ├── api/axiosConfig.js       # Axios instance (reads VITE_API_URL)
│   │   ├── components/
│   │   │   ├── Sidebar.jsx          # Sidebar navigation
│   │   │   ├── Dashboard.jsx        # Stats + department breakdown
│   │   │   ├── Employees.jsx        # Full CRUD employee table
│   │   │   ├── EmployeeForm.jsx     # Add/Edit modal form
│   │   │   ├── EmployeeDetail.jsx   # Employee detail view
│   │   │   └── ConfirmModal.jsx     # Delete confirmation
│   │   ├── App.jsx                  # Layout + page routing
│   │   ├── index.css                # Global styles
│   │   └── main.jsx                 # Entry point
│   ├── .env                         # VITE_API_URL (not committed)
│   └── .env.example
├── server/
│   ├── controllers/
│   │   └── employeeController.js    # CRUD logic
│   ├── models/
│   │   └── Employee.js              # Mongoose schema
│   ├── routes/
│   │   └── employeeRoutes.js        # Express routes
│   ├── index.js                     # Server entry point
│   ├── .env                         # Secrets (not committed)
│   └── .env.example
├── .gitignore
└── README.md
```

## Quick Start

### Prerequisites
- Node.js v18+
- MongoDB running locally **or** a MongoDB Atlas URI

### 1. Clone the repo
```bash
git clone https://github.com/krishnammandloi/StaffSync.git
cd StaffSync
```

### 2. Configure the Backend
```bash
cd server
copy .env.example .env
```
Edit `server/.env`:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/staffsync
# OR Atlas:
# MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/staffsync
```

### 3. Run the Backend
```bash
cd server
npm install
npm run dev
```
Server → **http://localhost:5000**

### 4. Configure the Frontend
```bash
cd client
copy .env.example .env
```
`client/.env` is pre-set to `VITE_API_URL=http://localhost:5000/api` — no changes needed for local dev.

### 5. Run the Frontend
```bash
cd client
npm install
npm run dev
```
Frontend → **http://localhost:5173**

---

## API Endpoints

Base URL: `http://localhost:5000/api`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Server + DB status |
| GET | `/employees` | List all employees |
| GET | `/employees/:id` | Get one employee |
| POST | `/employees` | Create employee |
| PUT | `/employees/:id` | Update employee |
| DELETE | `/employees/:id` | Delete employee |

### POST Body Example
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "department": "Engineering",
  "jobTitle": "Software Engineer",
  "phone": "9876543210",
  "joiningDate": "2024-01-15"
}
```

## Features (Phase 3)
- ✅ Sidebar + dashboard layout
- ✅ Dashboard with employee count, department stats, recent hires
- ✅ Employee table with search and department filter
- ✅ Add / Edit employee modal with validation
- ✅ Delete with confirmation dialog
- ✅ Employee detail view
- ✅ Loading indicators and empty states
- ✅ Error messages for API failures
- ✅ Fully connected to MongoDB via Express API

## Environment Variables

### Server (`server/.env`)
| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Backend port | `5000` |
| `MONGO_URI` | MongoDB URI | `mongodb://localhost:27017/staffsync` |

### Client (`client/.env`)
| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API base URL | `http://localhost:5000/api` |
