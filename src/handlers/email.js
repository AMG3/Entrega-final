import * as dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";
import { logger } from "./logger.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: process.env.ACCOUNT_GMAIL,
    pass: process.env.PASS_ACCOUNT,
  },
});

export const sendEmail = async (to, subject, template) => {
  console.log(process.env.ACCOUNT_GMAIL);
  console.log(process.env.PASS_ACCOUNT);

  let result = await transporter.sendMail({
    from: process.env.ACCOUNT_GMAIL,
    to,
    subject,
    html: template,
  });

  logger.info({
    message: { ...result, title: "Correo enviado" },
  });
};
