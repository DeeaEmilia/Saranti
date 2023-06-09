import { useState, useEffect } from 'react';
import { sanityClient } from '../helpers/client';
import FooterBanner from '../components/FooterBanner';
import HeroBanner from '../components/HeroBanner';
import Highlights from '../components/Highlights';
import Product from '../components/Product';

async function getSanityData() {
    const productQuery = '*[_type == "product"]';
    const products = await sanityClient.fetch(productQuery);
    const bannerQuery = '*[_type == "banner"]';
    const banner = await sanityClient.fetch(bannerQuery);
    return [products, banner];
}

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
            <div className="highlights-container">
                <h2>Saranti Highlights</h2>
                <Highlights />
            </div>
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
