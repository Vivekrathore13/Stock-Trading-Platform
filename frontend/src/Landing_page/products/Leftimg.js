import React from "react";

function Leftimg({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        {/* Left Side: Image */}
        <div className="col-md-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxHeight: "350px", objectFit: "contain" }}
          />
        </div>

        {/* Right Side: Text */}
        <div className="col-md-6 p-5">
          <h2 className="fw-bold mb-3">{productName}</h2>
          <p className="text-muted mb-4">{productDescription}</p>

          {/* Links */}
          <div className="mb-4">
            <a
              href={tryDemo}
              className="btn btn-outline-primary me-3"
              style={{ minWidth: "120px" }}
            >
              Try Demo
            </a>
            <a
              href={learnMore}
              className="btn btn-link text-primary fw-semibold"
              style={{ textDecoration: "none" }}
            >
              Learn More →
            </a>
          </div>

          {/* Store Badges */}
          <div className="d-flex align-items-center">
            <a href={googlePlay}>
              <img
                src="Media/googlePlayBadge.svg"
                alt="Get it on Google Play"
                style={{ height: "40px" }}
              />
            </a>
            <a href={appStore} className="ms-3">
              <img
                src="Media/appstoreBadge.svg"
                alt="Download on App Store"
                style={{ height: "40px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftimg;
