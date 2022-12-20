import React from 'react'
import spinner from './spinner.gif'

const Spinner = () => {
  return (
    <div>
      <div className="text-center">
        <img src={spinner} alt="loading..." style={{ width: "5%", height: "5%", margin: "3rem 0" }} />
      </div>
    </div>
  )
}

export default Spinner