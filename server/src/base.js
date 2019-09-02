const Many = require( 'extends-classes' )
const Utils = require( './utils' )
const AccountsVerification = require( './utils/accountsVerification' )

class Base extends Many( AccountsVerification, Utils ) {

}

module.exports = Base