module.exports = {
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: process.env.GMAIL,
    pass: process.env.PASSWORD,
  },
};
