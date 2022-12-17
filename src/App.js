import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsComp from './components/NewsComp';
import{
  Routes,
  Route
} from 'react-router-dom';
export default class App extends Component {
   render() {
     return (
      <div>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<NewsComp key="navbarlogo" pageSize={5} category="general" country="in"/>} />

          <Route exact path="/home" element={<NewsComp key="home" pageSize={5} category="general" country="in"/>} />

          <Route exact path="/sports" element={<NewsComp key="sports" pageSize={5} category="sports" country="in"/>} />

          <Route exact path="/science" element={<NewsComp key="science" pageSize={5} category="science" country="in"/>} />

          <Route exact path="/technology" element={<NewsComp key="technology" pageSize={5} category="technology" country="in"/>} />

          <Route exact path="/health" element={<NewsComp key="health" pageSize={5} category="health" country="in"/>} />
        </Routes>
      </div>
     )
   }
 }
 
