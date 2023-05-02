import { Link } from 'react-router-dom';
import { urlFor } from '../helpers/client';

const Product = ({ product: { image, name, slug, price } }) => {
    return (
        <Link to={`/product/${slug.current}`}>
            <div className="product-card">
                <img
                    src={urlFor(image && image[0])}
                    width={250}
                    height={250}
                    className="product-image"
                />
                <p className="product-name">{name}</p>
                <p className="product-price">{price} lei</p>
            </div>
        </Link>
    );
};

export default Product;
