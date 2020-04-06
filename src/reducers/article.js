import { GET_ARTICLES } from '../actions/types'

const initialState = {
  articles: [],
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: payload,
      }
    default:
      return state
  }
}
