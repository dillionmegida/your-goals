const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const userSchema = new Schema( {
  firstName: {
    type: String,
    trim: true,
    minlength: 2
  },
  lastName: {
    type: String,
    trim: true,
    minlength: 2
  },
  username: {
    type: String,
    required: true,
    minlength: 2,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minlength: 8,
    unique: true,
    trim: true
  },
  password: { type: String, minlength: 6 },
  isVerified: {
    type: Boolean,
    default: false
  },
  emailVerificationToken: {
    type: String
  },
}, { timestamps: true } )

const User = mongoose.model( 'User', userSchema )

module.exports = User