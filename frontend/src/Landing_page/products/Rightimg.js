import React from "react";

function Rightimg({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        {/* Left Side: Text */}
        <div className="col-md-6 p-5">
          <h2 className="fw-bold mb-3">{productName}</h2>
          <p className="text-muted mb-4">{productDescription}</p>
          <a
            href={learnMore}
            className="text-primary fw-semibold"
            style={{ textDecoration: "none" }}
          >
            Learn More →
          </a>
        </div>

        {/* Right Side: Image */}
        <div className="col-md-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxHeight: "350px", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Rightimg;
