import * as dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";
import { logger } from "./logger.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: "pitufina400@gmail.com",
    pass: "hlegzbudxyuhijbs",
  },
});

export const sendEmail = async (to, subject, template) => {
  let result = await transporter.sendMail({
    from: "pitufia400@gmail.com",
    to,
    subject,
    html: template,
  });

  logger.info({
    message: { ...result, title: "Correo enviado" },
  });
};
