// components/ProductList.js
import { useState, useEffect } from 'react';
import ProductItem from './productItem';
import SearchBar from '../searchBar/searchBar';
import { useRouter } from 'next/router';


const ProductList = () => {
  // Example product data (you should replace this with your actual data)
  const productList = [
    { id: 1, name: 'Folding Chairs', price:1.5, image:['folding-chair-1.webp','folding-chair-2.webp'] },
    { id: 2, name: 'Folding 6 ft table', price: 4 ,image:['folding-table-1.webp','folding-table-2.jpeg']},
    { id: 3, name: 'Corn Holes', price: 20 },
    { id: 4, name: 'Jumbo Jenga', price: 20 },
    { id: 5, name: 'Giant Connect 4', price: 20 },
  ];

  const [products, setProducts] = useState(productList);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Number of products per page
  const [noResults, setNoResults] = useState(false);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === '') {
      setFilteredProducts(products);
      setNoResults(false);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
      setNoResults(filtered.length === 0);
    }
    setCurrentPage(1);
  };
  const router = useRouter();
  const handleButtonClick = () => {
    router.push('/contactUs');
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <div className="pt-10 w-full flex flex-col">
      <SearchBar onSearch={handleSearch} noResults={noResults} />
      {!noResults ? (
        <div className='product-listing'>
          {currentProducts.map((product) => (
            <ProductItem key={product.id} product={product}  onButtonClick={handleButtonClick} />
          ))}
        </div>
      ) : (
        <p className="no-results-text">No matching products found.</p>
      )}
      {filteredProducts.length > itemsPerPage && !noResults && (
        <div>
          {Array.from({ length: Math.ceil(filteredProducts.length / itemsPerPage) }).map(
            (_, index) => (
              <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default ProductList;