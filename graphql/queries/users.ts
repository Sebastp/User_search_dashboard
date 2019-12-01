import gql from 'graphql-tag'

export const SEARCH_USERS = gql`
  query SearchUsers($query: String!) {
    search(query: $query, type: USER, first: 10) {
      edges {
        node {
          ... on User {
            login
          }
        }
      }
    }
  }
`

export const GET_USER = gql`
  query GetUser($login: String!) {
    user(login: $login) {
      name
      bio
      websiteUrl
    }
  }
`
