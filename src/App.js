import './App.css'
import React, { useState } from 'react'
import NavBar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const App = () =>{
  
  const apiKey=process.env.REACT_APP_NEWS_API
  
  const [pageSize, setPageSize] = useState(9);
  const [country, setCountry] = useState("in");
  const [progress, setProgress] = useState(0);

  const changeProgress = (newProgress) => {
    setProgress(newProgress);
  }

  const handleCountryChange = (newCountry) => {
    setCountry(newCountry);
  };
  console.log(country)

  return (
    <>
    <div>
        <Router>

        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => changeProgress(0)}
      />

        <NavBar onCountryChange={handleCountryChange} />
          <Routes>
            <Route path='/' element={<News progress={changeProgress} apiKey={apiKey} key='general' pageSize={pageSize} country={country} category='general' />}></Route>
            <Route path='/business' element={<News progress={changeProgress} apiKey={apiKey} key='business' pageSize={pageSize} country={country} category='business' />}></Route>
            <Route path='/entertainment' element={<News progress={changeProgress} apiKey={apiKey} key='entertainment' pageSize={pageSize} country={country} category='entertainment' />}></Route>
            <Route path='/health' element={<News progress={changeProgress} apiKey={apiKey} key='health' pageSize={pageSize} country={country} category='health' />}></Route>
            <Route path='/science' element={<News progress={changeProgress} apiKey={apiKey} key='science' pageSize={pageSize} country={country} category='science' />}></Route>
            <Route path='/sports' element={<News progress={changeProgress} apiKey={apiKey} key='sports' pageSize={pageSize} country={country} category='sports' />}></Route>
            <Route path='/technology' element={<News progress={changeProgress} apiKey={apiKey} key='technology' pageSize={pageSize} country={country} category='technology' />}></Route>
          </Routes>

        </Router>

      </div>
    </>
  )

}


export default App;