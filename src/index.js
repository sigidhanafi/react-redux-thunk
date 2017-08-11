import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './Store/configureStore'

import ListView from './Components/ListView'

const store = configureStore()
 
class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <ListView />
      </Provider>
    )
  }
}
 
ReactDOM.render (<App />, document.getElementById('container'))
