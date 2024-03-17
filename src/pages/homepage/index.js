import { motion } from "framer-motion";
import Image from "next/image";
import VaseImage from "../../../public/utilities/design.png";
import { HomePageImages } from "../../assets/homepageImages";
import { OurServices } from "../../assets/ourServices";
import AnimatedTextWord from "../../components/AnimatedTextWord.js";
import Contact from "../../components/Contact/Contact.js";
import Offer from "../../components/Offers/Offers.js";
import Products from "../../components/products/products.js";

export default function HomePage() {
  const imageList = HomePageImages;
  const ourServicesList = OurServices;

  return (
    <div className="relative mt-20 sm:mt-40 max-w-screen-xl mx-auto px-2">
      {/* Heading Section */}
      <div className="flex">
        {/* Hide the image on small screens (hidden on sm and smaller) */}
        <motion.div
          className="hidden sm:block"
          initial={{ opacity: 0, x: -50, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Image
            className="h-[300px] w-[250px] object-cover duration-700 ease-in-out hover:opacity-75 hover:scale-110 cursor-pointer"
            alt="Vase Image"
            height={500}
            width={500}
            priority
            src={VaseImage}
          />
        </motion.div>

        <div className="mt-24 text-center">
          <AnimatedTextWord
            text="Are you ready to organize your next event?"
            customClass="text-lg text-center sm:text-3xl font-semibold mb-4 text-[#d86c9e]"
            delay={0}
          />
          <motion.p
            className="text-sm font-medium md:text-lg mb-4 text-[#969e48]"
            initial={{ opacity: 0, x: -50, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Experience the new heights of Event Rental Service where{" "}
            <span className="text-[#d86c9e]">You Bring The Guests</span>, and{" "}
            <span className="text-[#d86c9e]">We'll bring the Rest</span>.
          </motion.p>
          <motion.p
            className="text-sm font-medium md:text-lg mb-4 text-[#969e48]"
            initial={{ opacity: 0, x: -50, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            At DFW Event Rentals, we consider ourselves the event planners to
            the planners. We are a full-service Special Event Rental Company
            serving décor, rental, and custom design projects for all occasions
            of any size.
          </motion.p>
          <motion.p
            className="text-sm font-medium md:text-lg mb-4 text-[#969e48]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Our mission is to be your entrusted partner for event design and
            preferred vendor for event rentals for your next wedding, corporate
            event, gala, private parties and more!
          </motion.p>
        </div>
      </div>

      {/* List Of Images */}
      <motion.div className="relative mt-40">
        <motion.div
          className=" mb-20 text-lg text-center sm:text-3xl font-semibold mb-4 text-[#d86c9e]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: "spring", duration: 2.5, delay: 1 },
          }}
          viewport={{ once: true, amount: 0.4 }}
        >
          Work With Us
          <motion.p className="text-sm font-medium md:text-lg mb-4 text-[#969e48]">
            A Planner you can rely on
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-y-10 gap-x-6  sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 justify-center items-center mx-auto "
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: "spring", duration: 1.5 },
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* DIsplay all images */}
          {imageList.map((image, index) => (
            <div
              key={image.image}
              className="group relative block overflow-hidden rounded-md transition-all duration-500 justify-self-center "
            >
              <Image
                className="h-[300px] w-[250px] object-cover duration-700 ease-in-out hover:opacity-75 hover:scale-110 cursor-pointer"
                width={500}
                height={500}
                src={image.image}
                alt="homepage Images "
                style={{ objectFit: "cover" }}
              />

              <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-800">
                {image.description}
                <h6 className="text-slate-400"> {image.brand}</h6>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Our Services */}
      <motion.div className="relative mt-40">
        <motion.div
          className=" mb-20 text-lg text-center sm:text-3xl font-semibold mb-4 text-[#d86c9e]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { type: "spring", duration: 2.5 },
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Our Services
          <motion.p className="text-sm font-medium md:text-lg mb-4 text-[#969e48]">
            What makes DFW ALL a leader in local event rentals?
          </motion.p>
        </motion.div>
        {/* Services List */}

        <motion.div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 justify-center items-center mx-auto px-4">
          {ourServicesList.map((service, index) => (
            <motion.div
              key={service.header}
              className="group flex items-center justify-center shadow-lg shadow-[#d86c9e] p-5 h-[200px] cursor-pointer hover:scale-x-[-1] transition-all duration-1000 font-bold"
            >
              <div className="text-[#d86c9e] group-hover:hidden transition-all duration-1000 text-xl">
                {service.header}
              </div>
              <div className="text-[#969e48] text-md hidden group-hover:block group-hover:scale-x-[-1] transition-all duration-1000 font-semibold">
                {service.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <Products />
      <Offer />
      <Contact />
    </div>
  );
}
