import React, { useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'

export default () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <h1>Página Usuario</h1>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </>
  )
}
