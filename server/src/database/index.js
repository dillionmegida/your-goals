const mongoose = require( 'mongoose' );

mongoose.set( 'useFindAndModify', false );

const options = {
  keepAlive: true,
  connectTimeoutMS: 600000,
  useNewUrlParser: true,
  useCreateIndex: true
};

class Database {
  constructor( superAdmin ) {
    if ( !superAdmin ) {
      throw new Error( `Permission undefined in ${__dirname}` )
    }

    this.superAdmin = superAdmin;
  }

  connect( DB_URL ) {
    mongoose.connect( DB_URL, options )
      .then( () => {
        console.log( `Successfully connected to DB` );
      } )
      .catch( ( err ) => {
        console.log( `There was a database connection error ${err}` );
        process.exit( 0 );
      } );

    const db = mongoose.connection;

    db.once( 'disconnected', () => {
      console.log( `Successfully disconnected from DB` );
    } );

    process.on( 'SIGINT', () => {
      mongoose.connection.close( () => {
        console.log( 'Database connection closed due to app termination' );
        process.exit( 0 );
      } );
    } );
  }
}

module.exports = Database