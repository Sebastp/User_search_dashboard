import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery, useMutation } from '@apollo/react-hooks'

import MainLayout from '~viewsLay/Main'

//UI COMPONENTS
import PropBlock from '~viewsComp/PropBlock'

import { GET_USER } from '~graphqlQ/users'

const UserPage = () => {
  const router = useRouter(),
    { userName } = router.query,
    { loading, error, data }: any = useQuery(GET_USER, {
      variables: { login: userName },
    })

  if (error) console.log(error)
  if (loading) {
    return <p>Loading</p>
  }

  const { user } = data,
    { websiteUrl: userWebsiteUrl, bio: userBio } = user

  return (
    <MainLayout
      title={`${userName} User Page`}
      description={`Short, descriptive and SEO friendly description of ${userName} page`}
    >
      <div className="mainCont profile">
        <PropBlock blockName={'User Name:'} value={userName.toString()} />
        <PropBlock blockName={'User Bio:'} value={userBio} />
        <PropBlock blockName={'Website Url:'} value={userWebsiteUrl} />
      </div>
    </MainLayout>
  )
}

export default UserPage
