const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = 5000;

// Enable CORS for local frontend
app.use(cors());
app.use(express.json());

// Handle file uploads using multer
const upload = multer({ dest: "uploads/" });

/**
 * 📩 /apply - Route for HR job applications
 */
app.post("/apply", upload.single("resume"), async (req, res) => {
  const { firstName, lastName, email, mobile, jobTitle } = req.body;
  const resume = req.file;

  if (!resume) {
    return res.status(400).send("Resume file is missing.");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.HR_MAIL_USER,
      pass: process.env.HR_MAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: `"KRCS Careers" <${process.env.HR_MAIL_USER}>`,
    to: "hr@krcs.in",
    subject: `New Application: ${jobTitle}`,
    text: `
New Job Application:

👤 Name: ${firstName} ${lastName}
📧 Email: ${email}
📱 Mobile: ${mobile}
💼 Position: ${jobTitle}
    `,
    attachments: [
      {
        filename: resume.originalname,
        path: path.resolve(resume.path),
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    //console.log("✅ Application email sent!");
    res.status(200).send("Application submitted successfully!");
  } catch (error) {
   //console.error("❌ Email error:", error);
    res.status(500).send("Failed to send email.");
  }
});

/**
 * 📬 /contact - Route for general contact form (sales)
 */
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SALES_MAIL_USER,
      pass: process.env.SALES_MAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: `"KRCS Website" <${process.env.SALES_MAIL_USER}>`,
    to: "sales@krcs.in",
    subject: "New Contact Form Submission",
    text: `
You've received a new contact message:

Name: ${name}
Email: ${email}
Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Contact form email sent!");
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.error("❌ Contact form email error:", error);
    res.status(500).send("Failed to send message.");
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
