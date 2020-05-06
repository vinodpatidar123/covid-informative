import React, { Component } from 'react';
import { useFetch } from "../hooks";

class DashBoard extends Component{
    state = {
        data: []
      }
      componentDidMount() {
        fetch('https://api.rootnet.in/covid19-in/stats/latest')
        .then(res => res.json())
        .then((data) => {
          this.setState({ data: data.data.summary })
        })
        .catch(console.log)
      }

render(){
    return (
<section className="stats">
    <hr></hr>
    <h3 className="has-text-centered is-uppercase has-text-weight-bold">Covid-19 Status</h3>
<div className="columns ">
<div className="column">
<div className="card">
  <div className="card-content">
<p className="title has-text-centered has-text-warning">
      {this.state.data["total"]}
    </p>
    <p className="subtitle has-text-centered">
        Total Cases
    </p>
  </div>
</div>
</div>
<div className="column">
<div className="card">
  <div className="card-content color">
    <p className="title has-text-centered has-text-success">
    {this.state.data["discharged"]}
    </p>
    <p className="subtitle has-text-centered">
      Total Recovered
    </p>
  </div>
</div>
</div>
<div className="column">
<div className="card">
  <div className="card-content">
    <p className="title has-text-centered has-text-info">
     {this.state.data["total"] - this.state.data["discharged"] - this.state.data["deaths"]}
    </p>
    <p className="subtitle has-text-centered">
      Total Active
    </p>
  </div>
</div>
</div>
<div className="column p2">
<div className="card">
  <div className="card-content">
    <p className="title has-text-centered has-text-danger">
      {this.state.data["deaths"]}
    </p>
    <p className="subtitle has-text-centered ">
      Total Death
    </p>
  </div>
</div>
</div>
</div>
</section>
    )
}
}

export default DashBoard;