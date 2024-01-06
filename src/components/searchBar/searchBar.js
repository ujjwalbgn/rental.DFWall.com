import React from 'react';


const ProductSearchBar = ({ onSearch }) => {
    const imageUrl = `search-icon.png`;
  return (
    <div className='product-search-bar pb-3'>
    <div className="product-search-bar-wrapper">
    <img className="search-icon" src={imageUrl} width="50" height="50" />
    <input
      type="text"
      className='product-search darksoul-search-input'
      placeholder="Search products..."
      onChange={(e) => onSearch(e.target.value)}
    />
    </div>
    </div>
  );
};

export default ProductSearchBar;
