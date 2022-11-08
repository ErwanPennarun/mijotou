import { ClockIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Card = ({ name, time, image_url, id }) => {
  return (
    <>
      <Link passHref href={`/recettes/${id}`}>
        <motion.div
          layout
          className="w-full aspect-[1/1.35] rounded-3xl flex flex-col relative group overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl duration-300 ease-in-out"
        >
          <div className="w-full h-full z-[4] relative rounded-3xl flex flex-col justify-end group bg-gradient-to-b	from-transparent to-slate-800 before:absolute before:content-[''] before:top-0 before:left-0 before:right-0 before:bottom-0 before:rounded3xl before:duration-300 before:ease-in-out before:z-[-1] before:opacity-0">
            <h4 className="text-white px-4 pr-4 pl-4 font-normal text-xl justify-end duration-300 ease-in-out group-hover:-translate-y-4">
              {name}
            </h4>
            <div className="flex text-white flex-row duration-300 linear pb-4 pl-4 group-hover:-translate-y-4">
              <ClockIcon className="w-[20px] " />
              <span> {time} minutes</span>
            </div>
          </div>
          <Image
            src={image_url}
            className="rounded-3xl z-[1] group-hover:scale-125  duration-300 ease-in-out"
            width="100%"
            layout="fill"
            height="100%"
            objectFit="cover"
            alt={name}
          />
        </motion.div>
      </Link>
    </>
  );
};

export default Card;
