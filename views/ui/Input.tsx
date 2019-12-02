import React, { useState, useRef } from 'react'
import styled from 'styled-components'

//STYLED COMPONENTS
const SearchIcon = styled.div`
  background-image: url(${'/icons/searchGrey.svg'});
  width: 16px;
  height: 16px;
  margin-top: 14px;
  right: 19px;
  display: inline-block;
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.7;
  transition: opacity 0.15s;
`

const Placeholder = styled.span`
  position: absolute;
  margin-right: 20px;
  top: 13px;
  color: #6a6776;
  font-size: 15px;
  user-select: none;
  transition: opacity 0.2s, color 0.2s;
  z-index: 0;
  opacity: 1;
`

type InptProps = {
  placeholderText: string
  onChangeFunct?: Function
}

const Input = ({ placeholderText, onChangeFunct }: InptProps) => {
  const inputEl = useRef(null),
    [inputValue, setInputValue] = useState(false)

  //FUNCTIONS
  const handleChange = ({ target }) => {
    if (onChangeFunct) onChangeFunct(target.value)
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
        <Placeholder className="searchInput__placeholder">
          {placeholderText}
        </Placeholder>
      </div>
    </div>
  )
}

export default Input
