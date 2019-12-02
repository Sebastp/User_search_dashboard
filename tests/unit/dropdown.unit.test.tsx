import React from 'react'
import { shallow } from 'enzyme'
import { ApolloProvider } from '@apollo/react-hooks'

import apollo from '~lib/apolloClient'

import Select from '~viewsUi/Select'

describe('Select/Dropdown', () => {
  it('should show panel/add class', () => {
    var SelectElem = shallow(
      <ApolloProvider client={apollo}>
        <Select options={['test1', 'test2']} placeholderText={'sa'} />
      </ApolloProvider>
    )

    var dropdownWrapperEleme = SelectElem.find('.dropdownWrapper')

    dropdownWrapperEleme.simulate('click')
    expect(dropdownWrapperEleme.hasClass('disabled')).toBe(true)
  })
})
