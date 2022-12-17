import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export class NewsComp extends Component {
  article = [];
  constructor(){
    super();
    this.state = {
      articles : this.article,
      loading : true,
      page : 1,
      totalResults : 0,
    }
  }
  async componentDidMount(){
    this.setState({loading : true});
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=0e789de4b52b42a98f40321445569b74&page=1&pagesize=${this.props.pageSize}`);
    let parsedData = await data.json();
    this.setState({
      articles : parsedData.articles,
      totalResults : parsedData.totalResults,
      loading : false,
    });
  }
  handleNextClick = async ()=>{
    this.setState({loading : true});
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=0e789de4b52b42a98f40321445569b74&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`);
    let parsedData = await data.json();
    this.setState({
      articles : parsedData.articles,
      page : this.state.page+1,
      loading : false
    });
  }
  handlePrevClick = async ()=>{
    this.setState({loading : true});
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=0e789de4b52b42a98f40321445569b74&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`);
    let parsedData = await data.json();
    this.setState({
      articles : parsedData.articles,
      page : this.state.page-1,
      loading : false
    });
  }
  render() {
    return (
      <div className = "container">
        <h2 className="my-2 text-center">NewsKabutar - Top headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row mt-3">
          {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-4 my-2" key={element.url}>
                      <NewsItem title = {element.title?element.title.slice(0,50)+"...":""} description = {element.description?element.description.slice(0,80)+"...":""} imgUrl={element.urlToImage?element.urlToImage:"https://cdn.pixabay.com/photo/2014/03/24/17/16/paper-295243_1280.png"} newsId = {element.url}/>
                  </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev</button>
          <button disabled={this.state.page>=Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default NewsComp