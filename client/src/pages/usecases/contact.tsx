import React, { useState } from 'react';

export default function Contact() {
  // Defined Color Scheme
  const DARK_PRIMARY = '#191A23'; // Text/Color (Dark Black)
  const LIGHT_GRAY = '#F3F3F3'; // Background Color (Light Gray)
  const GREEN_ACCENT = '#B9FF66'; // Accent Color (Green)

  // Form State (for functionality)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form Submitted:", formData);

    // In a real app, you would send this to a backend API.
    // Since we don't have a backend, we just simulate success.
    setTimeout(() => {
      setSubmissionStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmissionStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <div
      className="flex flex-col min-h-screen font-inter"
      style={{ backgroundColor: LIGHT_GRAY, color: DARK_PRIMARY }}
    >
      {/* Header Section */}
      <div className="w-full h-72 relative overflow-hidden pt-24">
        {/* Placeholder for contactHeader image */}
        <div
          className="w-full h-full object-cover absolute inset-0 opacity-40"
          style={{ backgroundColor: DARK_PRIMARY }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-5xl font-extrabold uppercase tracking-widest p-4 rounded-xl"
            style={{ color: GREEN_ACCENT, backgroundColor: DARK_PRIMARY }}
          >
            Contact Us
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-6 py-20 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column: Contact Form */}
          <div
            className="p-8 rounded-xl shadow-2xl"
            style={{ backgroundColor: DARK_PRIMARY, color: LIGHT_GRAY }}
          >
            <h2 className="text-3xl font-bold mb-8" style={{ color: GREEN_ACCENT }}>
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full p-3 rounded text-black border focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: LIGHT_GRAY,
                    borderColor: GREEN_ACCENT,
                    color: DARK_PRIMARY,
                    boxShadow: `2px 2px 0 0 ${GREEN_ACCENT}`
                  }}
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full p-3 rounded text-black border focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: LIGHT_GRAY,
                    borderColor: GREEN_ACCENT,
                    color: DARK_PRIMARY,
                    boxShadow: `2px 2px 0 0 ${GREEN_ACCENT}`
                  }}
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  required
                  className="w-full p-3 rounded text-black border focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: LIGHT_GRAY,
                    borderColor: GREEN_ACCENT,
                    color: DARK_PRIMARY,
                    boxShadow: `2px 2px 0 0 ${GREEN_ACCENT}`
                  }}
                ></textarea>
              </div>

              {/* Submission Status Message */}
              {submissionStatus === 'success' && (
                <p className="text-base font-semibold" style={{ color: GREEN_ACCENT }}>
                  Message sent successfully! We'll be in touch soon.
                </p>
              )}
              {submissionStatus === 'error' && (
                <p className="text-base font-semibold text-red-500">
                  There was an error sending your message. Please try again.
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="font-semibold px-8 py-3 rounded-xl transition duration-300 hover:scale-[1.02] uppercase tracking-wider"
                style={{ backgroundColor: GREEN_ACCENT, color: DARK_PRIMARY, boxShadow: `4px 4px 0 0 ${LIGHT_GRAY}` }}
                disabled={submissionStatus !== 'idle'}
              >
                {submissionStatus === 'idle' ? 'Send Message' : 'Sending...'}
              </button>
            </form>
          </div>

          {/* Right Column: Contact Info */}
          <div className="p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6" style={{ color: DARK_PRIMARY }}>
              Reach Us
            </h2>
            <p className="mb-8 text-lg" style={{ color: DARK_PRIMARY }}>
              Whether you have a question, feedback, or just want to say hello —
              we'd love to hear from you. Use the form or reach us via the info
              below.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div>
                <h4 className="font-semibold text-xl mb-1" style={{ color: GREEN_ACCENT }}>Email</h4>
                <p className="text-lg" style={{ color: DARK_PRIMARY }}>support@aiplatform.com</p>
              </div>
              {/* Phone */}
              <div>
                <h4 className="font-semibold text-xl mb-1" style={{ color: GREEN_ACCENT }}>Phone</h4>
                <p className="text-lg" style={{ color: DARK_PRIMARY }}>+1 (800) 123-4567</p>
              </div>
              {/* Address */}
              <div>
                <h4 className="font-semibold text-xl mb-1" style={{ color: GREEN_ACCENT }}>Address</h4>
                <p className="text-lg" style={{ color: DARK_PRIMARY }}>
                  123 AI Avenue
                  <br />
                  Silicon City, CA 94016
                  <br />
                  USA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

   
    </div>
  );
}