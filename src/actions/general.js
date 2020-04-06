import { REMOVE_LOADING, REMOVE_MSG, ADD_MSG } from './types'

export const removeLoading = () => async (dispatch) => {
  dispatch({
    type: REMOVE_LOADING,
  })
}

export const removeMsg = (id) => async (dispatch) => {
  dispatch({
    type: REMOVE_MSG,
    payload: id,
  })
}

export const addMsg = (msg) => async (dispatch) => {
  dispatch({
    type: ADD_MSG,
    payload: msg,
  })
}
