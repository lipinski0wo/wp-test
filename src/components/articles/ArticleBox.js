import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  margin: 20px;
  border: 2px solid #000;
  box-sizing: border-box;
  padding: 10px;
`

const WrapperContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  border: 2px solid #000;
  background-color: #fff;
  padding: 20px 40px;
  margin-top: 5px;
  box-shadow: 2px 2px 1px #000;
  cursor: pointer;
`

const H4 = styled.h4`
  padding: 5px;
  background-color: #ffffffdb;
  margin: 0;
`

const User = ({ article: { title, img, id } }) => {
  return (
    <Wrapper>
      <WrapperContent style={{ backgroundImage: `url(${img.original_url})` }}>
        <H4>{title}</H4>
      </WrapperContent>
      <ButtonWrapper>
        <Link to={`/article/${id}`}>
          <Button>Czytaj dalej...</Button>
        </Link>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default User
