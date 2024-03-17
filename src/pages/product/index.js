import Image from "next/image";
import { ProductsList } from "../../assets/productsList";
import Link from "next/link";

export default function ProductPage() {
  const productsList = ProductsList;

  return (
    <div className="relative mx-auto max-w-screen-2xl mt-20 sm:mt-40 px-4 md:px-10 pb-4">
      {/* Grid Container */}
      <div className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Auto Display Products */}
        {productsList.map((product, index) => (
          <div
            className="aspect-square transition-opacity animate-fadeIn cursor-pointer"
            key={product.id}
          >
            <div className="relative inline-block h-full w-full">
              <Link href={`/product/${product.id}`}>
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600  relative border-neutral-200 ">
                  <Image
                    alt={product.product}
                    src={product.image}
                    className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                    height={500}
                    width={500}
                    priority
                  />
                  <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 justify-center">
                    <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md cursor-pointer ">
                      <p className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                        {product.product}
                      </p>
                      <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
