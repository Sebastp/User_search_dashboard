import React from 'react'

import MainLayout from '~views/layouts/Main'

import { useMutation, useQuery } from '@apollo/react-hooks'

import { SEARCH_USERS } from '~graphqlM/users'
import { GET_USER } from '~graphqlQ/users'

const Home = () => {
  const [toggleTodo] = useMutation(SEARCH_USERS, { variables: { id: 2 } })
  const { loading, error, data }: any = useQuery(GET_USER, {
    variables: { login: 'gaearon' },
  })

  if (error) console.log(error)
  if (loading) return <p>Loading ...</p>
  console.log(data)
  return (
    <MainLayout title={`Home Page`}>
      <div></div>
    </MainLayout>
  )
}

export default Home
