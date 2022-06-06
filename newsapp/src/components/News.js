import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2 className="heading">News-Monkey Top Headlines</h2>
        <div className="row">
          <div className="col-md-4 my-4">
            <NewsItem title="1"/>
          </div>
          <div className="col-md-4 my-4">
            <NewsItem  title="2" />
          </div>
          <div className="col-md-4 my-4">
            <NewsItem  title="3"/>
          </div>
          <div className="col-md-4 my-4">
            <NewsItem title="4" />
          </div>
          <div className="col-md-4 my-4">
            <NewsItem  title="5"/>
          </div>
          <div className="col-md-4 my-4">
            <NewsItem  title="5"/>
          </div>
        </div>
      </div>
    );
  }
}
