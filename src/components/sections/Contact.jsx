import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState(null);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.init(publicKey);

    emailjs.send(serviceId, templateId, formData)
      .then(() => {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("ERROR");
      });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Contact</h2>
        <div className="glass rounded-xl border-white/10 border p-8 ">
          <p className="text-gray-300 mb-4">Feel free to reach out for collaborations, inquiries, or just a chat!</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>

          {status === "SUCCESS" && <p className="text-green-400 mt-4">Message sent successfully!</p>}
          {status === "ERROR" && <p className="text-red-400 mt-4">Failed to send message. Please try again later.</p>}
        </div>
      </div>
    </section>
  );
};
