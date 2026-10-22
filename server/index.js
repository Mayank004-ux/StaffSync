const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ──────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// ── Routes ──────────────────────────────────────────────────────────────────
// Health check — always available even if DB is down
app.get('/api/health', (req, res) => {
  const dbStates = { 0: 'Disconnected', 1: 'Connected', 2: 'Connecting', 3: 'Disconnecting' };
  res.json({
    status: 'OK',
    message: 'StaffSync API is running',
    dbStatus: dbStates[mongoose.connection.readyState] || 'Unknown',
    timestamp: new Date().toISOString(),
  });
});

// Employee CRUD
app.use('/api/employees', employeeRoutes);

// 404 fallback for unknown routes
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.message);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

// ── Start Server First, then connect DB ────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📋 Health: http://localhost:${PORT}/api/health`);
  console.log(`👥 Employees: http://localhost:${PORT}/api/employees`);
});

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
    console.error('   Set MONGO_URI in server/.env to a valid MongoDB URI');
    console.error('   Example: mongodb://localhost:27017/staffsync');
    console.error('   Or use MongoDB Atlas: mongodb+srv://user:pass@cluster.mongodb.net/staffsync');
  });
