import reducer from './article'
import { GET_ARTICLES } from '../actions/types'

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

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      articles: [],
    })
  })

  it('should handle GET_ARTICLES', () => {
    expect(
      reducer(undefined, {
        type: GET_ARTICLES,
        payload: [article],
      })
    ).toEqual({
      articles: [article],
    })
  })
})
