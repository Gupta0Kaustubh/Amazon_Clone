import React from "react";
import Book from "./Book";
import Mixer from "./Mixer";
import SmartWatch from "./SmartWatch";
import Alexa from "./Alexa";
import ApplePad from "./ApplePad";
import TV from "./TV";

function Product() {
  return (
    <div class="product">
      <div class="product_row d-flex">
        <Book />
        <Mixer />
        <SmartWatch />
      </div>

      <div class="product_row d-flex">
        <Alexa />
        <ApplePad />
      </div>
      <div class="product_row d-flex">
        <TV />
      </div>
    </div>
  );
}

export default Product;
