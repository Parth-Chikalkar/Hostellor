import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { toast } from 'react-toastify';

function Contact({ t, s }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Thank you, ${name}! Your message has been submitted.`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className={ t ? 'bg-[#0b1a2d]  text-white min-h-screen flex flex-col ' : ' text-orange-900 min-h-screen flex flex-col'}>
      <Navbar t={t} s={s} />

      <main className="flex-grow border-1 mb-7 rounded-md  max-w-3xl mx-2 md:mx-auto px-4 py-16 flex flex-col gap-6">
        <h1 className="text-4xl font-bold ">Contact Us</h1>
        <p className={t ? 'text-gray-300' : 'text-blue-950'}>
          Have a question or need support? Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <form
          onSubmit={handleSubmit}
          className={t ? 'flex flex-col gap-4 bg-[#16253f] p-6 rounded-xl shadow-lg' : 'flex flex-col gap-4 bg-white p-6 rounded-xl shadow-lg'}
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="p-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none h-32"
          />
          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-xl shadow-md transition"
          >
            Send Message
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
