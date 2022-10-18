import React from 'react'
import { render } from 'enzyme'
import { CssBaseline, NectarProvider } from 'components'

describe('CSSBaseline', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <NectarProvider>
        <CssBaseline />
      </NectarProvider>,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should render dark mode correctly', () => {
    const wrapper = render(
      <NectarProvider themeType="dark">
        <CssBaseline />
      </NectarProvider>,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
