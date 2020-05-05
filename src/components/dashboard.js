import React from 'react';

export default function DashBoard(){

    return (
<section className="stats">
    <hr></hr>
    <h3 className="has-text-centered is-uppercase has-text-weight-bold">Covid-19 Status</h3>
<div className="columns ">
<div className="column">
<div className="card">
  <div className="card-content">
    <p className="title has-text-centered has-text-warning">
      349345
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
      3491
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
      349234
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
      349
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