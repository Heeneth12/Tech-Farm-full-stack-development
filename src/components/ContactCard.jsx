import React, { useState } from "react";
import axios from "axios";
import Notification from "./Notification";

const ContactCard = () => {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to the backend API endpoint
      const response = await axios.post(
        "http://localhost:9000/api/contact",
        formData
      );
      console.log(response.data.message); // Log success message
      setSuccess(true);
      // Optionally, you can reset the form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Notification show={success} />
      <div className="contact-container rounded-md p-2 mt-4 mb-12 bg-white-300 mt-24 mx-4 md:mx-auto md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Contact us</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border p-2 rounded-md focus:ring focus:ring-indigo-200"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border p-2 rounded-md focus:ring focus:ring-indigo-200"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 rounded-md focus:ring focus:ring-indigo-200"
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="border p-2 rounded-md focus:ring focus:ring-indigo-200"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="border p-2 rounded-md focus:ring focus:ring-indigo-200 w-full"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mt-4"
          >
            Send Message
          </button>
        </form>
        <div className="p-4">
          <amp-ad
            layout="fixed"
            width="700"
            height="90"
            type="adsense"
            data-ad-client="ca-pub-7917026221030700"
            data-ad-slot="7244277574"
          ></amp-ad>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
