import React from 'react';

const Hero = () =>{
    return (
        <section className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
            <div className="column is-full-mobile">
              <img src="https://image.freepik.com/free-vector/stay-home-concept_23-2148479309.jpg" className="" alt="" />
              </div>
              <div className="column is-full-mobile">
              <div className="hero-text">
              <h1 className="title p4 has-text-centered-mobile">
              Stay Home
            </h1>
            <h2 className="subtitle has-text-centered-mobile">
              Stay Safe
            </h2>
            </div>
            <section>
            <div className="columns">
              <div className="column">
              <img src="https://www.mygov.in/sites/all/themes/mygov/images/covid/symptoms.png" className="image-symptoms" alt="" />
              </div>
              <div className="column">
              <h3 className="is-uppercase has-text-centered-mobile has-text-warning has-text-weight-bold text">How it spreads</h3>
            <img src="https://www.mygov.in/sites/all/themes/mygov/images/covid/block-one.png" className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="" />
            <h3 className="is-uppercase has-text-centered-mobile has-text-success has-text-weight-bold text">Prevention</h3>
            <img src="https://www.mygov.in/sites/all/themes/mygov/images/covid/block-two.png" className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="" />
              </div>
            </div>
            </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Hero;