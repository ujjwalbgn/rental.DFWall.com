import React from "react";
import Featured from '../../components/featured/featured.js'
import Products from '../../components/products/products.js'
import Features from '../../components/Features/Features.js'
import Offer from "../../components/Offers/Offers.js"
import Contact from "../../components/Contact/Contact.js"

export default function HomePage() {
  return <div className="container-fluid relative md:mx-4 mx-2 mt-40">
    <Featured/>
    <Features/>
    <Products/>
    <Offer/>
    <Contact/>
  </div>;
}
