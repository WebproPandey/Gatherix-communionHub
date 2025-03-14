import React from 'react'

const Card = ({height , width ,background}) => {
  return (
    <div className={` border-[1px] rounded-2xl transition-all duration-500`}
    style={{ height , width ,background}}>
        
    </div>
  )
}

export default Card