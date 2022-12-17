import React, { Component } from 'react'
import spinner from './spinner.gif'

export class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
            <img src={spinner} alt="loading..." style={{width : "10%",height: "10%"}}/>
        </div>
      </div>
    )
  }
}

export default Spinner