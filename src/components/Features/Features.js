import React from "react";
import Image from "next/image";
import convinient from "../../../public/utilities/convinient.png";
import thorough from "../../../public/utilities/Thorough.png";
import affordable from "../../../public/utilities/affordable.png";

const Features = () => {
  return (
    <div className="mt-4 mx-auto text-center">
      <p className="font-medium text-4xl  mb-4">Our Features</p>
      <div className="flex flex-wrap justify-center gap-10">
        {/* Box 1 */}
        <div className="text-center w-[200px] h-[250px] rounded-lg border-2 p-4 shadow-xl">
          <div className="mx-auto mb-4 w-[45px]">
            <Image src={convinient} className="w-[45px] h-[45px]" />
          </div>
          <div>
            <p className="text-xl font-medium">Convenient</p>
            <p className="text-sm mt-2">
              Your need is our chance of service. Give us a chance and you will
              be satisfied
            </p>
          </div>
        </div>
        {/* Box 2 */}
        <div className="text-center w-[200px] h-[250px] rounded-lg border-2 p-4 shadow-xl">
          <div className="mx-auto mb-4 w-[45px]">
            <Image src={thorough} className="w-[45px] h-[45px]" />
          </div>
          <div>
            <p className="text-xl font-medium">Thorough</p>
            <p className="text-sm mt-2">
              Your need is our chance of service. Give us a chance and you will
              be satisfied
            </p>
          </div>
        </div>
        {/* Box 3 */}
        <div className="text-center w-[200px] h-[250px] rounded-lg border-2 p-4 shadow-xl">
          <div className="mx-auto mb-4 w-[45px]">
            <Image src={affordable} className="w-[45px] h-[45px]" />
          </div>
          <div>
            <p className="text-xl font-medium">Affordable</p>
            <p className="text-sm mt-2">
              Your need is our chance of service. Give us a chance and you will
              be satisfied
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
