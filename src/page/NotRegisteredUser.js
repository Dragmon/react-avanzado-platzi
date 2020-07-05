import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm/index'
import { RegisterMutation } from '../container/RegisterMutation'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <>
            <RegisterMutation>
              {
                (register) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables }).then(activateAuth)
                  }

                  return (
                    <UserForm title='Registarse' onSubmit={onSubmit} />
                  )
                }
              }
            </RegisterMutation>
            <UserForm title='Iniciar Sesión' onSubmit={activateAuth} />
          </>
        )
      }
    }
  </Context.Consumer>
)
