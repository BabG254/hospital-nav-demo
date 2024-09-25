import React from 'react';
import './Departments.css'; // Linking custom CSS for styling

function Departments() {
  const departments = [
    { name: 'Emergency', description: '24/7 services for urgent medical needs.' },
    { name: 'Cardiology', description: 'Advanced heart care services.' },
    { name: 'Radiology', description: 'Imaging and diagnostic services.' },
    { name: 'Oncology', description: 'Comprehensive cancer treatment.' }
  ];

  return (
    <div className="departments-container container my-5">
      <h1 className="text-center mb-4">Departments</h1>
      <div className="row justify-content-center">
        {departments.map((dept, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{dept.name}</h5>
                <p className="card-text">{dept.description}</p>
              </div>
              <div className="card-footer bg-transparent">
                <button className="btn btn-primary w-100">Explore {dept.name}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Departments;