import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import Context from './Context.js'
import { ApolloProvider } from 'react-apollo'
import { App } from './App.js'

const client = new ApolloClient({
  uri: 'https://petgram-server-carlos-p.vercel.app/graphql'
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>
  , document.getElementById('app'))
