export default async function handler(req, res) {
    if (req.method === "GET") {
      res.status(200).json({ message: "API Route is working!" });
    } else if (req.method === "POST") {
      const { name, email, message } = req.body;
  
      // Add your POST handling logic here, e.g., sending an email.
  
      res.status(200).json({ success: true, message: "Form submitted successfully!" });
    } else {
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
  }