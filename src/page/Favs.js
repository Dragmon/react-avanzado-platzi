import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout/index'

export default () => (
  <>
    <Layout title='Petgram - Tus favoritos' subtitle='Aqui puedes enontrar tus favoritos'>
      <FavsWithQuery />
    </Layout>
  </>
)
