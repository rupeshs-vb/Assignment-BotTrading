import React from 'react'
import DashBoard from './components/DashBoard'
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import ViewAlgo from './components/ViewAlgo'

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        {/* here the route check the path if path is /bots then it will render DashBoard component */}
        <Route path="/bots">
          <DashBoard/>
        </Route>
        {/* here the route check the path if path is matched then it will render the ViewAlgo Componenets */}
        <Route path="/bots-details/:id">
          <ViewAlgo/>
        </Route>
      </Switch>
    </>
  )
}

export default App
