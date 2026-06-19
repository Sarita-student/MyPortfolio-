import { useState } from "react";

import { FaPaperPlane } from "react-icons/fa";

import { personalInfo } from "../data/portfolioData";



export default function Contact() {

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const [submitted, setSubmitted] = useState(false);



  const handleSubmit = (e) => {

    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);

    const body = encodeURIComponent(

      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`

    );

    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);

    setForm({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000);

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

            className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-opacity font-medium"

          >

            <FaPaperPlane size={14} />

            Send Message

          </button>



          {submitted && (

            <p className="text-green-600 text-sm">

              Opening your email client to send the message...

            </p>

          )}

        </form>

      </div>

    </section>

  );

}

