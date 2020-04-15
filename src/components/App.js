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
      articles: [],
      article: {}
    }

    this.handleArticleClicked = this.handleArticleClicked.bind(this)
  }

  componentDidMount() {
    let articles = [
      {
        category: 'Tech',
        title: 'article 1',
        date: '2020/24/03',
        author: 'admin',
        pageData:
          '<h1>Article 1</h1><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia provident nesciunt pariatur, ipsa repellendus est numquam maiores reiciendis deserunt doloremque. Similique optio tempora dolorem alias sed consequatur dolores ab nemo!</p>'
      },
      {
        category: 'Accounting',
        title: 'article 2',
        date: '2015/12/11',
        author: 'unknown',
        pageData:
          '<h1>Article 2</h1><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia provident nesciunt pariatur, ipsa repellendus est numquam maiores reiciendis deserunt doloremque. Similique optio tempora dolorem alias sed consequatur dolores ab nemo!</p>'
      },
      {
        category: 'Farming',
        title: 'article 3',
        date: '2015/12/11',
        author: 'unknown',
        pageData:
          '<h1>Article 3</h1><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia provident nesciunt pariatur, ipsa repellendus est numquam maiores reiciendis deserunt doloremque. Similique optio tempora dolorem alias sed consequatur dolores ab nemo!</p>'
      }
    ]
    this.setState({ articles })
  }

  handleArticleClicked(slug) {
    let articles = this.state.articles,
      articleObj = {}

    for (let i = 0; i < articles.length; i++) {
      if (articles[i].title === slug) {
        articleObj = articles[i]
        break
      }
    }

    this.setState({ article: articleObj })
  }

  render() {
    return (
      <Router>
        <Header></Header>

        <Route exact path="/" render={() => <ArticleList articles={this.state.articles} handleArticleClicked={this.handleArticleClicked} />} />
        <Route exact path="/article/:slug" render={() => <ArticleDetails article={this.state.article} />} />
      </Router>
    )
  }
}

export default App
