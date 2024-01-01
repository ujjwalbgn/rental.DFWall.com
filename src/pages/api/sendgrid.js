import sendgrid from "@sendgrid/mail";
import fetch from "node-fetch";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  // If captcha is missing return at this point
  if (!req.body.captcha) {
    return res
      .status(422)
      .json({ error: "Please complete the captcha validation." });
  }
  // If captcha is present, first verify and then send the email to sendgrid
  try {
    // First verifying if the captcha code matches
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${req.body.captcha}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        method: "POST",
      }
    );
    const captchaValidation = await response.json();

    if (captchaValidation.success) {
      await sendgrid.send({
        to: "indianv3llc@gmail.com", // Your email where you'll receive emails
        from: "no-reply@indianv3.com", // your website email address here

        templateId: process.env.SENDGRID_CONTACT_US_TEMPLATE,
        dynamic_template_data: {
          fullName: req.body.fullName,
          email: req.body.email,
          message: req.body.message,
          phone: req.body.phone,
          subject: "Dfw All - Contact Us",
        },
      });
    }
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
