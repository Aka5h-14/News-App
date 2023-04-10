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
    this.forceUpdate();
    
  };

  render(){
  return (
    <>
    <div>
        <Router>

        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />
        <NavBar onCountryChange={this.handleCountryChange} />
          <Routes>
            <Route path='/' element={<News progress={this.setProgress}key='general' pageSize={this.pageSize} country={this.state.country} category='general' />}></Route>
            <Route path='/business' element={<News progress={this.setProgress}key='business' pageSize={this.pageSize} country={this.state.country} category='business' />}></Route>
            <Route path='/entertainment' element={<News progress={this.setProgress}key='entertainment' pageSize={this.pageSize} country={this.state.country} category='entertainment' />}></Route>
            <Route path='/health' element={<News progress={this.setProgress}key='health' pageSize={this.pageSize} country={this.state.country} category='health' />}></Route>
            <Route path='/science' element={<News progress={this.setProgress}key='science' pageSize={this.pageSize} country={this.state.country} category='science' />}></Route>
            <Route path='/sports' element={<News progress={this.setProgress}key='sports' pageSize={this.pageSize} country={this.state.country} category='sports' />}></Route>
            <Route path='/technology' element={<News progress={this.setProgress}key='technology' pageSize={this.pageSize} country={this.state.country} category='technology' />}></Route>
          </Routes>

        </Router>
      </div>
    </>
  )}
}

export default App;