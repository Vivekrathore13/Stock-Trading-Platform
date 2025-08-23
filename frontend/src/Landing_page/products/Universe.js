import React from "react";

function Universe() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center">
        {/* Section Heading */}
        <h1 className="mb-3">The Zerodha Universe</h1>
        <p className="text-muted mb-5">
          Extend your trading and investment experience even further with our
          partner platforms built to help you with everything from options
          trading and stock investing to mutual funds, insurance, and more.
        </p>

        {/* Logos Grid */}
        <div className="col-4 p-4 d-flex flex-column align-items-center">
          <img
            src="Media/zerodhaFundhouse.png"
            alt="Zerodha Fundhouse"
            className="img-fluid mb-3"
            style={{ maxHeight: "80px", objectFit: "contain" }}
          />
          <p className="text-muted">Thematic investment platform</p>
        </div>

        <div className="col-4 p-4 d-flex flex-column align-items-center">
          <img
            src="Media/sensibullLogo.svg"
            alt="Sensibull"
            className="img-fluid mb-3"
            style={{ maxHeight: "80px", objectFit: "contain" }}
          />
          <p className="text-muted">Options trading simplified</p>
        </div>

        <div className="col-4 p-4 d-flex flex-column align-items-center">
          <img
            src="Media/streakLogo.png"
            alt="Streak"
            className="img-fluid mb-3"
            style={{ maxHeight: "80px", objectFit: "contain" }}
          />
          <p className="text-muted">Algorithmic trading platform</p>
        </div>

        <div className="col-4 p-4 d-flex flex-column align-items-center">
          <img
            src="Media/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid mb-3"
            style={{ maxHeight: "80px", objectFit: "contain" }}
          />
          <p className="text-muted">Thematic investment portfolios</p>
        </div>

        <div className="col-4 p-4 d-flex flex-column align-items-center">
          <img
            src="Media/dittoLogo.png"
            alt="Ditto"
            className="img-fluid mb-3"
            style={{ maxHeight: "80px", objectFit: "contain" }}
          />
          <p className="text-muted">Simplified insurance advisory</p>
        </div>

        <div className="col-4 p-4 d-flex flex-column align-items-center">
          <img
            src="Media/coinLogo.png"
            alt="Coin"
            className="img-fluid mb-3"
            style={{ maxHeight: "80px", objectFit: "contain" }}
          />
          <p className="text-muted">Direct mutual fund platform</p>
        </div>

        {/* Signup Button */}
        <div className="col-12 mt-4">
          <button
            className="p-2 btn btn-primary fs-5"
            style={{ width: "20%", minWidth: "200px" }}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
