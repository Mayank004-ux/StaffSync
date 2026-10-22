import { useState, useEffect } from 'react'

function EmployeeForm({ employee, onSubmit, onClose, loading }) {
  const empty = {
    name: '',
    email: '',
    department: '',
    jobTitle: '',
    phone: '',
    joiningDate: '',
  }

  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})

  // Pre-fill form when editing
  useEffect(() => {
    if (employee) {
      setForm({
        name: employee.name || '',
        email: employee.email || '',
        department: employee.department || '',
        jobTitle: employee.jobTitle || '',
        phone: employee.phone || '',
        joiningDate: employee.joiningDate
          ? new Date(employee.joiningDate).toISOString().split('T')[0]
          : '',
      })
    } else {
      setForm(empty)
    }
  }, [employee])

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email'
    if (!form.department.trim()) errs.department = 'Department is required'
    if (!form.jobTitle.trim()) errs.jobTitle = 'Job title is required'
    if (!form.phone.trim()) errs.phone = 'Phone is required'
    if (!form.joiningDate) errs.joiningDate = 'Joining date is required'
    return errs
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    onSubmit(form)
  }

  const Field = ({ name, label, type = 'text', placeholder }) => (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input
        type={type}
        name={name}
        value={form[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className={`form-control-custom ${errors[name] ? 'error' : ''}`}
      />
      {errors[name] && <p className="form-error">{errors[name]}</p>}
    </div>
  )

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h5>{employee ? 'Edit Employee' : 'Add New Employee'}</h5>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="form-grid">
              <Field name="name" label="Full Name" placeholder="Jane Doe" />
              <Field name="email" label="Email" type="email" placeholder="jane@example.com" />
              <Field name="department" label="Department" placeholder="Engineering" />
              <Field name="jobTitle" label="Job Title" placeholder="Software Engineer" />
              <Field name="phone" label="Phone" placeholder="9876543210" />
              <Field name="joiningDate" label="Joining Date" type="date" />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn-outline-custom" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary-custom" disabled={loading}>
              {loading ? 'Saving…' : employee ? 'Update Employee' : 'Add Employee'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EmployeeForm
