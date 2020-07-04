import React, { useEffect, useState } from 'react'
import { Category } from '../Category/index'
import { List, Item } from '../ListOfCategories/styles'
/* import { categories as mockCategories } from '../../../api/db.json' para prueba usando el json alojado en la carpeta api */

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-server-carlos-p.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  /* const [categories, setCategories] = useState(mockCategories) para prueba usando el json alojado en la carpeta api */
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  /* Funcion que detecta el scroll y muestar y oculata el menu */
  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    /* Por medio de una prop pasamos el estilo al componente */
    <List fixed={fixed}>
      {
        loading
          ? <Item key='loading'><Category /></Item>
          : categories.map(category => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
