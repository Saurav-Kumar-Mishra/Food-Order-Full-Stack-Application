import React from "react";

function Restaurant() {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img
          src="https://www.dominos.co.in/theme2/front/images/menu-images/my-nonveg.webp"
          alt="dominos pizza"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-tittle">Domino pizza</h5>
          <p className="rest_address"> 123 Street, Place, City - 0000, state</p>
          <div className="rating-outer">
            <div className="rating-inner"></div>
            <span id="no_of_reviews">140 reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
