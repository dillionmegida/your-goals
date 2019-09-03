const { NODE_ENV, MAILGUN_API_KEY, MAILGUN_DOMAIN, SENDER_EMAIL } = process.env
const dev = NODE_ENV || 'development'
const mailgun = require( 'mailgun-js' )
const mg = mailgun( { apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN } )

// Email Verification Service
class AccountsVerification {
  async sendMail( email, message, subject ) {
    dev ? await this.mailTester( email, message, subject ) : await this.mailer( email, message, subject )
  }

  async mailTester( email, message, subject ) {
    const data = {
      from: `Trace Cool, Program Lead <${SENDER_EMAIL}>`,
      to: email,
      subject: subject,
      html: message
    };

    mg.messages().send( data, function ( error, body ) {
      if ( error ) {
        console.log( error )
      }
      console.log( 'body', body );
    } );
  }

  async mailer( email, message, subject ) {
    const data = {
      from: `George Favour, Program Lead <${SENDER_EMAIL}>`,
      to: email,
      subject: subject,
      html: message
    };

    mg.messages().send( data, function ( error, body ) {
      if ( error ) {
        console.log( error )
      }
      console.log( body );
    } );
  }
}

module.exports = AccountsVerification