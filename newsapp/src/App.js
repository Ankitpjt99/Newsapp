import React, { Component } from 'react'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import News from './components/News';
import NewsItems from './components/NewsItems';
export default class App extends Component {
  render() {
    return (
      <>
              <Navbar/>
              <News/>
              
              </>
    )
  }
}

