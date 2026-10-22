import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <h1 className="text-center">StaffSync</h1>
        <p className="text-center text-muted">HR Management System — Phase 1 Setup Complete ✅</p>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

function Home() {
  return (
    <div className="text-center mt-4">
      <div className="card p-4 mx-auto" style={{ maxWidth: '500px' }}>
        <h4>Welcome to StaffSync</h4>
        <p className="text-muted">Frontend is running. Connect to the backend to get started.</p>
        <a
          href="http://localhost:5000/api/health"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Check Backend Health
        </a>
      </div>
    </div>
  )
}

export default App
