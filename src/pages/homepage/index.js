import Contact from "../../components/Contact/Contact.js";
import Features from "../../components/Features/Features.js";
import Offer from "../../components/Offers/Offers.js";
import Products from "../../components/products/products.js";
import { motion } from "framer-motion";
import AnimatedTextWord from "../../components/AnimatedTextWord.js";
import Image from "next/image";
import VaseImage from "../../../public/utilities/design.png";

export default function HomePage() {
  return (
    <div className="relative mt-20 sm:mt-40 max-w-screen-xl mx-auto px-2">
      {/* Heading Section */}
      <div className="flex h-screen">
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
      <motion.div className="relative">
        <motion.div
          className="-mt-40 mb-20 text-lg text-center sm:text-3xl font-semibold mb-4 text-[#d86c9e]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: "spring", duration: 1.5 },
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Work With Us
          <motion.p className="text-sm font-medium md:text-lg mb-4 text-[#969e48]">
            A Planner you can rely on
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6  sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 justify-center items-center mx-auto ">
          <div class="group relative block overflow-hidden rounded-md transition-all duration-500 justify-self-center ">
            <Image
              className="h-[300px] w-[250px] object-cover duration-700 ease-in-out hover:opacity-75 hover:scale-110 cursor-pointer"
              width={500}
              height={500}
              src="/gallery/board.jpg"
              alt="work-image"
              style={{ objectFit: "cover" }}
            />

            <div class="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-800">
              Modern Moods
              <h6 class="text-slate-400">Event</h6>
            </div>
          </div>

          <div class="group relative block overflow-hidden rounded-md transition-all duration-500 justify-self-center">
            <Image
              className="h-[300px] w-[250px] object-cover duration-700 ease-in-out hover:opacity-75 hover:scale-110 cursor-pointer"
              width={500}
              height={500}
              src="/gallery/board2.jpg"
              alt="work-image"
              style={{ objectFit: "cover" }}
            />

            <div class="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-800">
              Unique Tablescapes
              <h6 class="text-slate-400">Events</h6>
            </div>
          </div>

          <div class="group relative block overflow-hidden rounded-md transition-all duration-500 justify-self-center">
            <Image
              className="h-[300px] w-[250px] object-cover duration-700 ease-in-out hover:opacity-75 hover:scale-110 cursor-pointer"
              width={500}
              height={500}
              src="/gallery/chairs.jpg"
              alt="work-image"
              style={{ objectFit: "cover" }}
            />

            <div class="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-800">
              Chairs
              <h6 class="text-slate-400">Events</h6>
            </div>
          </div>

          <div class="group relative block overflow-hidden rounded-md transition-all duration-500 justify-self-center">
            <Image
              className="h-[300px] w-[250px] object-cover duration-700 ease-in-out hover:opacity-75 hover:scale-110 cursor-pointer"
              width={500}
              height={500}
              src="/gallery/table2.jpg"
              alt="work-image"
              style={{ objectFit: "cover" }}
            />

            <div class="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-800">
              Corporate
              <h6 class="text-slate-400">Events</h6>
            </div>
          </div>

          <div class="group relative block overflow-hidden rounded-md transition-all duration-500 justify-self-center">
            <Image
              className="h-[300px] w-[250px] object-cover duration-700 ease-in-out hover:opacity-75 hover:scale-110 cursor-pointer"
              width={500}
              height={500}
              src="/gallery/flowers.jpg"
              alt="work-image"
              style={{ objectFit: "cover" }}
            />

            <div class="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-800">
              Traditonal
              <h6 class="text-slate-400">Parties & Wedding</h6>
            </div>
          </div>

          <div class="group relative block overflow-hidden rounded-md transition-all duration-500 justify-self-center">
            <Image
              className="h-[300px] w-[250px] object-cover duration-700 ease-in-out hover:opacity-75 hover:scale-110 cursor-pointer"
              width={500}
              height={500}
              src="/gallery/lights.jpg"
              alt="work-image"
              style={{ objectFit: "cover" }}
            />

            <div class="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-800">
              Spring
              <h6 class="text-slate-400">Parties & Wedding</h6>
            </div>
          </div>

          <div class="group relative block overflow-hidden rounded-md transition-all duration-500 justify-self-center">
            <Image
              className="h-[300px] w-[250px] object-cover duration-700 ease-in-out hover:opacity-75 hover:scale-110 cursor-pointer"
              width={500}
              height={500}
              src="/gallery/table.jpg"
              alt="work-image"
              style={{ objectFit: "cover" }}
            />

            <div class="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-800">
              Holiday
              <h6 class="text-slate-400">Ceremonies</h6>
            </div>
          </div>
          <div class="group relative block overflow-hidden rounded-md transition-all duration-500 justify-self-center">
            <Image
              className="h-[300px] w-[250px] object-cover duration-700 ease-in-out hover:opacity-75 hover:scale-110 cursor-pointer"
              width={500}
              height={500}
              src="/gallery/wedding.jpg"
              alt="work-image"
              style={{ objectFit: "cover" }}
            />

            <div class="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-800">
              Holiday
              <h6 class="text-slate-400">Ceremonies</h6>
            </div>
          </div>
        </div>
      </motion.div>

      <Features />
      <Products />
      <Offer />
      <Contact />
    </div>
  );
}
