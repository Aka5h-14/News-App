import './App.css'
import React, { Component } from 'react'
import NavBar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export class App extends Component {
  state = {
    pageSize: 9,
    country: "in",
  };

  handleCountryChange = (newCountry) => {
    this.setState({ country: newCountry });
  };

  render(){
  return (
    <>
    <div>
        <Router>

        <NavBar onCountryChange={this.handleCountryChange} />
          <Routes>
            <Route path='/' element={<News key='general' pageSize={this.pageSize} country={this.country} category='general' />}></Route>
            <Route path='/business' element={<News key='business' pageSize={this.pageSize} country={this.country} category='business' />}></Route>
            <Route path='/entertainment' element={<News key='entertainment' pageSize={this.pageSize} country={this.country} category='entertainment' />}></Route>
            <Route path='/health' element={<News key='health' pageSize={this.pageSize} country={this.country} category='health' />}></Route>
            <Route path='/science' element={<News key='science' pageSize={this.pageSize} country={this.country} category='science' />}></Route>
            <Route path='/sports' element={<News key='sports' pageSize={this.pageSize} country={this.country} category='sports' />}></Route>
            <Route path='/technology' element={<News key='technology' pageSize={this.pageSize} country={this.country} category='technology' />}></Route>
          </Routes>

        </Router>
      </div>
    </>
  )}
}

export default App;