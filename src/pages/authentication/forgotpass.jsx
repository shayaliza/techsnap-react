import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-black.png";

function ForgotPassword() {
  const [step, setStep] = useState(1); // 1 for email input, 2 for OTP input

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic here (e.g., send reset link)
    setStep(2); // Move to OTP input view
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Handle OTP verification logic here
  };

  return (
    <div className="flex flex-col justify-start min-h-screen bg-gray-50">
      <img src={logo} height={200} width={200} alt="Logo" className="mb-4" />

      <div className="w-11/12 sm:w-1/2 md:w-1/3 flex justify-center flex-col m-auto text-center mt-5">
        {step === 1 ? (
          <>
            <div className="text-3xl font-bold text-gray-500">
              Forgot Password?
            </div>
            <div className="text-md text-gray-500 pt-2 font-semibold">
              Enter your details to receive a reset link
            </div>
            <form
              className="flex flex-col gap-4 mt-12"
              onSubmit={handleEmailSubmit}
            >
              {/* <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#77045f]">
                  @
                </span>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="pl-8 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#77045f]"
                />
              </div> */}

              <button
                type="submit"
                className="text-white bg-[#77045f] p-2 rounded-md mt-4"
              >
                Send
              </button>
              <Link
                to={"/signin"}
                className="flex justify-center gap-2 text-sm text-[#77045f] mt-4"
              >
                <FaChevronLeft size={20} />
                <div>Back to Sign in</div>
              </Link>
            </form>
          </>
        ) : (
          <>
            <div className="text-3xl font-bold text-gray-500">Enter OTP</div>
            <div className="text-md text-gray-500 pt-2 font-semibold">
              Enter the 6-digit OTP sent to your email
            </div>
            <form
              className="flex flex-col gap-4 mt-12  "
              onSubmit={handleOtpSubmit}
            >
              <div className="flex gap-2 text-center justify-center">
                {[...Array(6)].map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#77045f]"
                    // Add onChange logic to handle OTP input if needed
                  />
                ))}
              </div>

              <button
                type="submit"
                className="text-white bg-[#77045f] p-2 rounded-md mt-4"
              >
                Verify
              </button>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-[#77045f] mt-4"
              >
                Back to Email
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
