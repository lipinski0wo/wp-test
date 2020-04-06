import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import Loading from './Loading'
import Message from './Message'

export const Fixed = ({ general, match }) => {
  return (
    <Fragment>
      {general.loading !== 0 && <Loading />}
      {general.msg.length !== 0 &&
        general.msg.map((msg, index) => (
          <Message key={msg.id} msg={msg} index={index} />
        ))}
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  general: state.general,
})

export default compose(withRouter, connect(mapStateToProps, {}))(Fixed)
