import React, { useState } from 'react'
import { CategoriesList, AddCategory } from './components'
import PropTypes from 'prop-types'
import uuid4 from 'uuid4'
import './App.css'

function GiphyApp ({ title = 'Título de ejemplo' }) {
  const [categories, setCategories] = useState([])

  const handleAddCategory = (category) => {
    const categoryLowerCase = category.toLocaleLowerCase()
    if (categories.some(cat => cat.category.toLocaleLowerCase() === categoryLowerCase)) return
    setCategories([{ id: uuid4(), category }, ...categories])
  }

  return (
    <>
      <h1 className='my-5 text-5xl text-center lg:text-7xl'>{title}</h1>
      <AddCategory onAddCategory={handleAddCategory} />
      <CategoriesList categoriesAll={categories} />
    </>
  )
}

GiphyApp.propTypes = {
  title: PropTypes.string
}

export default GiphyApp
