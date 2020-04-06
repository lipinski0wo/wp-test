import '@testing-library/jest-dom'
import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import ArticleBox from './ArticleBox'

test('ArticleBox component.', () => {
  let article = {
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
  }

  render(
    <Router history={createMemoryHistory()}>
      <ArticleBox article={article} />
    </Router>
  )

  expect(screen.queryByText('title')).toBeInTheDocument()
})
