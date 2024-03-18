import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ProductsList } from "../../assets/productsList";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

export default function ProductDescription() {
  const router = useRouter();
  const { product } = router.query;
  const [imageList, setImageList] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productsList = ProductsList;

  // Get all the required product details
  useEffect(() => {
    const filterProduct = productsList.filter((products) => {
      return products.path === product;
    });
    setImageList(filterProduct[0]);
  }, [product]);

  // Dyanic set new image index
  const setImageIndex = (index) => {
    if (index < 0) {
      index = imageList.imageList.length - 1;
    } else if (index == imageList.imageList.length) {
      index = 0;
    }
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative mx-auto max-w-screen-xl pt-40 px-4 md:px-10 pb-20">
      {imageList?.id && (
        <div className="flex flex-col rounded-lg border border-pink-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 z-1 shadow-lg drop-shadow-xl">
          {/* Left Side */}
          <div className="h-full w-full basis-full lg:basis-4/6">
            {/* Main Image */}
            <div className="relative aspect-square h-full max-h-[450px] w-full overflow-hidden">
              {/* Image */}
              <Image
                className="h-full w-full object-contain"
                src={imageList.imageList[currentImageIndex]}
                height={500}
                width={500}
                alt={product + "image"}
                priority
              />
              {/* Right Left Button */}
              <div className="absolute bottom-[15%] flex w-full justify-center">
                <div className="mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80">
                  {/* Left Button */}
                  <div className="h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-5 cursor-pointer"
                      onClick={() => {
                        setImageIndex(currentImageIndex - 1);
                      }}
                    >
                      <path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                    </svg>
                  </div>
                  {/* Divider */}
                  <div className="mx-1 h-6 w-px bg-neutral-500"></div>
                  {/* Right Button */}
                  <div className="h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-5 cursor-pointer"
                      onClick={() => {
                        setImageIndex(currentImageIndex + 1);
                      }}
                    >
                      <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Thumbnails */}
            <div className="my-12 flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0">
              {imageList.imageList.map((image, index) => (
                <div className="h-20 w-20" key={index}>
                  <div
                    className={
                      " group flex h-full w-full items-center hover:border-[#d86c9e] border-pink-200 justify-center overflow-hidden rounded-lg border bg-white  dark:bg-black border-2 cursor-pointer " +
                      (currentImageIndex === index
                        ? " border-red-400 scale-110 transition duration-500"
                        : " ")
                    }
                    onClick={() => {
                      setCurrentImageIndex(index);
                    }}
                  >
                    <Image
                      className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                      src={image}
                      width={80}
                      height={80}
                      alt="thumbnail Image"
                      priority
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right Side */}
          <div className="basis-full lg:basis-2/6">
            {/* Header */}
            <div className="mb-6 flex flex-col border-b pb-6 border-pink-400">
              <p className="mb-2 text-4xl font-medium text-[#d86c9e]">
                {imageList.product}
              </p>
              <div className="mr-auto w-auto rounded-full  bg-pink-600 p-2 text-sm text-white">
                <p> {imageList.price}</p>
              </div>
            </div>
            {/* Description */}
            <div className="prose mx-auto max-w-6xl text-base leading-7 mb-6 text-sm leading-tight text-[#969e48]">
              {imageList.desciption}
            </div>
            {/* Add to Cart  */}
            <button className="relative flex w-full items-center justify-center rounded-full bg-pink-600 p-4 tracking-wide text-white hover:opacity-90">
              + Add To Cart
            </button>
          </div>
        </div>
      )}
      <div className="absolute top-2 left-12 pt-40 cursor-pointer z-2 ">
        <Link href={`/product`} className="flex text-[#d86c96] font-medium">
          <IoChevronBackCircleSharp
            className="text-2xl mr-2"
            style={{ color: "#d86c9e" }}
          />
          Back
        </Link>
      </div>
    </div>
  );
}
