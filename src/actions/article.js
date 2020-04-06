import customGraphql from './customGraphql'

import { GET_ARTICLES, ADD_MSG, ADD_LOADING, REMOVE_LOADING } from './types'

export const getArticles = () => async (dispatch) => {
  const query = ` {
    articles(t: Article) {
      id,
      title,
      url,
      img {
        original_url
      },
      author {
        name
      },
      body {
        data
      }
  }
}`

  try {
    dispatch({
      type: ADD_LOADING,
    })
    dispatch({
      type: GET_ARTICLES,
      payload: [],
    })
    const res = await customGraphql.request(query)
    dispatch({
      type: GET_ARTICLES,
      payload: res.articles,
    })
  } catch {
    dispatch({
      type: ADD_MSG,
      payload: {
        type: 'error',
        name: 'problem while loading articles.',
      },
    })
  } finally {
    dispatch({
      type: REMOVE_LOADING,
    })
  }
}
