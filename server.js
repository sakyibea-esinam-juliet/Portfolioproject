// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Handle form POST and send email
// app.post("/contact", async (req, res) => {
//   const { name, email, message } = req.body;

//   // Set up transporter using Gmail + app password
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "sejuliet0@gmail.com",      //  Replace with YOUR Gmail address
//       pass: "ydmkdhtcnczzutrd",   //  Replace with YOUR Gmail app password
//     },
//   });

//   // Define the email content
//   const mailOptions = {
//     from: email,
//     to: "sejuliet0@gmail.com", // or another email if you prefer
//     subject: `Message from ${name}`,
//     text: `You received a message from your contact form:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("Email sending failed:", error);
//     res.status(500).json({ message: "Failed to send email." });
//   }
// });

// //  Start server
// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });
