import React, { Component } from "react";

export default class Newsitem extends Component {

 
  render() {
    let { title, description , imageurl , newsurl} = this.props;
    return (
      <div>

      <div className="card" style={{width: "18rem"}}>
        <img src={!imageurl?"https://images.unsplash.com/photo-1654686174962-5caf1d99bb6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80":imageurl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsurl} target="_blank" className="btn btn-outline-dark">Read More</a>
          </div>
      </div>
    </div>
    )
  }
}
