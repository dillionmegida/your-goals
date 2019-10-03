import React, { Component } from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { persistCache } from 'apollo-cache-persist'
import localForage from 'localforage'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { defaults, resolvers } from './/apollo.gql'
import Loading from '../components/loading/Loading'

const SCHEMA_VERSION = '3'
const SCHEMA_VERSION_KEY = 'apollo-schema-version'

const mode = process.env.NODE_ENV
const uri = mode === 'production' ?
  'https://keenserver.herokuapp.com' :
  'http://localhost:4000/graphql'

class Persistor extends Component {
  state = {
    client: null,
    loaded: false
  }

  async componentDidMount() {
    const token = localStorage.getItem('goals_token') || ''
    const cache = new InMemoryCache()
    const client = new ApolloClient({
      uri,
      cache,
      clientState: {
        defaults,
        resolvers
      },
      headers: {
        authorization: `Bearer ${token}`
      },
      // connectToDevTools: true // mode ? mode : false
    })

    const data = {
      token: token,
      networkStatus: {
        __typename: 'NetworkStatus',
        isConnected: false,
      }
    }

    cache.writeData({ data })

    try {
      const currentVersion = await localForage.getItem(SCHEMA_VERSION_KEY)
      if (currentVersion !== SCHEMA_VERSION) {
        await localForage.clear()
        await localForage.setItem(SCHEMA_VERSION_KEY, SCHEMA_VERSION)
      }

      await persistCache({
        cache,
        debug: true,
        storage: localForage
      })
    } catch (error) {
      console.log(`Error restoring Apollo cache: ${error}`)
    }

    this.setState({
      client,
      loaded: true
    })
  }

  render() {
    const { client, loaded } = this.state;

    if (!loaded) return <Loading />

    return (
      <ApolloProvider client={client}>
        {this.props.children}
      </ApolloProvider>
    )
  }
}

export default Persistor