import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import Register from './components/Register'
import RegisterContext from './context/RegisterContext'

import './App.css'

class App extends Component {
  state = {
    isRegister: false,
    name: '',
    registerError: false,
    topicId: 'ARTS_AND_CULTURE',
    topicName: 'Arts and Culture',
  }

  updateName = updateName => {
    this.setState({name: updateName})
  }

  updateTopic = topic => {
    this.setState({topicId: topic.id, topicName: topic.displayText})
  }

  changeRegistrationStatus = () => {
    this.setState({isRegister: true})
  }

  updateError = response => {
    this.setState({registerError: response})
  }

  render() {
    const {isRegister, name, topicId, registerError, topicName} = this.state

    return (
      <RegisterContext.Provider
        value={{
          isRegister,
          name,
          topicId,
          changeRegistrationStatus: this.changeRegistrationStatus,
          updateName: this.updateName,
          updateTopic: this.updateTopic,
          registerError,
          updateError: this.updateError,
          topicName,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
