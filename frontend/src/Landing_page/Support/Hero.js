import React from 'react';

function Hero() {
  return (
    <section className="bg-light min-vh-50 d-flex align-items-center py-5 border-bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-7 mb-4 mb-md-0">
            <h1 className="display-5 fw-bold text-dark mb-3">Support Portal</h1>
            <p className="lead text-muted mb-4">
              Search for answers to your queries or get help with your account,
              trading, and more.
            </p>
            <form className="d-flex">
              <input
                type="text"
                className="form-control form-control-lg me-2"
                placeholder="Search for answers (e.g. account opening, margin, etc.)"
              />
              <button className="btn btn-primary btn-lg" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="col-12 col-md-5 text-center">
            <img
              src="/Media/support1.jpg"
              alt="Support Illustration"
              className="img-fluid rounded-3 mb-3"
              style={{ maxHeight: '300px', width: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;