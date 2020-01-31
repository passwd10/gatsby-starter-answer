import React from 'react';

import Item from './Item'

import './index.scss'

export const Category = ({ tags, selectCategory }) => {
  return (
    <div className='category'>
      <a className='categoryBtn'>Category</a>
      <div>
        <Item title={'All'} selectCategory={selectCategory} className='item' />
        {tags.map((title, id) =>
          <Item
            key={id}
            title={title}
            selectCategory={selectCategory}
            className='item'
          />
        )}
      </div>
    </div>
  )
}

export default Category;