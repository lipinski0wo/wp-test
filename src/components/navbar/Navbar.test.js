import '@testing-library/jest-dom'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { Navbar } from './Navbar'

const setup = (isShowingDetails) => {
  const history = { push: jest.fn() }
  const title = 'title'

  const utils = render(<Navbar history={history} title={title} />)
  const buttons = [].slice.call(utils.container.querySelectorAll('svg'))

  return {
    ...utils,
    buttons,
    history,
  }
}

test('Navbar go back button', () => {
  const { buttons, history } = setup(true)

  expect(history.push).not.toHaveBeenCalled()
  fireEvent.click(buttons[0])
  expect(history.push).toHaveBeenCalledWith('/')
})
