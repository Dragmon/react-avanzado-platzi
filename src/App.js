import React from 'react'
/* import { Category } from './components/Category/index' */
import { ListOfCategories } from './components/ListOfCategories/index'
import { ListOfPhotoCards } from './components/ListOfPhotoCards/index'
import { GlobalStyles } from './GlobalStyle'

export const App = () => (
  <>
    <GlobalStyles />
    <ListOfCategories />
    <ListOfPhotoCards />
  </>
)
