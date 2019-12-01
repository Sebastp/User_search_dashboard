import React, { useState, useRef } from 'react'
import styled from 'styled-components'

type InptProps = {
  placeholderText: string
}

const Input = ({ placeholderText }: InptProps) => {
  const inputEl = useRef(null)
  const [inputValue, setInputValue] = useState(false)
  const SearchIcon = styled.div`
    background-image: url(${'/icons/searchGrey.svg'});
    width: 16px;
    height: 16px;
  `

  const handleChange = ({ target }) => {
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
