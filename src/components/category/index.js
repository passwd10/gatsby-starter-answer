import React from 'react';

import Item from './Item'

import './index.scss'

export const Category = ({ tags, selectCategory }) => {
  return (
    <div className='category'>
        <Item title={'All'} selectCategory={selectCategory}/>
        {tags.map((title, id) =>
          <Item
            key={id}
            title={title}
            selectCategory={selectCategory}
          />
        )}
    </div>
  )
}

export default Category;