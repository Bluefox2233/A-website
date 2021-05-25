import React, { Component } from 'react'
import Introduction from './components/Introduction'
import Foods from './components/Foods'


export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='head'>
          <Introduction/>
        </div>

        <div className='content'>
          <Foods/>
        </div>
      </div>
    )
  }
}

