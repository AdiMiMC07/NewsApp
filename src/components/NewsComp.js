import React,{useState,useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component';

const NewsComp =(props)=>{
  const [articles, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);  
  document.title = "NewsKabutar - " + (props.title==="General"?"Daily news headlines":props.title);

  const updateNews = async (pageNum)=>{
    props.setProgress(0);
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${pageNum}&pagesize=${props.pageSize}`);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticle(parsedData.articles);
    setLoading(false);
    setPage(pageNum);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
  }
  useEffect(() => {
    updateNews(page);
    // eslint-disable-next-line
  }, []);
  
  const fetchData = async ()=>{
    if (page<Math.ceil(totalResults)/props.pageSize){
      let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pageSize}`);
      let parsedData = await data.json();
      setArticle(articles.concat(parsedData.articles));
      setPage(page+1);
    }
  }
    return (
      <>
        <h2 className="text-center" style={{marginTop: "5rem"}}>NewsKabutar - Top headlines from {props.title}</h2>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
          <div className="row mt-3">
            {articles.map((element,index) => {
              return <div className="col-md-4 my-2" key={index}>
                <NewsItem title={element.title ? element.title.slice(0, 50) + "..." : ""} description={element.description ? element.description.slice(0, 80) + "..." : ""} imgUrl={element.urlToImage ? element.urlToImage : "https://cdn.pixabay.com/photo/2014/03/24/17/16/paper-295243_1280.png"} newsId={element.url} author={element.author ? element.author : "Unknown"} source={element.source.name ? element.source.name : "Anonymous"} date={(new Date(element.publishedAt ? element.publishedAt : "").toGMTString()).slice(0, 17)}/>
              </div>
            })}
          </div>
        </div>
        </InfiniteScroll>
      </>  
    )
}

export default NewsComp