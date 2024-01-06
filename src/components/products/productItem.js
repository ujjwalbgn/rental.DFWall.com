// components/ProductItem.js
import Link from 'next/link';
import { useRouter } from 'next/router';

const ProductItem = ({ product, onButtonClick }) => {
  const formattedProductName = product.name.replace(/\s+/g, '-').toLowerCase();
  const imageUrl = product.image && product.image.length > 0
    ? `/productId-${product.id}/${encodeURIComponent(product.image[0])}`
    : '/product-placeholder-image.png';

  const allImageUrls = product.image && product.image.length > 0
    ? product.image.map(image => `/productId-${product.id}/${encodeURIComponent(image)}`)
    : [];

  const router = useRouter();

  return (
    <div className="product-listing__item">
      <div className="img-wrap">
        <img src={imageUrl} alt={product.name} width="200" height="200" />
      </div>
      <div className="product-listing__item-wrapper">
        <Link href={{
          pathname: `/product/${formattedProductName}`,
          query: {
            name: encodeURIComponent(product.name),
            images: allImageUrls,
            price: encodeURIComponent(product.price),
          },
        }}>
          <h3>{product.name}</h3>
        </Link>
        <p>Price: ${product.price} /per day</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={() => onButtonClick(product.id)}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
