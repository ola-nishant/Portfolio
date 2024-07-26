import nodemailer from "nodemailer";

// Create a transporter object with your SMTP server configuration
const transporter = nodemailer.createTransport({
  host: "smtp.example.com", // Replace with your SMTP server
  port: 587, // Replace with your SMTP server port
  secure: false, // Use true for 465 port, false for other ports
  auth: {
    user: "your-email@example.com", // Replace with your email
    pass: "your-email-password", // Replace with your email password
  },
});

// API handler function
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Mail options
    const mailOptions = {
      from: `nishant.ola22@gmail.com`, // Replace with your sender email
      to: "nishant.ola22@gmail.com", // Replace with your recipient email
      subject: "New Portfolio Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    };

    try {
      // Send mail
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Failed to send email." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

