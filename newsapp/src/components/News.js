import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {

  articles = [
    
  ]
  
  
    constructor(){
      super();
      console.log("hello im constructor");
      this.state ={
         articles:this.articles
      }
    }

  async componentDidMount(){
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=499d49664ef94b21b1dc3d9d3283fc2d";
    let data =  await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles:parsedData.articles})
    }

  render() {
    return (
      <div className="container my-3">
        <h2 className="heading">News-Monkey Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
        return  <div className="col-md-4 my-4"key={element.url} >
          <NewsItem  title={element.title?element.title.slice(0, 44):""} description={element.description?element.description.slice(0, 88):""} imageurl={element.urlToImage} newsurl={element.url} />
        </div>
        })}
       </div>

<div className="container d-flex justify-content-between">
<button type="button " class="btn btn-dark">Previous &larr; </button>
<button type="button " class="btn btn-dark">Next &rarr;</button>


</div>
</div>
    );
  }
}
