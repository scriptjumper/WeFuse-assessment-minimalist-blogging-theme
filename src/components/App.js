import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import './App.css'

import Header from './Header/Header'
import ArticleDetails from './ArticleDetails/ArticleDetails'
import ArticleList from './ArticleList/ArticleList'
import Footer from './Footer/Footer'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      articles: [],
      article: {}
    }

    this.handleArticleClicked = this.handleArticleClicked.bind(this)
  }

  handleArticleClicked(slug) {
    //
  }

  componentDidMount() {
    try {
      axios.get(`${process.env.REACT_APP_API_URL}/blog/list`).then((res) => {
        let articles = res.data.data
        this.setState({ articles })
      })
    } catch (e) {
      console.log(`Axios request failed: ${e}`)
      this.setState({ articles: [] })
    }
  }

  render() {
    return (
      <Router>
        <Header />

        <Route exact path="/" render={() => <ArticleList articles={this.state.articles} handleArticleClicked={this.handleArticleClicked} />} />
        <Route exact path="/article/:slug" render={() => <ArticleDetails article={this.state.article} />} />

        <Footer />
      </Router>
    )
  }
}

export default App
