import React, { useState, forwardRef } from "react";

const Contact = forwardRef(function Contact(props, contactRef) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Encode user input for mailto
    const mailtoLink = `mailto:monishpraveen078@gmail.com?subject=Portfolio Contact: ${encodeURIComponent(
      formData.name
    )}&body=Name: ${encodeURIComponent(
      formData.name
    )}%0D%0AEmail: ${encodeURIComponent(
      formData.email
    )}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      ref={contactRef}
      className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Contact US
          </h2>
          <p className="mt-4 text-xl text-center text-gray-600 font-semibold">
            Let's connect and explore
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handlechange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handlechange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message here..."
                rows={4}
                value={formData.message}
                onChange={handlechange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-red-700 via-purple-600 to-blue-700 text-white font-semibold rounded"
            >
              Submit
            </button>
          </form>
          {/* Optional: direct mailto link for testing */}
          <div className="text-center mt-4">
            <a
              href="mailto:monishpraveen078@gmail.com?subject=Portfolio Contact&body=Hi Monish!"
              className="text-blue-600 underline"
            >
              Or click here to email directly
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
