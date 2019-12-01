import gql from 'graphql-tag'

export const CHANGE_SELECTED = gql`
  mutation ChangeSelected($toSelect: Int!) {
    changeSelected(toSelect: $toSelect) @client
  }
`
export const UPDATE_SEARCH_STRING = gql`
  mutation UpdateSearchString($newString: String!) {
    updateSearchString(newString: $newString) @client
  }
`

//
//QUERIES
//

export const GET_CURRENT_SELECTED = gql`
  query selectedOption {
    currentSelected @client
  }
`

export const GET_WHOLE_STATE = gql`
  query wholeState {
    currentSelected @client
    searchString @client
  }
`
