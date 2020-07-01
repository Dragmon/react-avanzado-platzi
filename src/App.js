import React from 'react'
/* import { Category } from './components/Category/index' */
import { ListOfCategories } from './components/ListOfCategories/index'
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { Logo } from './components/Logo/index'
import { GlobalStyles } from './styles/GlobalStyle'

export const App = () => (
  <>
    <GlobalStyles />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards categoryId={1} />
  </>
)
