import nodemailer from "nodemailer";
import config from "../infra/email";

class MailController {
  constructor(
    public to?: string,
    public subject?: string,
    public message?: string
  ) {}

  sendMail() {
    let mailOptions = {
      from: "swot.ufersa@gmail.com",
      to: this.to,
      subject: this.subject,
      html: this.message,
    };

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: config.user,
        pass: config.password,
      },
      tls: { rejectUnauthorized: false },
    });

    console.log(mailOptions);

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return error;
      } else {
        return "E-mail enviado com sucesso!" + info.response;
      }
    });
  }
}

export default new MailController();
