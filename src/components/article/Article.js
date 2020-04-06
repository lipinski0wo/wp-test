import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import parser from 'html-react-parser'
import styled from 'styled-components'
import { getArticles } from '../../actions/article'
import { addMsg } from '../../actions/general'
import Navbar from '../navbar/Navbar'
import Info from '../general/Info'

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px 40px;
`

export const Article = ({
  getArticles,
  addMsg,
  articles,
  match: { params },
  history,
}) => {
  const [article, setArticle] = useState(null)
  useEffect(() => {
    getArticles()
  }, [getArticles])

  useEffect(() => {
    if (!article && articles.length !== 0) {
      const found = articles.find(({ id }) => id === params.id)
      if (found) {
        setArticle(found)
      } else {
        history.replace('/')
        addMsg({
          type: 'error',
          name: 'article not found',
        })
      }
    }
  }, [articles, article, params, history, addMsg])

  if (!article) {
    return <Info>Nothing to display</Info>
  }

  return (
    <Wrapper>
      <Navbar title={article.title} />
      <h1>{article.title}</h1>
      {article.body.map((elm, index) => (
        <div key={index}>{parser(elm.data)}</div>
      ))}
    </Wrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    articles: state.article.articles,
  }
}

export default connect(mapStateToProps, { getArticles, addMsg })(Article)
