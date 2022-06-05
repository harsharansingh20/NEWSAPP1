import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let {title,description} = this.props;
    return (
      <div>
        <div className="card mb-4"style={{width: "18rem"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="..." className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                  {description}
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
