import React from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";

function FoodItem() {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img
          src="https://people.com/thmb/J7mMPxWT0MhdrKuy0FqxXsL2HiE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/pizza-hut-2-d194594b6b594e27912d5174c2fe8e06.jpg"
          alt="Pizza"
          className="card-img-top mx-auto"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">Veg Loaded Pizza</h5>
          <p className="fooditem_des">
            Crunchy and Cheesy veg loaded pizza served with happness
          </p>
          <p className="card-text">
            <LiaRupeeSignSolid />
            180
            <br />
          </p>
          <button id="cart_btn" className="btn btn-primary d-inline ml-4">Add to cart</button>
          <br/>
          <p>
            Status:{" "} 
            <span id="stock_status" className={18>5? "greenColor" : "redColor"}>
            {10 > 5 ? "In Stock" : "Out of Stock"} </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FoodItem;
