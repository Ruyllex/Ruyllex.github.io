import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const mailto = `mailto:ruymori@gmail.com?subject=${encodeURIComponent('Contacto desde portfolio')}&body=${encodeURIComponent(`Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
      window.location.href = mailto
      setStatus('Opening your mail client...')
    } catch (err) {
      setStatus('There was an error. Please try again.')
    }
  }

  return (
    <section id="contact">
      <h1 className="title">Contact</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} required />
        </div>
        <button className="btn btn--primary" type="submit">Send</button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </section>
  )
}

export default Contact

