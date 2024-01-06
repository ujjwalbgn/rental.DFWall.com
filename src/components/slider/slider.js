import React, { useRef,useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, FreeMode, Thumbs } from 'swiper/core';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

SwiperCore.use([Navigation, Pagination, Autoplay, FreeMode, Thumbs]);

const ImageSlider = ({ images }) => {
  const thumbsSwiper = useRef(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation={false}
        pagination={{ clickable: false }}
        autoplay={{ delay: 3000 }}
        thumbs={{ swiper: thumbsSwiper.current }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className='img-wrap'>
              <img
                src={decodeURIComponent(image)}
                width="400"
                height="400"
                alt={`Slide ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={swiper => (thumbsSwiper.current = swiper)}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        className="mySwiperThumbs"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={decodeURIComponent(image)}
              alt={`Thumbnail ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImageSlider;
