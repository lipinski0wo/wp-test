import { GraphQLClient } from 'graphql-request'
import customGraphql from './customGraphql'

import { getArticles } from './article'
import { GET_ARTICLES, ADD_MSG, ADD_LOADING, REMOVE_LOADING } from './types'

jest.genMockFromModule('graphql-request')
jest.mock('graphql-request')
GraphQLClient.mockImplementation(() => ({}))

const article = {
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

const addLoadingDispatch = {
  type: ADD_LOADING,
}

const getPostsDispatch = {
  type: GET_ARTICLES,
  payload: [],
}

const removeLoadingDispatch = {
  type: REMOVE_LOADING,
}

describe('post actions', () => {
  it('should GET_ARTICLES', async () => {
    const dispatch = jest.fn()
    customGraphql.request.mockImplementationOnce(() =>
      Promise.resolve({
        articles: [article],
      })
    )

    await getArticles()(dispatch)
    expect(1).toEqual(1)
    expect(dispatch.mock.calls).toEqual([
      [addLoadingDispatch],
      [getPostsDispatch],
      [
        {
          type: GET_ARTICLES,
          payload: [article],
        },
      ],
      [removeLoadingDispatch],
    ])
  })

  it('should emit error in GET_ARTICLES fail', async () => {
    const dispatch = jest.fn()
    customGraphql.request.mockImplementationOnce(() => Promise.reject({}))
    await getArticles()(dispatch)
    expect(dispatch.mock.calls).toEqual([
      [addLoadingDispatch],
      [getPostsDispatch],
      [
        {
          type: ADD_MSG,
          payload: {
            type: 'error',
            name: 'problem while loading articles.',
          },
        },
      ],
      [removeLoadingDispatch],
    ])
  })
})
