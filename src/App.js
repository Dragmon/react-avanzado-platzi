/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext, Suspense } from 'react'
/* import { Category } from './components/Category/index' */
import { Logo } from './components/Logo/index'
import { GlobalStyles } from './styles/GlobalStyle'
/* import { Home } from './page/Home' */
/* import { Details } from './page/Details' */
/* import { Favs } from './page/Favs' */
/* import { User } from './page/User' */
/* import { NotRegisteredUser } from './page/NotRegisteredUser' */
/* import { NotFound } from './page/NotFound' */
import { NavBar } from './components/Navbar/index'
import { Router, Redirect } from '@reach/router'
import { Context } from './Context'

const Favs = React.lazy(() => import('./page/Favs'))
const User = React.lazy(() => import('./page/User'))
const NotRegisteredUser = React.lazy(() => import('./page/NotRegisteredUser'))
const NotFound = React.lazy(() => import('./page/NotFound'))
const Home = React.lazy(() => import('./page/Home'))
const Details = React.lazy(() => import('./page/Details'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
      <GlobalStyles />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Details path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </Suspense>
  )
}
