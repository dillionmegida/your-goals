const Many = require( 'extends-classes' )
const Utils = require( './utils' )
const AccountsVerificationServices = require( './utils/accountsVerification' )

class Base extends Many( AccountsVerificationServices, Utils ) {

}

module.exports = Base