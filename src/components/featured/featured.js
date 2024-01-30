import React from "react";
import Image from "next/image";
import Bg from "../../../public/utilities/design.png";

export default function Featured() {
  return (
    <div className="relative flex flex-col items-center justify-center sm:flex-row">
      {/* Hide the image on small screens (hidden on sm and smaller) */}
      <div className="hidden sm:block">
        <Image src={Bg} className="inset-0 z-0 w-80 h-140" />
      </div>
      <div className="relative z-10 text-center sm:text-left sm:ml-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-serif mb-2">
          Experience The New Heights of Rental Service
        </h1>
        <div className="w-full sm:w-[600px] mx-auto">
          <p className="text-sm sm:text-base md:text-lg lg:text-lg mb-4 whitespace-normal">
            Discover comfort and style with our premium homely services. Choose
            from sleek folding chairs, elegant tables, and exciting games like
            cornhole, Jumbo Jenga, and Giant Connect Four.
          </p>
        </div>
      </div>
    </div>
  );
}
