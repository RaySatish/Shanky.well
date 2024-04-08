const nodemailer = require("nodemailer");
const pug = require("pug");
const htmlToText = require("html-to-text");

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstname = user.name.split(" ")[0];
    this.from = "Satish Prem Anand <satish@gmail.com>";
    this.url = url;
  }

  newTransport() {
    if (process.env.NODE_ENV === "production") {
      return 1;
    }

    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async send(template, subject) {
    // 1) render html using template

    const html = pug.renderFile(
      `${__dirname}/../templates/email/${template}.pug`,
      {
        firstname: this.firstname,
        url: this.url,
        subject,
      }
    );

    // 2) define mail options

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.convert(html, { wordwrap: 130 }),
    };

    // 3) send actual email

    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send("welcome", "Welcome to the shanky.well community.");
  }
};

// const sendEmail = async (options) => {
//   // 1) Create a transporter

//   const transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: process.env.EMAIL_PORT,
//     secure: false,
//     auth: {
//       user: process.env.EMAIL_USERNAME,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });

//   // 2) Define the email options

//   const mailOptions = {
//     from: "Pratik Agarwalla <pratik@gmail.com>",
//     to: options.to,
//     subject: options.subject,
//     text: options.message,
//     // html:
//   };

//   // 3) Actually send the email

//   await transporter.sendMail(mailOptions, (err, info) => {
//     if (err) console.log("Error : " + err);
//     else console.log("Email has been sent successfully");
//   });
// };

// module.exports = sendEmail;

/*
port – is the port to connect to (defaults to 587 if is secure is false or 465 if true)

host – is the hostname or IP address to connect to (defaults to ‘localhost’)

secure – if true the connection will use TLS when connecting to server. If false (the default) 
then TLS is used if server supports the STARTTLS extension. In most cases set this value to true 
if you are connecting to port 465. For port 587 or 25 keep it false
*/
