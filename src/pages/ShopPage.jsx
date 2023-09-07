import { useState, useEffect } from "react";
import { sanityClient } from "../helpers/client";
import Product from "../components/Product";

async function getSanityData() {
  const productQuery = '*[_type == "product"]';
  const products = await sanityClient.fetch(productQuery);
  return [products];
}

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getSanityData().then((data) => {
      setProducts(data[0]);
    });
  }, []);
  return (
    <div>
      <div className="shop__products-container">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
