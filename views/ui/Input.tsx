import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { useMutation } from '@apollo/react-hooks'

import { UPDATE_SEARCH_STRING } from '~graphql/state'

type InptProps = {
  placeholderText: string
}

const Input = ({ placeholderText }: InptProps) => {
  const inputEl = useRef(null)

  const [inputValue, setInputValue] = useState(false)

  const [updateSearchString] = useMutation(UPDATE_SEARCH_STRING)

  const SearchIcon = styled.div`
    background-image: url(${'/icons/searchGrey.svg'});
    width: 16px;
    height: 16px;
  `

  const handleChange = ({ target }) => {
    updateSearchString({ variables: { newString: target.value } }) //update global state
    setInputValue(target.value != '')
  }

  return (
    <div className="inputWrapper searchCont">
      <div
        className={'searchInput ' + (inputValue && 'withValue')}
        onClick={() => {
          if (inputEl.current != document.activeElement) {
            inputEl.current.focus()
          }
        }}
      >
        <SearchIcon className="searchInput__icon" />
        <input
          className="searchInput__inpt"
          ref={inputEl}
          type="text"
          spellCheck={false}
          autoComplete="off"
          onChange={e => handleChange(e)}
        />
        <span className="searchInput__placeholder">{placeholderText}</span>
      </div>
    </div>
  )
}

export default Input
