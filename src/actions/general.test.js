import { REMOVE_LOADING, REMOVE_MSG, ADD_MSG } from './types'
import { removeLoading, removeMsg, addMsg } from './general'

describe('general actions', () => {
  it('should REMOVE_LOADING', async () => {
    const dispatch = jest.fn()
    await removeLoading()(dispatch)
    expect(dispatch).toBeCalledWith({
      type: REMOVE_LOADING,
    })
  })

  it('should REMOVE_MSG', async () => {
    const dispatch = jest.fn()
    await removeMsg('id')(dispatch)
    expect(dispatch).toBeCalledWith({
      type: REMOVE_MSG,
      payload: 'id',
    })
  })

  it('should ADD_MSG', async () => {
    const dispatch = jest.fn()
    await addMsg({
      type: 'error',
      name: 'msg',
    })(dispatch)
    expect(dispatch).toBeCalledWith({
      type: ADD_MSG,
      payload: {
        type: 'error',
        name: 'msg',
      },
    })
  })
})
