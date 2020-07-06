import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories/index'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout/index'

const HomePage = ({ id }) => {
  return (
    <>
      <Layout title='Petgram - Tu app de fotos de mascotas' subtitle='Con petgram puedes encontrar fotos de animales dómesticos muy bonitos'>
        <ListOfCategories />
        <ListOfPhotoCards categoryId={id} />
      </Layout>
    </>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
