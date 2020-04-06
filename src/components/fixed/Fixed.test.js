import '@testing-library/jest-dom'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { Fixed } from './Fixed'

const setup = (setEmptyGeneral) => {
  const general = {
    loading: 5,
    msg: [
      {
        id: 'msg id',
        type: 'error',
        name: 'name of msg',
      },
    ],
  }
  if (setEmptyGeneral) {
    general.loading = 0
    general.msg = []
  }
  const initialState = {
    user: { user: { id: 'userId' } },
    post: { post: { id: 'postId' } },
  }
  const utils = render(
    <Router history={createMemoryHistory()}>
      <Provider store={createStore((state) => state, initialState)}>
        <Fixed general={general} match={true} />
      </Provider>
    </Router>
  )
  return {
    ...utils,
    general,
  }
}

test('Fixed - empty general props will render empty element', () => {
  const { container } = setup(true)

  expect(screen.queryByText('Please wait, loading...')).not.toBeInTheDocument()
  expect(container.querySelector('svg')).toBeNull()
})

test('Fixed - not empty general props will render elements', () => {
  const { container } = setup(false)

  expect(screen.queryByText('Please wait, loading...')).toBeInTheDocument()
  expect(container.querySelector('svg')).not.toBeNull()
})
