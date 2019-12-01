import fetch from 'isomorphic-unfetch'

import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

//apollo link related
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'

// const { GRAPHQL_URL, AUTH_TOKEN = '' } = process.env
const AUTH_TOKEN = 'df84d5139d8e14a441552d6a033e7564482c68e3'
const GRAPHQL_URL = 'https://api.github.com/graphql'

//
//
//
//

const httpLink = new HttpLink({
  uri: GRAPHQL_URL,
  fetch: fetch,
  credentials: 'same-origin',
})

//handling apollo errors
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )

  if (networkError) console.log(`[Network error]: ${networkError}`)
})

//auth access to github api
const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: AUTH_TOKEN ? `Bearer ${AUTH_TOKEN}` : '',
    },
  }
})

const link = ApolloLink.from([errorLink, authLink, httpLink])

const cache = new InMemoryCache()

const apollo = new ApolloClient({
  ssrMode: true,
  link,
  cache,
  resolvers: {
    //global apollo state resolvers
    Mutation: {
      changeSelected: (_, { toSelect }, { cache }) => {
        console.log('toSelect', toSelect)
        cache.writeData({ data: { currentSelected: toSelect } })
        return null
      },
    },
  },
})

//default state
cache.writeData({
  data: {
    currentSelected: -1,
  },
})

export default apollo
