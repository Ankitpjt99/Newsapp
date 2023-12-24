import React, { Component } from 'react'

export default class NewsItems extends Component {

      render() {
       let {title,description,Imageurl,Newsurl}=this.props;

    return (
      <div>
        <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
  <img src={Imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a rel="noreferrer" href={Newsurl} target='_blank' className="btn btn-primary">Read more</a>
  </div>
</div>
</div>
      </div>
    )
  }
}
