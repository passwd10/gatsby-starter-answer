import React from 'react';

export const Item = ({ selectCategory, title }) => {
  return (
    <a className='item'>
      <button 
        className='tagBtn'
        onClick={() => selectCategory(title)}
      >
        {title}
      </button>
    </a>
  )
}

export default Item;