import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  // Let's create a separate CSS file for custom styles

function Home() {
  return (
    <div className="home-container text-center">
      <div className="jumbotron text-white p-5">
        <h1 className="display-4">Welcome to Hospital A Navigation</h1>
        <p className="lead">Easily find your way around the hospital using our app.</p>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm p-4">
              <h5 className="card-title">Interactive Map</h5>
              <p className="card-text">View the hospital map and locate departments easily.</p>
              <Link to="/map" className="btn btn-primary">
                Go to the Map
              </Link>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm p-4">
              <h5 className="card-title">Departments</h5>
              <p className="card-text">Explore the departments and their details.</p>
              <Link to="/departments" className="btn btn-primary">
                View Departments
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;