import React from 'react'

const Whyreusable = ({item ,itempp}) => {
  return (
    <>
     <div className="why_text">
        <div className="why_circle"></div>
         <div className="why_text_dev">
         <h2>{item}</h2>
        <p>{itempp}</p>
         </div>
     </div>
    </>
  )
}

export default Whyreusable
