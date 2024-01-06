import { motion } from "framer-motion";
import ProductList from '../../components/products/productListing';

export default function HomePage() {
  return (
     <section className="section-product-listing relative mt-28 max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto">
     <div className="container-fluid relative md:mx-4 mx-2">
       <ProductList/>
     </div>
   </section>
  );
}
