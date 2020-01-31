import React from 'react';

import Item from './Item'

import './index.scss'

export const Category = ({ tags, selectCategory }) => {
  return (
    <ul role='menu'>
      <span className='tag'>Category</span>
      <Item title={'All'} selectCategory={selectCategory} />
      {tags.map((title, id) =>
        <Item
          key={id}
          title={title}
          selectCategory={selectCategory}
        />
      )}
    </ul>
  )
}

export default Category;