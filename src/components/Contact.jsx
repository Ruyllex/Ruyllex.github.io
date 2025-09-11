import { useState } from 'react'
import SendButton from './SendButton.jsx'


function Contact() {
  const { t } = useI18n()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const subject = t('contact_title') + ' - ' + (t('nav_about') || 'Portfolio')
      const body = `${t('contact_name')}: ${form.name}\n${t('contact_email')}: ${form.email}\n\n${form.message}`
      const mailto = `mailto:ruymori@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.location.href = mailto
      setStatus(t('contact_opening'))
    } catch (err) {
      setStatus(t('contact_error'))
    }
  }

  return (
    <section id="contact">
      <h1 className="title">{t('contact_title')}</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name">{t('contact_name')}</label>
          <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label htmlFor="email">{t('contact_email')}</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label htmlFor="message">{t('contact_message')}</label>
          <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} required />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <SendButton label={t('contact_send')} type="submit" />
        </div>
        {status && <p className="form-status">{status}</p>}
      </form>
    </section>
  )
}

export default Contact

