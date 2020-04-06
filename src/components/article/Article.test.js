import '@testing-library/jest-dom'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { Article } from './Article'

const setup = (nr) => {
  const getArticles = jest.fn()
  const addMsg = jest.fn()
  const history = { replace: jest.fn() }
  const match = { params: { id: 'id' } }
  let articles = [
    {
      title: 'title',
      id: 'id',
      url: 'url',
      img: {
        original_url: 'original_url',
      },
      author: {
        name: 'name',
      },
      body: [{ data: '' }],
    },
  ]

  if (nr === 0) {
    // no data
    articles = []
  } else if (nr === 1) {
    // wrong id from url
    match.params.id = 'wrong id'
  }
  const initialState = {}
  const utils = render(
    <Router history={createMemoryHistory()}>
      <Provider store={createStore((state) => state, initialState)}>
        <Article
          getArticles={getArticles}
          addMsg={addMsg}
          articles={articles}
          match={match}
          history={history}
        />
      </Provider>
    </Router>
  )
  return {
    ...utils,
    getArticles,
    addMsg,
    history,
  }
}

test('Article - check default behaviour', () => {
  const { getArticles, addMsg, history } = setup()

  expect(getArticles).toHaveBeenCalledTimes(1)
  expect(addMsg).not.toHaveBeenCalled()
  expect(history.replace).not.toHaveBeenCalled()
  expect(screen.queryByText('Nothing to display')).not.toBeInTheDocument()
})

test('Article - check no articles available', () => {
  const { getArticles, addMsg, history } = setup(0)

  expect(getArticles).toHaveBeenCalledTimes(1)
  expect(addMsg).not.toHaveBeenCalled()
  expect(history.replace).not.toHaveBeenCalled()
  expect(screen.queryByText('Nothing to display')).toBeInTheDocument()
})

test('Article - check wrong article id', () => {
  const { getArticles, addMsg, history } = setup(1)

  expect(getArticles).toHaveBeenCalledTimes(1)
  expect(addMsg).toHaveBeenCalledWith({
    type: 'error',
    name: 'article not found',
  })
  expect(history.replace).toHaveBeenCalledWith('/')
  expect(screen.queryByText('Nothing to display')).toBeInTheDocument()
})
