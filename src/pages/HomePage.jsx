import { useState, useEffect } from 'react';
import { sanityClient } from '../helpers/client';
import { FooterBanner, HeroBanner } from '../components';
import { Product } from '../components';
const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [banner, setBanner] = useState([]);
    useEffect(() => {
        getSanityData().then((data) => {
            setProducts(data[0]);
            setBanner(data[1]);
        });
    }, []);
    return (
        <div>
            <HeroBanner heroBanner={banner.length && banner[0]} />
            <div className="products-heading">
                <h2>Best Seller Products</h2>
                <p>Incredible Variety</p>
            </div>

            <div className="products-container">
                {products.map((product) => (
                    <Product key={product._id} product={product} />
                ))}
            </div>

            <FooterBanner footerBanner={banner.length && banner[0]} />
        </div>
    );
};
export default HomePage;
