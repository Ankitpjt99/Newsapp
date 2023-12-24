import React, { Component } from 'react';
import axios from 'axios';
import NewsItems from './NewsItems';

class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }

  async componentDidMount() {
    try {
      const apiKey = "347da20b18dd4d3da6c3ed2f2f3404dc";
      const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&pagesize=20`;

      const response = await axios.get(url);
      const data = response.data;

      this.setState({ articles: data.articles });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
handleprevclick=async()=>{
  try {
    const apiKey = "347da20b18dd4d3da6c3ed2f2f3404dc";
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&page=${this.state.page-1}&pagesize=20`;

    const response = await axios.get(url);
    const data = response.data;

    this.setState({ articles: data.articles });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  this.setState({
    page: this.state.page-1,
  })

}
handlenextclick=async()=>{
  if(this.state.page+1>Math.ceil(this.state.totalResults)){

  }
 else{ try {
    const apiKey = "347da20b18dd4d3da6c3ed2f2f3404dc";
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&page=${this.state.page+1}&pagesize=20`;

    const response =  await axios.get(url);
    const data = response.data;

    this.setState({ articles: data.articles });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  this.setState({
    page: this.state.page+1,
  })
 }
}

  render() {
    const { articles } = this.state;

    return (
      <div className='container my-3'>
        <h1 className='text-center'>Today's headlines</h1>
        
        <div className="row">
          {articles.map((article) => (
            <div className="col-md-4" key={article.url}>
              <NewsItems
                title={article.title}
                description={article.description}
                Imageurl={article.urlToImage}
                Newsurl={article.url}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-secondary" onClick={this.handleprevclick}>&larr;previos</button>
        <button disabled={this.state.page>=2}type="button" className="btn btn-secondary" onClick={this.handlenextclick}>next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
