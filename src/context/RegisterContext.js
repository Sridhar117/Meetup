import React from 'react'

const RegisterContext = React.createContext({
  isRegistered: false,
  changeRegistrationStatus: () => {},
  name: '',
  topicId: '',
  topicName: '',
  updateName: () => {},
  updateTopic: () => {},
  registerError: false,
  updateError: () => {},
})

export default RegisterContext
