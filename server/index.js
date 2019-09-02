require( './src/config/config' )
const { MONGODB_URI_ONLINE, MONGODB_URI_OFFLINE, PORT, SSL_PORT } = process.env
const { ApolloServer } = require( 'apollo-server' )
const fs = require( 'fs' )
const path = require( 'path' )
const https = require( 'https' )
const DB = require( './src/database' )
const superAdminDetails = require( './src/config/superAdmin.config' )

const typeDefs = require( './src/types' )
const resolvers = require( './src/resolvers' )
const dataSources = require( './src/datasources' )

const { getUser } = require( './src/utils/auth' )

new DB( superAdminDetails ).connect( MONGODB_URI_ONLINE || MONGODB_URI_OFFLINE )

const server = new ApolloServer( {
  cors: true,
  typeDefs,
  resolvers,
  context: async ( { req } ) => {
    const token = req.headers.authorization || '';

    const AuthUser = await getUser( token );

    return { AuthUser };
  },
  dataSources: () => ( dataSources )
} )

server.listen( PORT ).then( ( { url } ) => {
  console.log( `🚀 Server ready at ${url}` )
} )

https.createServer( {
  key: fs.readFileSync( path.join( process.cwd(), '/key.pem' ) ),
  cert: fs.readFileSync( path.join( process.cwd(), '/cert.pem' ) )
} )
  .listen( SSL_PORT || 4141, () => {
    console.log( `HTTPS server running on https://localhost:${SSL_PORT || 4141}/` )
  } ).setTimeout( 780000 )
