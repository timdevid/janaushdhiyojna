'use client'

import React, { useState } from 'react'
import { database } from "@/lib/Firebase";
import { ref, push } from "firebase/database";

const ApplyNowComp = ({ closeModal }) => {
  // Form state to hold user inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    address: "",
    intrestedin: "",
  });
  const [loading, setLoading] = useState(false);


  // State to control visibility of Thank You popup
  const [showThankYou, setShowThankYou] = useState(false);

  // State for error messages
  const [error, setError] = useState("");

  // Handle input changes and update formData state
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setError(""); // clear error on change
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // start loading

    try {
      const formRef = ref(database, "userjanaushdhidata");

      await push(formRef, {
        ...formData,
        createdAt: Date.now(),
      });

      setShowThankYou(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        state: "",
        address: "",
        intrestedin: "",
      });
    } catch (error) {
      console.error("Error saving to Firebase:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // stop loading regardless of success or failure
    }
  };


  // Close the Thank You popup and optionally close the main modal
  const handleCloseThankYou = () => {
    setShowThankYou(false);
    if (closeModal) closeModal();
  };

  return (
    <div className="inset-0 flex text-black items-center justify-center bg-white z-50 relative p-4">
      {/* Main Form Container */}
      <div className="bg-white rounded-lg shadow-2xl max-w-xl w-full p-6 relative z-10">
        {/* Close button for main modal */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-red-600 hover:text-gray-900 text-4xl font-bold"
          aria-label="Close modal"
          type="button"
        >
          &times;
        </button>

        {/* Modal Header */}
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
          (PM Jan-Aushdhi) Scheme Online Registration
        </h2>

        {/* Error message */}
        {error && (
          <div className="mb-4 text-red-600 text-center font-semibold">{error}</div>
        )}

        {/* Registration Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>

          {/* Name and Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name ..?"
              value={formData.name}
              onChange={handleChange}
              required
              className="flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email ..?"
              value={formData.email}
              onChange={handleChange}
              required
              className="flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Your Mobile Number ..?"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* State and City */}
          <div className="flex flex-col md:flex-row gap-4">
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="flex-1 p-3 border border-gray-300 rounded focus:outline-none bg-white focus:ring-2 focus:ring-blue-500"
            >
              <option value="">---Select State---</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
            <input
              type="text"
              name="address"
              placeholder="Enter Your Address ..?"
              value={formData.address}
              onChange={handleChange}
              required
              className="flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Plant Type */}
          <select
            name="intrestedin"
            value={formData.intrestedin}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none bg-white focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Intrested In</option>
            <option value="1 HP">Outlet</option>
            <option value="2 HP">Dealership</option>
            
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full cursor-pointer text-white text-lg font-semibold py-3 rounded mt-4 transition ${loading ? "bg-[#EC691B] cursor-not-allowed" : "bg-[#EC691B] hover:bg-[#EC691B]"
              }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

        </form>
      </div>

      {/* Thank You Popup Modal */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-sm w-full text-center shadow-lg relative">
            <h3 className="text-3xl font-bold mb-4">Thank You!</h3>
            <p className="mb-6 text-gray-700">
              Your application has been submitted successfully. Our team will contact you soon.
            </p>
            <button
              onClick={handleCloseThankYou}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplyNowComp;
