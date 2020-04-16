import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import API from '../api/APIUtils'
import Header from './Header/Header'
import ArticleDetails from './ArticleDetails/ArticleDetails'
import ArticleList from './ArticleList/ArticleList'
import Footer from './Footer/Footer'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      articles: [],
      article: {},
      loading: true
    }

    this.handleArticleClicked = this.handleArticleClicked.bind(this)
  }

  handleArticleClicked(slug) {
    this.setState({ loading: true })
    API.getBlogArticle(slug).then((res) => {
      this.setState({ article: res.data[0], loading: false })
    })
  }

  componentDidMount() {
    API.getBlogList().then((res) => {
      this.setState({ articles: res.data, loading: false })
    })
  }

  render() {
    return (
      <Router>
        <Header />

        <Route
          exact
          path="/"
          render={() => <ArticleList articles={this.state.articles} handleArticleClicked={this.handleArticleClicked} loading={this.state.loading} />}
        />
        <Route exact path="/article/:slug" render={() => <ArticleDetails article={this.state.article} loading={this.state.loading} />} />

        <Footer />
      </Router>
    )
  }
}

export default App
