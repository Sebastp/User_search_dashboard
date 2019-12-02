import React from 'react'
import { useQuery } from '@apollo/react-hooks'

//COMPONENTS
import UserCard from '~viewsComp/UserCard'

import { SEARCH_USERS } from '~graphqlQ/users'

interface ListProps {
  phraseToSearch?: string
}

const UsersList = ({ phraseToSearch }: ListProps) => {
  const { loading, error, data }: any = useQuery(SEARCH_USERS, {
    variables: { query: phraseToSearch },
  })
  if (error) console.log(error)
  let searchData = []
  if (data) {
    //nasted deconstructing
    let { search } = data
    searchData = search.edges.map(a => a.node)
    console.log(searchData)
  }

  if (!phraseToSearch.length) {
    return null
  }
  if (loading) {
    return <p>Loading</p>
  }

  return (
    <ul>
      {searchData.length ? (
        searchData.map((userObj, i) => (
          <UserCard key={phraseToSearch + i} userObject={userObj} />
        ))
      ) : (
        <p>Nothing found</p>
      )}
    </ul>
  )
}

export default UsersList
