"use client"
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
  };

  return (
    <main className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 mt-16">
      {/* Hero Section */}
      <section className="py-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
        <h1 className="text-4xl font-bold">Get in Touch with Us</h1>
        <p className="mt-2 text-lg">We're here to help you with any inquiries</p>
      </section>

      {/* Contact Form and Details Section */}
      <div className="flex flex-col lg:flex-row gap-8 py-12 px-6 lg:px-20">
        {/* Contact Form */}
        <form
          className="bg-white p-6 rounded shadow-md w-full lg:w-1/2"
          onSubmit={handleSubmit}
        >
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            required
          />

          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            required
          />

          <label className="block mb-2">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            required
          />

          <label className="block mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded h-32"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>

        {/* Contact Details */}
        <div className="flex flex-col bg-white p-6 rounded shadow-md w-full lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
          <p className="mb-4">
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p className="mb-4">
            <strong>Email:</strong> contact@yourshop.com
          </p>
          <p className="mb-4">
            <strong>Address:</strong> 123 Main St, Anytown, USA
          </p>

          {/* Map Section */}
          <iframe
            className="w-full h-60 mt-4 rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31270.038386954915!2d104.87694705659571!3d11.569427722407621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951725d8c4835%3A0x2047e2df9364f385!2sToul%20Kork%20District%2C%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1727454206727!5m2!1sen!2skh"
            allowFullScreen=""
            loading="lazy"
            title="Shop Location"
          ></iframe>
        </div>
      </div>

      {/* Optional FAQ Section */}
      <section className="py-10 px-6 lg:px-20">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="p-4 border rounded shadow">
            <summary className="font-semibold cursor-pointer">
              How can I track my order?
            </summary>
            <p className="mt-2 text-gray-700">
              You can track your order by logging into your account and visiting
              the "Order History" section.
            </p>
          </details>
          <details className="p-4 border rounded shadow">
            <summary className="font-semibold cursor-pointer">
              What is your return policy?
            </summary>
            <p className="mt-2 text-gray-700">
              We offer a 30-day return policy on all items. Please contact our
              support team for assistance.
            </p>
          </details>
          <details className="p-4 border rounded shadow">
            <summary className="font-semibold cursor-pointer">
              How do I contact customer service?
            </summary>
            <p className="mt-2 text-gray-700">
              You can contact us via the form above, email, or phone for any
              inquiries.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
};

export default Contact;
