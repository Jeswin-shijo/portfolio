import React from 'react';
import bgImage from '../../../assets/background/view-beautiful-rainbow-appearing-end-road.jpg';

const HomePage: React.FC = () => {
  return (
    <div className="position-relative vh-100 text-white font-sans overflow-hidden">
      {/* Background Image */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent position-relative px-4 py-3 z-3">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img src="/logo.png" alt="logo" height="32" />
          <strong>Pop Up Tours</strong>
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#">International</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Domestic</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Honeymoon</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Gallery</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
          </ul>
          <button className="btn btn-warning fw-semibold">Get in Touch</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="position-relative d-flex flex-column justify-content-center align-items-center text-center h-100 z-3 px-3">
        <h1 className="display-4 fw-light" style={{ fontFamily: 'Playfair Display, serif' }}>
          Start your unforgettable <br /> journey with us.
        </h1>
        <p className="lead mt-3">
          The best travel for your journey begins now
        </p>

        {/* Search Box */}
        <div className="bg-white bg-opacity-75 rounded p-4 mt-5 w-100" style={{ maxWidth: '1100px' }}>
          <div className="row g-3">
            <div className="col-6 col-md">
              <label className="form-label text-dark">Destination</label>
              <select className="form-select">
                <option>Select</option>
              </select>
            </div>
            <div className="col-6 col-md">
              <label className="form-label text-dark">Tour Type</label>
              <select className="form-select">
                <option>Select</option>
              </select>
            </div>
            <div className="col-6 col-md">
              <label className="form-label text-dark">Date</label>
              <select className="form-select">
                <option>Select</option>
              </select>
            </div>
            <div className="col-6 col-md">
              <label className="form-label text-dark">Travel Duration</label>
              <select className="form-select">
                <option>Select</option>
              </select>
            </div>
            <div className="col-12 col-md">
              <button className="btn btn-dark w-100 mt-4 mt-md-0">🔍 Search</button>
            </div>
          </div>
        </div>
      </div>

      {/* Dots Slider Indicator */}
      <div className="position-absolute top-50 end-0 translate-middle-y me-3 d-flex flex-column align-items-center gap-2 z-3">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`rounded-circle ${i === 0 ? 'bg-warning' : 'bg-white opacity-50'} border border-light`} style={{ width: '12px', height: '12px', cursor: 'pointer' }}
          ></div>
        ))}
        <div className="mt-2 text-warning">⬆</div>
      </div>
    </div>
  );
};

export default HomePage;
