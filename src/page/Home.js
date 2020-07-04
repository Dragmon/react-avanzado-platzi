import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories/index'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'

export const Home = ({ id }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}
