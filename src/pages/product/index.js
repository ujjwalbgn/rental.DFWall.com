import Image from "next/image";
import { ProductsList } from "../../assets/productsList";
import Link from "next/link";

export default function ProductPage() {
  const productsList = ProductsList;

  return (
    <div className="relative mx-auto max-w-screen-xl pt-40 px-4 md:px-10 pb-20">
      {/* Grid Container */}
      <div className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {/* Auto Display Products */}
        {productsList.map((product, index) => (
          <div
            className="aspect-square transition-opacity animate-fadeIn cursor-pointer "
            key={product.id}
          >
            <div className="relative inline-block h-full w-full">
              <Link href={`/product/${product.id}`}>
                <div className="group border-[#d86c9e]  shadow-[#d86c9e] shadow-lg flex h-full w-full items-center justify-center overflow-hidden rounded-lg border rounded-2xl bg-white hover:border-pink-400  relative border-neutral-200 ">
                  <Image
                    alt={product.product}
                    src={product.image}
                    className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                    height={500}
                    width={500}
                    priority
                  />
                  <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 ">
                    <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md cursor-pointer ">
                      <p className="mr-4  text-[#969e48] flex-grow pl-2 leading-none tracking-tight">
                        {product.product}
                      </p>
                      <p className="flex-none rounded-full bg-pink-600 p-2 text-white">
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
