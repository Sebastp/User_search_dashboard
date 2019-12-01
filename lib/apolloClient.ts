import fetch from 'isomorphic-unfetch'

import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

//apollo link related
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'

const { GRAPHQL_URL } = process.env //an error occurs when deconstructing more than one
const { AUTH_TOKEN } = process.env

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
// return the headers to the context so httpLink can read them
const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: AUTH_TOKEN ? `Bearer ${AUTH_TOKEN}` : '',
  },
}))

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
        cache.writeData({ data: { currentSelected: toSelect } })
        return null
      },
      updateSearchString: (_, { newString }, { cache }) => {
        cache.writeData({ data: { searchString: newString } })
        return newString
      },
    },
  },
})

//default apollo state
cache.writeData({
  data: {
    currentSelected: -1,
    searchString: '',
  },
})

export default apollo
