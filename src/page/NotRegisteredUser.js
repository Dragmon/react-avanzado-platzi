import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm/index'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <>
            <UserForm title='Registarse' onSubmit={activateAuth} />
            <UserForm title='Iniciar Sesión' onSubmit={activateAuth} />
          </>
        )
      }
    }
  </Context.Consumer>
)
