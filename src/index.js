import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import LandingPage from './views/landing-page'
import COEPEditionPage from './views/c-o-e-p-edition-page'
import DreamEditionPage from './views/dream-edition-page'

const App = () => {
  return (
    <Router basename="/CollegePress">
      <div>
        <Route exact component={LandingPage} path="/" />
        <Route exact component={COEPEditionPage} path="/c-o-e-p-edition-page" />
        <Route exact component={DreamEditionPage} path="/dream-edition-page" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
