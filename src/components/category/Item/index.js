import React from 'react';

export const Item = ({ selectCategory, title }) => {
  return (
    <li className='item'>
      <button 
        className='tagBtn'
        onClick={() => selectCategory(title)}
      >
        {title}
      </button>
    </li>
  )
}

export default Item;