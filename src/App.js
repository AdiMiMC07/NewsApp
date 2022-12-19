import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsComp from './components/NewsComp';
import {
  Routes,
  Route
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pagesize = 5;
  state = {
    progress : 0
  }
  setProgress = (progress)=>{
    this.setState({progress : progress});
  }
  
  render() {
    return (
      <div>
        <Navbar />
        <LoadingBar
        height = {3}
        color='#0095a2'
        progress={this.state.progress}
      />
        <Routes>
          <Route exact path="/" element={<NewsComp setProgress = {this.setProgress} key="navbarlogo" pageSize={this.pagesize} category="general" country="in" />} />

          <Route exact path="/home" element={<NewsComp setProgress = {this.setProgress} key="home" pageSize={this.pagesize} category="general" country="in" />} />

          <Route exact path="/sports" element={<NewsComp setProgress = {this.setProgress} key="sports" pageSize={this.pagesize} category="sports" country="in" />} />

          <Route exact path="/science" element={<NewsComp setProgress = {this.setProgress} key="science" pageSize={this.pagesize} category="science" country="in" />} />

          <Route exact path="/technology" element={<NewsComp setProgress = {this.setProgress} key="technology" pageSize={this.pagesize} category="technology" country="in" />} />

          <Route exact path="/health" element={<NewsComp setProgress = {this.setProgress} key="health" pageSize={this.pagesize} category="health" country="in" />} />
        </Routes>
      </div>
    )
  }
}

