import React from "react";
import Image from "next/image";
// import Product1 from "../../../public/productId-1/folding chair.png";
import Product1id2 from "../../../public/productId-1/folding-chair-6.webp";
import Product2id1 from "../../../public/productId-2/folding-table-1.webp";
import Product3id1 from "../../../public/cornHoles/cornhole-5.webp";
import Product4id1 from "../../../public/jumboJenga/jumbojenga-1.webp";
import Product5id1 from "../../../public/giantConnect/gaintconnect-1.webp";

const Products = () => {
  return (
    <div className="mt-10 pt-10 mb-8 mx-auto flex items-center justify-center relative">
      <div>
        <p className="font-medium text-4xl  text-center mb-9">Our Products</p>
        <div className="gap-20 items-center justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          {/* Box 1 */}
          <div className="text-center w-[300px] h-[400px] rounded-lg border-1 p-4 shadow-xl">
            <div>
              <p className="text-2xl font-medium">Folding Chairs</p>
              <Image
                src={Product1id2}
                className="w-full h-[200px]"
                alt="Folding Chairs"
              />
              <p className="text-lg mt-4">
                Comfortable and durable folding chairs for any event.
              </p>
              <p className="text-xl font-medium mt-2">$1.5 per day</p>
              <div className="flex items-center justify-center mt-2">
                <span className="text-yellow-500">
                  &#9733; &#9733; &#9733; &#9733; &#9734;
                </span>
                <span className="text-gray-500 ml-1">(23 reviews)</span>
              </div>
            </div>
          </div>
          {/* Box 2 */}
          <div className="text-center w-[300px] h-[400px] rounded-lg border-1 p-4 shadow-xl">
            <div>
              <p className="text-2xl font-medium">Folding Tables</p>
              <Image
                src={Product2id1}
                className="w-full h-[200px]"
                alt="Folding Tables"
              />
              <p className="text-lg mt-4">
                Versatile folding tables perfect for gatherings and parties.
              </p>
              <p className="text-xl font-medium mt-2"> $4 per day</p>
              <div className="flex items-center justify-center mt-2">
                <span className="text-yellow-500">
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </span>
                <span className="text-gray-500 ml-1">(45 reviews)</span>
              </div>
            </div>
          </div>
          {/* Box 3 */}
          <div className="text-center w-[300px] h-[400px] rounded-lg border-1 p-4 shadow-xl">
            <div>
              <p className="text-2xl font-medium">Cornhole Boards</p>
              <Image
                src={Product3id1}
                className="w-full h-[200px]"
                alt="Cornhole Boards"
              />
              <p className="text-lg mt-4">
                High-quality cornhole boards for outdoor entertainment.
              </p>
              <p className="text-xl font-medium mt-2"> $20 per day </p>
              <div className="flex items-center justify-center mt-2">
                <span className="text-yellow-500">
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </span>
                <span className="text-gray-500 ml-1">(36 reviews)</span>
              </div>
            </div>
          </div>
          {/* Box 4 */}
          <div className="text-center w-[300px] h-[400px] rounded-lg border-1 p-4 shadow-xl">
            <div>
              <p className="text-2xl font-medium">Jumbo Jenga</p>
              <Image
                src={Product4id1}
                className="w-full h-[200px]"
                alt="Jumbo Jenga"
              />
              <p className="text-lg mt-4">
                Giant Jenga set for a fun and challenging stacking game.
              </p>
              <p className="text-xl font-medium mt-2">$20 per day</p>
              <div className="flex items-center justify-center mt-2">
                <span className="text-yellow-500">
                  &#9733; &#9733; &#9733; &#9733; &#9734;
                </span>
                <span className="text-gray-500 ml-1">(29 reviews)</span>
              </div>
            </div>
          </div>
          {/* Box 5 */}
          <div className="text-center w-[300px] h-[400px] rounded-lg border-1 p-4 shadow-xl">
            <div>
              <p className="text-xl font-medium">Giant Connect Four</p>
              <Image
                src={Product5id1}
                className="w-full h-[200px]"
                alt="Giant Connect Four"
              />
              <p className="text-lg mt-4">
                Enjoy the classic Connect Four game in a giant format.
              </p>
              <p className="text-xl font-medium mt-2">$20 per day</p>
              <div className="flex items-center justify-center mt-2">
                <span className="text-yellow-500">
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </span>
                <span className="text-gray-500 ml-1">(42 reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
