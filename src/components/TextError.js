import React from 'react'

function TextError(props) {
  return (
    <div className='bg-info'>
      {props.children}
    </div>
  )
}

export default TextError