import React from 'react';

import Item from './Item'

import './index.scss'

export const Tag = ({ tags, selectCategory }) => {
  return (
    <ul role='menu'>
      <h3 className='tag'>Tags🔖</h3>
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

export default Tag;