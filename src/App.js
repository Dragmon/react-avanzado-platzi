/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
/* import { Category } from './components/Category/index' */
import { Logo } from './components/Logo/index'
import { GlobalStyles } from './styles/GlobalStyle'
import { Home } from './page/Home'
import { Details } from './page/Details'
import { Favs } from './page/Favs'
import { User } from './page/User'
import { NotRegisteredUser } from './page/NotRegisteredUser'
import { NavBar } from './components/Navbar/index'
import { Router } from '@reach/router'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}
export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Details path='/detail/:detailId' />
      </Router>
      <UserLogged>
        {
          ({ isAuth }) => isAuth
            ? <Router>
              <Favs path='/favs' />
              <User path='/user' />
            </Router>
            : <Router>
              <NotRegisteredUser path='/favs' />
              <NotRegisteredUser path='/user' />
            </Router>
        }
      </UserLogged>

      <NavBar />
    </>
  )
}
