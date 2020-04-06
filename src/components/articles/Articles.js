import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getArticles } from '../../actions/article'
import ArticleBox from './ArticleBox'
import Info from '../general/Info'

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const Articles = ({ getArticles, articles }) => {
  useEffect(() => {
    getArticles()
  }, [getArticles])

  if (articles.length === 0) {
    return <Info>Nothing to display</Info>
  }

  return (
    <Wrapper>
      {articles.map((article) => (
        <ArticleBox key={article.id} article={article} />
      ))}
    </Wrapper>
  )
}

const mapStateToProps = (state) => ({
  articles: state.article.articles,
})
export default connect(mapStateToProps, { getArticles })(Articles)
