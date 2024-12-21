import React from "react";
import "./../styles/Products.css";

const Products = () => {
  return (
    <section id="products" className="products">
      <div className="container">
        <h2>Our Products</h2>
        <div className="product-grid">
          <div className="product">
            <h3>CardioCare</h3>
            <p>Advanced treatments for cardiovascular health.</p>
          </div>
          <div className="product">
            <h3>NeuroSupport</h3>
            <p>Innovative solutions for neurological conditions.</p>
          </div>
          <div className="product">
            <h3>ImmuneBoost</h3>
            <p>Immunity-enhancing supplements for a healthier life.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
