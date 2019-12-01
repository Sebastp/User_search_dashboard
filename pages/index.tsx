import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'

import MainLayout from '~viewsLay/Main'

//COMPONENTS
import UsersList from '~viewsComp/UsersList'

//UI COMPONENTS
import Select from '~viewsUi/Select'
import Button from '~viewsUi/Button'
import Input from '~viewsUi/Input'

//HELPERS
import { validateQuery } from '~lib/validation'
import { useForceUpdate } from '~lib/useForceUpdate'

import { GET_WHOLE_STATE, UPDATE_SEARCH_STRING } from '~graphql/state'

const Home = () => {
  const selectOptions = ['login', 'name', 'email']
  const [phraseToSearch, setPhraseToSearch] = useState('')
  const [updateSearchString] = useMutation(UPDATE_SEARCH_STRING)
  const { data: stateData } = useQuery(GET_WHOLE_STATE)
  const queryValid = validateQuery(
      stateData.searchString,
      selectOptions[stateData.currentSelected]
    ),
    forceUpdate = useForceUpdate() //using hook inside funct body

  const handleInputChange = (inputValue: string) => {
    updateSearchString({ variables: { newString: inputValue } }) //update global state
  }

  const handleSearch = () => {
    setPhraseToSearch(stateData.searchString)
  }

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
            <Input
              placeholderText={'Search for...'}
              onChangeFunct={e => handleInputChange(e)}
            />
            <Button
              disabled={!queryValid}
              onClickHandler={() => handleSearch()}
            >
              Search
            </Button>
          </div>
        </div>

        <div className="main">
          <UsersList phraseToSearch={phraseToSearch} />
        </div>
      </div>
    </MainLayout>
  )
}

export default Home
