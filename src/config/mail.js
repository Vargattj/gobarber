export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: "Equipe Gobarber <noreply@gobarber.com>",
  },
};

// Amazon SES *
// Mailgun
// sparkpost
// Mandril (Maildchimp)

// Mailtrap (Dev)
