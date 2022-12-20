import React from 'react'

const NewsItem = (props)=>{
    let {title,description,imgUrl,newsId,author,source,date} = props;
    return (
      <div>
        <div className="card" style={{height: "40rem"}}>    
            <span className="position-absolute top-0 translate-left badge bg-primary">{source}</span>
            <img src={imgUrl} className="card-img-top" alt="..." style={{maxHeight : "25rem"}}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text text-muted">By {author} on {date}</p>
                <a href={newsId} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
            </div>
        </div>

      </div>
    )
}

export default NewsItem