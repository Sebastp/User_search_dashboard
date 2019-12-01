import gql from 'graphql-tag'

export const CHANGE_SELECTED = gql`
  mutation ChangeSelected($toSelect: Int!) {
    changeSelected(toSelect: $toSelect) @client
  }
`
