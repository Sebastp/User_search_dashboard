import React from 'react'

import MainLayout from '~viewsLay/Main'

//UI COMPONENTS
import Select from '~viewsUi/Select'
import Button from '~viewsUi/Button'
import Input from '~viewsUi/Input'

//FETCHING
import { useQuery } from '@apollo/react-hooks'

import { GET_USER } from '~graphqlQ/users'

const Home = () => {
  const selectOptions = ['login', 'name', 'email']

  const { loading, error, data }: any = useQuery(GET_USER, {
    variables: { login: 'gaearon' },
  })

  if (error) console.log(error)
  if (loading) return <p>Loading ...</p>
  console.log(data)

  return (
    <MainLayout title={`Home Page`}>
      <div className="mainCont">
        <div className="top">
          <div className="top__header">
            <h1 className="header--medium">Search Dashboard</h1>
            <div className="top__header__select">
              <Select placeholderText="Search by" options={selectOptions} />
            </div>
          </div>

          <div className="top__inputs">
            <Input placeholderText={'Search for...'} />
            <Button>Search</Button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Home
