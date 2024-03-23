import { motion } from "framer-motion";
import React, { useMemo, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactUs() {
  // States for contact form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
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

    if (firstName.length <= 0) {
      tempErrors["firstName"] = true;
      isValid = false;
    }
    if (lastName.length <= 0) {
      tempErrors["lastName"] = true;
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
    if (eventType.length <= 0) {
      tempErrors["eventType"] = true;
      isValid = false;
    }
    if (!eventDate) {
      tempErrors["eventDate"] = true;
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

      // Format Date First
      const selectedDateTime = new Date(eventDate);
      const formattedDate = `${
        selectedDateTime.getMonth() + 1
      }/${selectedDateTime.getDate()}/${selectedDateTime.getFullYear()}`;
      const hours = selectedDateTime.getHours() % 12 || 12;
      const minutes = selectedDateTime.getMinutes().toString().padStart(2, "0");
      const amPm = selectedDateTime.getHours() >= 12 ? "pm" : "am";
      const formattedTime = `${hours}:${minutes} ${amPm}`;

      let messageCustom =
        "Hello Admin. You have a new contact request. The person is trying to make a reservation for the event of " +
        eventType +
        " on " +
        formattedDate +
        " " +
        formattedTime +
        ". Please reach out to them to confirm the reservation using the phone number provided above. Thank you. " +
        message;

      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullName: fullName,
          message: messageCustom,
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
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setEventType("");
        setEventDate("");
        setCaptcha("");
        recaptchaRef.current.reset();
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Submit Now");

      // Reset form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setEventType("");
      setEventDate("");
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
    <div className="relative mx-auto max-w-screen-xl pt-40 px-4 md:px-10 pb-20">
      <motion.div
        className="rounded-lg border border-pink-200 bg-white p-8 md:p-12 lg:gap-8 z-1 shadow-lg drop-shadow-xl"
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ duration: 3, type: "spring" }}
      >
        <motion.div className="mb-6 sm:mb-0 text-center px-4">
          <h5 className="text-lg sm:text-2xl lg:text-3xl leading-relaxed italic font-medium text-[#d86c9e]">
            Let's Talk
          </h5>
        </motion.div>
        <motion.div className="my-10 mx-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col text-[#969e48] "
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              <div className="flex flex-col">
                <label htmlFor="fullname" className="font-medium text-left">
                  First Name
                  <span className="text-red-500 dark:text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  className={`px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200  focus:ring-4  ${
                    errors.firstName
                      ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  }`}
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
                {errors?.firstName && (
                  <span className="text-red-500 text-left">
                    First Name cannot be empty.
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="fullname" className="font-medium  text-left">
                  Last Name
                  <span className="text-red-500 dark:text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  className={`px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200  focus:ring-4  ${
                    errors.lastName
                      ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  }`}
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
                {errors?.lastName && (
                  <span className="text-red-500 text-left">
                    Last Name cannot be empty.
                  </span>
                )}
              </div>
            </div>

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

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              <div className="flex flex-col">
                <label htmlFor="fullname" className="font-medium text-left">
                  Event Type <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="eventType"
                  className={`px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200  focus:ring-4  ${
                    errors.eventType
                      ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  }`}
                  value={eventType}
                  onChange={(e) => {
                    setEventType(e.target.value);
                  }}
                />
                {errors?.eventType && (
                  <span className="text-red-500 text-left">
                    Event Type cannot be empty.
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="fullname" className="font-medium  text-left">
                  Event Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="datetime-local"
                  name="eventDate"
                  className={`px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200  focus:ring-4  ${
                    errors.eventDate
                      ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  }`}
                  value={eventDate}
                  onChange={(e) => {
                    setEventDate(e.target.value);
                  }}
                />
                {errors?.eventDate && (
                  <span className="text-red-500 text-left">
                    Please select the event date
                  </span>
                )}
              </div>
            </div>

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
                className="p-2 border-2 text-[#d86c96] border-[#d86c9e] font-semibold rounded-3xl px-4 hover:bg-red-300 hover:text-white "
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
                <p className=" text-[#d86c96] font-semibold text-sm my-2 mt-4">
                  Thank You! Your Message has been delivered.
                  {resetSuccessMessage()}
                </p>
              )}
              {showFailureMessage && (
                <p className=" text-[#d86c96] mt-4">
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
