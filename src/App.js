import React from 'react'
/* import { Category } from './components/Category/index' */
import { ListOfCategories } from './components/ListOfCategories/index'
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { Logo } from './components/Logo/index'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { GlobalStyles } from './styles/GlobalStyle'

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
          : <>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={1} />
            </>
      }
    </>
  )
}
