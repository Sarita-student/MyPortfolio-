import { useState } from "react";

import { FaPaperPlane } from "react-icons/fa";

import emailjs from "@emailjs/browser";

import { personalInfo } from "../data/portfolioData";

export default function Contact() {

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    emailjs
      .send(
        "service_n6ld3ov",      // Step 1 se mila Service ID
        "template_ybwlc2q",     // Step 1 se mila Template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
          to_email: personalInfo.email,
        },
        "VrvRS6UQrmS6dm_9a"       // Step 1 se mila Public Key
      )
      .then(() => {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        setSending(false);
        setTimeout(() => setSubmitted(false), 4000);
      })
      .catch(() => {
        setError(true);
        setSending(false);
      });
  };

  return (

    <section id="contact" className="section-light min-h-screen py-20 px-6 md:px-12 lg:px-16">

      <div className="max-w-3xl mx-auto">

        <h2 className="section-title">Get in Touch</h2>
        <div className="section-underline" />
        <p className="text-gray-600 mb-12">
          Have a project in mind or want to connect? Send me a message!
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-600 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-gray-600 mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-opacity font-medium disabled:opacity-50"
          >
            <FaPaperPlane size={14} />
            {sending ? "Sending..." : "Send Message"}
          </button>

          {submitted && (
            <p className="text-green-600 text-sm">
              ✅ Message sent successfully! I'll get back to you soon.
            </p>
          )}
          {error && (
            <p className="text-red-600 text-sm">
              ❌ Something went wrong. Please try again or email me directly.
            </p>
          )}

        </form>
      </div>
    </section>
  );
}