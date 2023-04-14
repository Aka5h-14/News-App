import './App.css'
import React, { useState , Component } from 'react'
import NavBar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API
  
  state = {
    pageSize: 9,
    country: "in",
    progress: 0,
  };


  setProgress = (newProgress) =>{
    this.setState({progress: newProgress})
  }

  handleCountryChange = (newCountry) => {
    this.setState({ country: newCountry }, async ()=>{
      console.log(this.state.country)
    })
    
  };

  render(){
  return (
    <>
    <div>
        <Router>

        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />
        <NavBar onCountryChange={this.handleCountryChange} />
          <Routes>
            <Route path='/' element={<News progress={this.setProgress} apiKey={this.apiKey} key='general' pageSize={this.state.pageSize} country={this.state.country} category='general' />}></Route>
            <Route path='/business' element={<News progress={this.setProgress} apiKey={this.apiKey} key='business' pageSize={this.state.pageSize} country={this.state.country} category='business' />}></Route>
            <Route path='/entertainment' element={<News progress={this.setProgress} apiKey={this.apiKey} key='entertainment' pageSize={this.state.pageSize} country={this.state.country} category='entertainment' />}></Route>
            <Route path='/health' element={<News progress={this.setProgress} apiKey={this.apiKey} key='health' pageSize={this.state.pageSize} country={this.state.country} category='health' />}></Route>
            <Route path='/science' element={<News progress={this.setProgress} apiKey={this.apiKey} key='science' pageSize={this.state.pageSize} country={this.state.country} category='science' />}></Route>
            <Route path='/sports' element={<News progress={this.setProgress} apiKey={this.apiKey} key='sports' pageSize={this.state.pageSize} country={this.state.country} category='sports' />}></Route>
            <Route path='/technology' element={<News progress={this.setProgress} apiKey={this.apiKey} key='technology' pageSize={this.state.pageSize} country={this.state.country} category='technology' />}></Route>
          </Routes>

        </Router>
      </div>
    </>
  )}
}

export default App;