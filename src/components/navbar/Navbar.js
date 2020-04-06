import React from 'react'
import { withRouter } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { ArrowBack } from '@styled-icons/material'

const sharedStyle = css`
  color: blue;
  margin: 0 10px;
  cursor: pointer;
`

const BlueArrowLeft = styled(ArrowBack)`
  ${sharedStyle}
  width: 40px;
  height: 40px;
  margin-left: 0;
`

const GoBackButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  font-weight: 800;
  display: flex;
  align-items: center;
  color: blue;
  cursor: pointer;
`

const UserName = styled.h4`
  flex: 1;
  display: flex;
  justify-content: center;
`

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
`

export const Navbar = ({ title, history }) => {
  const goBack = () => {
    history.push('/')
  }
  return (
    <Wrapper>
      <GoBackButton onClick={(e) => goBack()}>
        <BlueArrowLeft />
        Cofnij
      </GoBackButton>
      <UserName>{title}</UserName>
    </Wrapper>
  )
}

export default withRouter(Navbar)
