// components/ProductDetail.js
import React from 'react';
import { useRouter } from 'next/router';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
import ProductSlider from '../../components/slider/slider';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const ProductDetail = () => {
  const router = useRouter();
  const { name, images, price } = router.query;

  if (!name || !price) {
    return <p>Loading...</p>;
  }

  // Convert the images query parameter into an array
  const imageArray = Array.isArray(images) && images.length > 0 ? images : [];


  const onButtonClick = () => {
    router.push('/contactUs');
  };

  return (
    <div>
      <section className="section-product-detail relative mt-28 max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto">
        <div className="container">
          <div className="wrapper grid md:grid-cols-2 grid-cols-1 items-center gap-[30x]s min-h-96">
            <div className="wrapper-figure">
            {imageArray && imageArray.length > 0 ? (
                <ProductSlider images={imageArray} />
              ) : (
                <div className="no-image-placeholder">
                  {/* Display a placeholder or any content when there are no images */}
                  <p>No images available</p>
                </div>
              )}
            </div>
            <div className="wrapper-content">
              <div className="wrapper-inform">
                <span className="badge badge-darken">Chair</span>
                <h1 className="heading-sm font-bold">{decodeURIComponent(name)}</h1>
                <p className="text-md font-regular">Chair notes</p>
              </div>
              <div className="wrapper-detail">
                <div className="price">
                  <span className="text-md font-semi">Price:</span>
                  <h3 className="text-xxl font-bold">{decodeURIComponent(price)} /per day</h3>
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                  onClick={() => onButtonClick()}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
