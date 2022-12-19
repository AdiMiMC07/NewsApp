import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component';

export class NewsComp extends Component {
  article = [];
  constructor() {
    super();
    this.state = {
      articles: this.article,
      loading: true,
      page: 1,
      totalResults: 0,
    }
  }
  
  async updateNews(pageNum) {
    this.props.setProgress(0);
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0e789de4b52b42a98f40321445569b74&page=${pageNum}&pagesize=${this.props.pageSize}`);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      page: pageNum,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews(this.state.page);
  }
  fetchData = async ()=>{
    if (this.state.page<Math.ceil(this.state.totalResults)/this.props.pageSize){
      let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0e789de4b52b42a98f40321445569b74&page=${this.state.page+1}&pagesize=${this.props.pageSize}`);
      let parsedData = await data.json();
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        page: this.state.page+1
      });
    }
  }
  render() {
    return (
      <>
        <h2 className="my-2 text-center">NewsKabutar - Top headlines</h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
          <div className="row mt-3">
            {this.state.articles.map((element,index) => {
              return <div className="col-md-4 my-2" key={index}>
                <NewsItem title={element.title ? element.title.slice(0, 50) + "..." : ""} description={element.description ? element.description.slice(0, 80) + "..." : ""} imgUrl={element.urlToImage ? element.urlToImage : "https://cdn.pixabay.com/photo/2014/03/24/17/16/paper-295243_1280.png"} newsId={element.url} author={element.author ? element.author : ""} source={element.source.name ? element.source.name : ""} date={(new Date(element.publishedAt ? element.publishedAt : "").toGMTString()).slice(0, 17)} />
              </div>
            })}
          </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev</button>
          <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </>  
    )
  }
}

export default NewsComp