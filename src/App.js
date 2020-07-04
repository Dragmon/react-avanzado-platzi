import React from 'react'
/* import { Category } from './components/Category/index' */
import { Logo } from './components/Logo/index'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { GlobalStyles } from './styles/GlobalStyle'
import { Home } from './page/Home'
import { Router } from '@reach/router'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <>
      <GlobalStyles />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <Router>
            <Home path='/' />
            <Home path='/pet/:id' />
            </Router>
      }
    </>
  )
}
