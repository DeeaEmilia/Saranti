import {
    AiOutlineMinus,
    AiOutlinePlus,
    AiFillStar,
    AiOutlineStar,
} from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { sanityClient, urlFor } from '../helpers/client';
import { Product } from '../components';
import { useStateContext } from '../context/StateContext';

async function getSanityData(slug) {
    const productsQuery = '*[_type == "product"]';
    const products = await sanityClient.fetch(productsQuery);

    const productQuery = `*[_type == "product" && slug.current == "${slug}"][0]`;
    const product = await sanityClient.fetch(productQuery);

    return [products, product];
}

const ProductPage = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const [products, setProducts] = useState(null);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { decrementQty, incrementQty, qty, onAdd, setShowCart } =
        useStateContext();

    const { slug } = useParams();

    useEffect(() => {
        getSanityData(slug).then((data) => {
            setProducts(data[0]);
            setProduct(data[1]);
            setLoading(false);
        });
    }, []);

    if (loading) return 'Loading...';

    const { image, name, details, price } = product;

    const handleBuyNow = () => {
        onAdd(product, qty);
        setShowCart(true);
    };

    return (
        <div>
            <div className="product-detail-container">
                <div>
                    <div className="image-container">
                        <img
                            src={urlFor(image[imageIndex])}
                            className="product-detail-image"
                        />
                    </div>

                    <div className="small-images-container">
                        {image?.map((item, i) => (
                            <img
                                key={i}
                                src={urlFor(item)}
                                className={
                                    i === imageIndex
                                        ? 'small-image selected-image'
                                        : 'small-image'
                                }
                                onMouseEnter={() => setImageIndex(i)}
                            />
                        ))}
                    </div>
                </div>

                <div className="product-detail-desc">
                    <h1>{name}</h1>
                    <div className="reviews">
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p>(39)</p>
                    </div>

                    <h4>Details:</h4>
                    <p>{details}</p>
                    <p className="price">Price: {price}$</p>

                    <div className="quantity">
                        <h3>Quantity:</h3>
                        <p className="quantity-desc">
                            <span className="minus" onClick={decrementQty}>
                                <AiOutlineMinus />
                            </span>
                            <span className="num">{qty}</span>
                            <span className="plus" onClick={incrementQty}>
                                <AiOutlinePlus />
                            </span>
                        </p>
                    </div>

                    <div className="buttons">
                        <button
                            type="button"
                            className="add-to-cart"
                            onClick={() => onAdd(product, qty)}
                        >
                            Add to Cart
                        </button>
                        <button
                            type="button"
                            className="buy-now"
                            onClick={handleBuyNow}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>

            <div className="maylike-products-wrapper">
                <h2>You may also like</h2>
                <div className="marquee">
                    <div className="maylike-products-container track">
                        {products.map((item) => (
                            <Product key={item._id} product={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
