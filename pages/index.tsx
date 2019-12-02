import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'

import MainLayout from '~viewsLay/Main'

//COMPONENTS
import UsersList from '~viewsComp/UsersList'

//UI COMPONENTS
import Button from '~viewsUi/Button'
import ErrorMsg from '~viewsUi/ErrorMsg'
import Input from '~viewsUi/Input'
import Select from '~viewsUi/Select'

//HELPERS
import { validateQuery } from '~lib/validation'

import { GET_WHOLE_STATE, UPDATE_SEARCH_STRING } from '~graphql/state'

const Home = () => {
  const selectOptions = ['login', 'name', 'email'],
    [phraseToSearch, setPhraseToSearch] = useState(''),
    [updateSearchString] = useMutation(UPDATE_SEARCH_STRING),
    { data: stateData } = useQuery(GET_WHOLE_STATE),
    { valid: queryValid, message: queryError } = validateQuery(
      stateData.searchString,
      selectOptions[stateData.currentSelected]
    )

  //FUNCTIONS
  const handleInputChange = (inputValue: string) => {
    updateSearchString({ variables: { newString: inputValue } }) //update global state
  }
  const handleSearch = () => {
    setPhraseToSearch(stateData.searchString)
  }

  return (
    <MainLayout title={`Home Page`}>
      <div className="mainCont home">
        <div className="home__top">
          <div className="home__top__header">
            <h1 className="header--medium">Search Dashboard</h1>
            <div className="home__top__header__select">
              <Select placeholderText="Search by" options={selectOptions} />
            </div>
          </div>

          <div className="home__top__inputs">
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
          <ErrorMsg>{queryError && queryError}</ErrorMsg>
        </div>

        <div className="home__main">
          <UsersList phraseToSearch={phraseToSearch} />
        </div>
      </div>
    </MainLayout>
  )
}

export default Home
