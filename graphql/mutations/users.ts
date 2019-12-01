import gql from 'graphql-tag'

export const SEARCH_USERS = gql`
  mutation ToggleTodo($id: Int!) {
    toggleTodo(id: $id) @client
  }
`
