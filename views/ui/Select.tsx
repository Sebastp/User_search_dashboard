import React, { useState, useRef } from 'react'
import { useOnClickOutside } from '~lib/useOnClickOutside'

type DropdownProps = {
  placeholderText: string
  options: string[]
}

const Select = ({ options = [''], placeholderText = '' }: DropdownProps) => {
  const [isOpened, setIsOpened] = useState(false),
    [selected, setSelected] = useState(),
    drpWrapper = useRef()

  const changeSelect = (k: number) => {
    if (selected != k) {
      toggleList()
      setSelected(k)
    }
  }

  const toggleList = () => {
    setIsOpened(!isOpened)
  }

  useOnClickOutside(drpWrapper, () => setIsOpened(false))

  return (
    <div
      className={'dropdownWrapper ' + (isOpened && 'opened')}
      ref={drpWrapper}
    >
      <div className="dropdown__top" onClick={() => toggleList()}>
        <span className="dropdown__top__label">
          {selected ? options[selected] : placeholderText}
        </span>
        <div
          className={
            'dropdown__top__arrow arrowBtn__horizontal ' +
            (isOpened && 'rotatedTop')
          }
          style={{
            backgroundImage: `url('/static/icons/chevron-down.svg')`,
          }}
        />
      </div>
      <div className="dropdown__panel">
        <ul>
          {options.map((optionTitle, k) => (
            <li
              key={k}
              onClick={() => changeSelect(k)}
              className={k == selected ? 'active' : ''}
            >
              {optionTitle}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Select
