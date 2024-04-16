import React, { useState } from 'react'

function TodoTitle(props) {
  const {title, count, status} = props;  
  return (
    <div className='mb-[17px]'>
      <h3 className='text-white text-lg'>{title} - {count}</h3>
    </div>
  )
}

export default TodoTitle
