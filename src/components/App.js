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
      homepage: {},
      loading: true
    }

    this.handleArticleClicked = this.handleArticleClicked.bind(this)
    this.handleHomepageClick = this.handleHomepageClick.bind(this)
    this.fetchBlogArticles = this.fetchBlogArticles.bind(this)
  }

  handleArticleClicked(slug) {
    this.setState({ loading: true })
    API.getBlogArticle(slug).then((res) => {
      sessionStorage.setItem('article', JSON.stringify(res.data[0]))
      this.setState({ article: res.data[0], homepage: res.data[0], loading: false })
    })
  }

  handleHomepageClick() {
    API.getHomepage().then((res) => {
      this.setState({ homepage: res })
    })
  }

  fetchBlogArticles() {
    this.setState({ homepage: {} })
    API.getBlogList().then((res) => {
      sessionStorage.removeItem('article')
      this.handleHomepageClick()
      this.setState({ articles: res.data, loading: false })
    })
  }

  componentDidMount() {
    let articleInSession = JSON.parse(sessionStorage.getItem('article'))
    if (articleInSession) {
      this.setState({ article: articleInSession, homepage: articleInSession, loading: false })
    } else {
      this.fetchBlogArticles()
    }
  }

  render() {
    return (
      <Router>
        <Header fetchBlogArticles={this.fetchBlogArticles} homepage={this.state.homepage} />

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
