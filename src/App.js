import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import NewsComp from './components/NewsComp';
import {
  Routes,
  Route
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pagesize = 5;
  const [progress, setProgress] = useState(0);
  const apikey = process.env.REACT_APP_NEWS_API_KEY;
  return (
    <div>
      <Navbar />
      <LoadingBar
        height={3}
        color='#2998ff'
        progress={progress}
      />
      <Routes>
        <Route exact path="/" element={<NewsComp apikey={apikey} title={"General"} setProgress={setProgress} key="navbarlogo" pageSize={pagesize} category="general" country="in" />} />
        
        <Route exact path="/home" element={<NewsComp apikey={apikey} title={"General"} setProgress={setProgress} key="home" pageSize={pagesize} category="general" country="in" />} />

        <Route exact path="/sports" element={<NewsComp apikey={apikey} title={"Sports"} setProgress={setProgress} key="sports" pageSize={pagesize} category="sports" country="in" />} />

        <Route exact path="/science" element={<NewsComp apikey={apikey} title={"Science"} setProgress={setProgress} key="science" pageSize={pagesize} category="science" country="in" />} />

        <Route exact path="/technology" element={<NewsComp apikey={apikey} title={"Technology"} setProgress={setProgress} key="technology" pageSize={pagesize} category="technology" country="in" />} />

        <Route exact path="/health" element={<NewsComp apikey={apikey} title={"Health"} setProgress={setProgress} key="health" pageSize={pagesize} category="health" country="in" />} />
      </Routes>
    </div>
  )
}

export default App;