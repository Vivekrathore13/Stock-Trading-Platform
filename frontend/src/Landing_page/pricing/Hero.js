import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Pricing Header */}
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h2 className="text-muted mt-3 fs-5">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h2>
      </div>

      {/* Pricing Features */}
      <div className="row p-5 mt-5 text-center">
        <div className="col-12 col-md-4 p-4">
          <img src="Media/pricingEquity.svg" alt="Equity delivery" />
          <h3 className="fs-4 mt-3">Free equity delivery</h3>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
          </p>
        </div>

        <div className="col-12 col-md-4 p-4">
          <img src="Media/intradayTrades.svg" alt="Intraday trades" />
          <h3 className="fs-4 mt-3">Intraday and F&O trades</h3>
          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday
            trades across equity, currency, and commodity.
          </p>
        </div>

        <div className="col-12 col-md-4 p-4">
          <img src="Media/pricingEquity.svg" alt="Mutual funds" />
          <h3 className="fs-4 mt-3">Free direct MF</h3>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹0 commissions
            & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
