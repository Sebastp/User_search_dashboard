import React from 'react'
import Head from 'next/head'
import { useMutation } from '@apollo/react-hooks'

import { SEARCH_USERS } from '~graphqlM/users'

const Home = () => {
  const [toggleTodo] = useMutation(SEARCH_USERS, { variables: { id: 2 } })
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Home
