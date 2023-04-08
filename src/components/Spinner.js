import React, { Component } from 'react'
import Loading from './35.gif'

export class spinner extends Component {
  render() {
    return (
      <div >
        <img className='mx-auto my-40' src={Loading} alt="Loading" />
      </div>
    )
  }
}

export default spinner
