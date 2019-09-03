const { NODE_ENV, USER_NAME, USER_PASS } = process.env
const dev = NODE_ENV || 'development'
const nodemailer = require( 'nodemailer' )

// Email Verification Service
class AccountsVerification {
  async sendMail( email, message, subject ) {
    dev ? await this.mailTester( email, message, subject ) : await this.mailer( email, message, subject )
  }

  async mailTester( email, message, subject ) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport( {
      host: "smtp.mailtrap.io",
      port: 2525,
      secure: false, // true for 465, false for other ports
      auth: {
        user: USER_NAME,
        pass: USER_PASS
      }
    } )

    try {
      const options = {
        from: `Trace 💩 <${USER_NAME}>`,
        to: email,
        subject: subject,
        html: message
      }

      let info = await transporter.sendMail( options )

      console.log( 'Message sent: %s', info.messageId );
      // console.log( 'Preview URL: %s', nodemailer.getTestMessageUrl( info ) );
    } catch ( err ) {
      console.log( err )
    }
  }

  async mailer( email, message, subject ) {
    let transporter = nodemailer.createTransport( {
      host: "smtp.mailtrap.io",
      port: 2525,
      secure: false, // true for 465, false for other ports
      auth: {
        user: USER_NAME,
        pass: USER_PASS
      }
    } )

    try {
      const options = {
        from: `"Trace 🖤" <${USER_NAME}>`,
        to: email,
        subject: subject,
        html: message
      }
      let info = await transporter.sendMail( options );

      console.log( 'Message sent: %s', info.messageId );
      // console.log( 'Preview URL: %s', nodemailer.getTestMessageUrl( info ) );
    } catch ( error ) {
      console.log( error )
    }
  }
}

module.exports = AccountsVerification