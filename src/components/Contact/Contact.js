import React from 'react';

const Contact = () => {
  return (
    <div className='flex items-center justify-center mt-5 mt-10'>
      <div className='text-center'>
        <p className='text-3xl sm:text-xl md:text-4xl lg:text-5xl font-medium font-serif mb-10 sm:text-2xl'>
          Get in touch with us in one click
        </p>
        <div className=''>
          <button className="py-2 px-4 mb-10 text-xl sm:text-lg md:text-xl lg:text-2xl font-medium font-serif bg-blue-500 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
