import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import Header from './Header/Header'
import ArticleDetails from './ArticleDetails/ArticleDetails'
import ArticleList from './ArticleList/ArticleList'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    let articles = [
      {
        category: 'Tech',
        title: 'article 1',
        date: '2020/24/03',
        author: 'admin'
      },
      {
        category: 'Accounting',
        title: 'article 2',
        date: '2015/12/11',
        author: 'unknown'
      },
      {
        category: 'Farming',
        title: 'article 3',
        date: '2015/12/11',
        author: 'unknown'
      }
    ]
    this.setState({ articles })
  }

  render() {
    return (
      <Router>
        <Header></Header>

        <Route exact path="/" render={() => <ArticleList articles={this.state.articles} />} />
        <Route exact path="/article" component={ArticleDetails}></Route>
      </Router>
    )
  }
}

export default App
