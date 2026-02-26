"use client";

import { useState } from "react";

/* ==========================================================================
   Types
   ========================================================================== */

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  practiceArea: string;
  message: string;
}

/* ==========================================================================
   ContactForm Component
   ========================================================================== */

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    practiceArea: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Static form -- no server action. Console log for dev reference.
    // eslint-disable-next-line no-console
    console.log("Form submitted:", formData);
  }

  const inputClasses =
    "w-full rounded-lg border border-[#E8E4DF] bg-white px-4 py-3 text-sm text-[#1C2A32] placeholder:text-[#8A959D] transition-all duration-200 focus:border-[#1A5C6B] focus:outline-none focus:ring-2 focus:ring-[#1A5C6B]/20";

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      {/* Name row */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="mb-1.5 block text-sm font-medium text-[#1C2A32]"
          >
            First Name <span className="text-[#1A5C6B]">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="mb-1.5 block text-sm font-medium text-[#1C2A32]"
          >
            Last Name <span className="text-[#1A5C6B]">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            className={inputClasses}
          />
        </div>
      </div>

      {/* Email & Phone row */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-[#1C2A32]"
          >
            Email <span className="text-[#1A5C6B]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-[#1C2A32]"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            className={inputClasses}
          />
        </div>
      </div>

      {/* Practice area select */}
      <div>
        <label
          htmlFor="practiceArea"
          className="mb-1.5 block text-sm font-medium text-[#1C2A32]"
        >
          How Can We Help? <span className="text-[#1A5C6B]">*</span>
        </label>
        <select
          id="practiceArea"
          name="practiceArea"
          required
          value={formData.practiceArea}
          onChange={handleChange}
          className={`${inputClasses} appearance-none`}
        >
          <option value="" disabled>
            Select a practice area
          </option>
          <option value="family-law">Family Law</option>
          <option value="estate-planning">Estate Planning</option>
          <option value="business-law">Business Law</option>
          <option value="personal-injury">Personal Injury</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message textarea */}
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-[#1C2A32]"
        >
          Message <span className="text-[#1A5C6B]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your situation..."
          className={`${inputClasses} resize-vertical leading-relaxed`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="btn btn-primary btn-lg w-full sm:w-auto"
      >
        Send Message
      </button>

      {/* Disclaimer */}
      <p className="text-xs leading-relaxed text-[#8A959D]">
        This form does not create an attorney-client relationship. Information
        submitted is not considered privileged or confidential.
      </p>
    </form>
  );
}
