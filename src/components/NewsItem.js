import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,newsId,author,source,date} = this.props;
    return (
      <div>
        <div className="card">    
            <span className="position-absolute top-0 translate-left badge bg-primary">{source}</span>
            <img src={imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text muted">By {author} on {date}</p>
                <a href={newsId} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
            </div>
        </div>

      </div>
    )
  }
}

export default NewsItem