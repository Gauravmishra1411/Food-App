import React from 'react'

function Shimmer() {
  return (
    <div className="shimmer" > 
{Array(10).fill("").map((e,index)=>(<div key={index} className='shimar'></div>))}
    </div>
  )
}

export default Shimmer