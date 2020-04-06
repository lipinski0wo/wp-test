import '@testing-library/jest-dom'
import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { Articles } from './Articles'

const setup = (noArticles) => {
  const getArticles = jest.fn()

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

  if (noArticles) {
    articles = []
  }

  const utils = render(
    <Router history={createMemoryHistory()}>
      <Articles getArticles={getArticles} articles={articles} />
    </Router>
  )

  return {
    ...utils,
    getArticles,
  }
}

test('Articles - default behaviour', () => {
  const { getArticles } = setup()
  expect(getArticles).toHaveBeenCalledTimes(1)

  expect(screen.queryByText('Nothing to display')).not.toBeInTheDocument()
})

test('Articles - nothing to display', () => {
  const { getArticles } = setup(true)
  expect(getArticles).toHaveBeenCalledTimes(1)

  expect(screen.queryByText('Nothing to display')).toBeInTheDocument()
})
