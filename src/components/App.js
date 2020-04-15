import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import Header from './Header/Header'
import ArticleDetails from './ArticleDetails/ArticleDetails'
import ArticleList from './ArticleList/ArticleList'

function App() {
  return (
    <Router>
      <Header></Header>

      <Route exact path="/" component={ArticleList}></Route>
      <Route exact path="/article" component={ArticleDetails}></Route>
    </Router>
  )
}

export default App
