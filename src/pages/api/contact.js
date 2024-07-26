import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // Replace with your SMTP server
  port: 465, // Replace with your SMTP server port
  secure: true, // Use true for 465 port, false for other ports
  auth: {
    user: "bolsneedlicking69@gmail.com", // Replace with your email
    pass: "hiisvjhbkjhuuigf", // Replace with your email password
  },
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: `bolsneedlicking69@gmail.com`, // Replace with your sender email
      to: "bolsneedlicking69@gmail.com", // Replace with your recipient email
      subject: "New Portfolio Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    };

    try {
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

