

import React from 'react';
import Image from 'next/image';
import Offer from "../../../public/utilities/Offer.png"

const Offers = () => {
  return (
    <div className="mt-10 mx-auto max-w-7xl p-8">
      <h1 className="text-4xl font-medium mb-3 text-center ml-5 font-serif">Special Offers</h1>
      <section className="rounded-lg shadow-lg mx-auto max-w-md shadow-2xl rounded-lg">
      <Image src={Offer} className='w-[125px] h-[125px] ml-5'/>
        <h2 className="text-2xl font-medium mb-4 ml-5">Combination Offers</h2>

        <div className="mb-4 ml-5">
          <p className="mb-2 ml-5">
            Get 2 outdoor games for $35/day (save $5).
          </p>
          <p className="mb-2 ml-5">
            Get 3 outdoor games for $50/day (save $10).
          </p>
        </div>

        <p className="font-serif text-center text-md pl-3 pr-3 pb-3">
          Elevate your experience with our exclusive combination offers. Limited time savings to make your gatherings extraordinary!
        </p>
      </section>

      {/* Add more sections and content as needed */}
    </div>
  );
};

export default Offers;
