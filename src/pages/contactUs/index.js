import { motion } from "framer-motion";
import React, { useMemo, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactUs() {
  // States for contact form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState("");

  // Using recaptcha reference
  const recaptchaRef = useRef({});

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Submit Now");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [showCaptchaMessage, setShowCaptchaMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullName.length <= 0) {
      tempErrors["fullName"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (phone.length <= 0) {
      tempErrors["phone"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }
    if (captcha.length <= 0) {
      setShowCaptchaMessage(true);
      tempErrors["captcha"] = true;
      isValid = false;
    }

    if (!isValid) {
      recaptchaRef.current.reset();
      setCaptcha("");
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  //   Handling form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullName: fullName,
          message: message,
          phone: phone,
          captcha: captcha,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Submit Now");

        // Reset form fields
        setFullName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setCaptcha("");
        recaptchaRef.current.reset();
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Submit Now");

      // Reset form fields
      setFullName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setCaptcha("");
      recaptchaRef.current.reset();
    }
  };

  // Handling recaptcha change
  const onReCAPTCHAChange = async (captchaCode) => {
    if (!captchaCode) {
      return;
    }

    // Setting the captcha code
    setShowCaptchaMessage(false);
    setCaptcha(captchaCode);
  };

  // Setting timeout for success message
  const resetSuccessMessage = () => {
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 10000);
  };

  // Setting timeout for error message
  const resetFailureMessage = () => {
    setTimeout(() => {
      setShowFailureMessage(false);
    }, 20000);
  };

  return (
    <div className="relative mt-48 mb-40" id="contactUs">
      <motion.div
        className=" max-w-5xl self-center mx-auto "
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ duration: 3, type: "spring" }}
      >
        <motion.div className="mb-6 sm:mb-0 text-center px-4">
          <h5 className="text-lg sm:text-2xl lg:text-3xl leading-relaxed font-medium text-[#003d7b]">
            We Look Forward To Assisting You
          </h5>
          <p className="text-center font-medium text-sm sm:text-lg text-[#3a6066] dark:text-[#007960]">
            <a href="tel:4692982709">(469) 298-2709</a> | IndianV3llc@gmail.com
          </p>
          <p className="text-center font-medium text-sm sm:text-lg text-[#3a6066] dark:text-[#007960] mt-5">
            Please complete the form below and someone will get back to you as
            soon as possible.
          </p>
        </motion.div>
        <motion.div className="my-10 mx-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col text-[#3a6066] dark:text-[#007960]"
          >
            <label htmlFor="fullname" className="font-medium mt-8  text-left">
              Full Name
              <span className="text-red-500 dark:text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              className={`px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200  focus:ring-4  ${
                errors.fullName
                  ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                  : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }`}
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
            {errors?.fullName && (
              <span className="text-red-500 text-left">
                Name cannot be empty.
              </span>
            )}

            <label htmlFor="email" className=" font-medium mt-4  text-left">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200    focus:ring-4  ${
                errors.email
                  ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                  : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {errors?.email && (
              <p className="text-red-500 text-left">Email cannot be empty.</p>
            )}

            <label htmlFor="phone" className="font-medium mt-4 text-left">
              Phone
              <span className="text-red-500 dark:text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phone"
              className={`px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200   focus:ring-4  ${
                errors.phone
                  ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                  : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }`}
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            {errors?.phone && (
              <span className="text-red-500 text-left">
                Phone Number cannot be empty.
              </span>
            )}

            <label htmlFor="message" className="font-medium mt-4  text-left">
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 rounded-md outline-none  h-36 focus:ring-4  ${
                errors.message
                  ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                  : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }`}
              value={message}
              rows={5}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
            {errors?.message && (
              <p className="text-red-500 text-left">
                Message body cannot be empty.
              </p>
            )}
            <div className="flex flex-col items-center justify-center mt-5">
              {showCaptchaMessage && (
                <p className="text-red-500 mt-4">
                  Please complete the captcha below.
                </p>
              )}
              {
                <ReCAPTCHA
                  ref={recaptchaRef}
                  size="normal"
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={onReCAPTCHAChange}
                />
              }
            </div>
            <div className="flex flex-col items-center justify-center mt-5 w-4/5 self-center">
              <button
                type="submit"
                disabled={buttonText === "Sending"}
                className="p-2 border-2 text-[#003d7b] border-[#003d7b] font-semibold rounded-3xl px-4 hover:bg-green-400 hover:text-white "
              >
                {buttonText}{" "}
                {buttonText === "Sending" && (
                  <svg
                    class="animate-spin ml-3 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
            <div className="text-center">
              {showSuccessMessage && (
                <p className="text-green-500 font-semibold text-sm my-2 mt-4">
                  Thank You! Your Message has been delivered.
                  {resetSuccessMessage()}
                </p>
              )}
              {showFailureMessage && (
                <p className="text-red-500 mt-4">
                  Oops! Something went wrong, please try again.
                  {resetFailureMessage()}
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
