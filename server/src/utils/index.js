const bcrypt = require('bcryptjs')
const { SECRET_KEY, BASE_URL, SALT_ROUND } = process.env
const jwt = require('jsonwebtoken')

class Utils {

  async createToken(payload) {
    return await jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" })
  }

  async getCurrentUser(payload) {
    return await jwt.verify(payload, SECRET_KEY)
  }

  async hashPassword(password) {
    return await bcrypt.hash(password, Number(SALT_ROUND))
  }

  async comparePassword(password, savedPassword) {
    return await bcrypt.compare(password, savedPassword)
  }

  async getEmailVerifierToken(payload) {
    return await jwt.sign({ payload }, SECRET_KEY, { expiresIn: '1h' })
  }

  async verifyEmailToken(token) {
    const isValid = await jwt.verify(token, SECRET_KEY)

    return isValid ? true : false
  }

  async getEVTTemplate(title, EVT, resend = false) {
    if (resend === 'resend') {
      return await `
    <body style="display: flex; justify-content: flex-start; padding-top: 1.5rem; align-items: center; flex-direction: column; font-family: helvetica, 'sans-serif'; color: #5a5a5a;">
      <h2 style="color: #505050;">${title}</h2>
      <p>You requested for reverification of your email 
        <br /><br />
        Click the button below to verify your email
        <a href="${BASE_URL}/verify-email?token=${EVT}" style="background: violet; color: white; padding: 0.89rem 2rem; border-radius: 3px; display: block; text-align: center; text-decoration: none; margin-top: 2rem;">
        here
        </a>

        <p style="margin-top: 1rem;">
          If this was not initiated by you, ignore it and head over to your dashboard to see your activities...
        <p>
      </p>
    </body>
    `
    }

    return await `
    <body style="display: flex; justify-content: flex-start; padding-top: 1.5rem; align-items: center; flex-direction: column; font-family: helvetica, 'sans-serif'; color: #5a5a5a;">
      <h2 style="color: #505050;">${title}</h2>
      <p>We are so glad to have you onboard our platform. 
        <br /><br />
        You can continue to your dashboard by loggin in
        <a href="${BASE_URL}/verify-email?token=${EVT}" style="background: violet; color: white; padding: 0.89rem 2rem; border-radius: 3px; display: block; text-align: center; text-decoration: none; margin-top: 2rem;">
        here
        </a>

        <p style="margin-top: 1rem;">
          <strong>Note:</strong> this token is valid only for the 60 minutes
        </p>
      </p>
    </body>
    `
  }
}

module.exports = Utils