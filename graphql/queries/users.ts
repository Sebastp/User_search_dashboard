import gql from 'graphql-tag'

export const SEARCH_USERS = gql`
  query SearchUsers($query: String!, $first: Int!) {
    search(query: $query, type: USER, first: $first) {
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
`
