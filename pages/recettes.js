import Card from "../components/Card";
import Filter from "../components/Filter";

import { motion } from "framer-motion";
import { useState } from "react";
import Pagination from "../components/Pagination";

export const getStaticProps = async () => {
  const res = await fetch(`https://mijotou-api.herokuapp.com/recettes`);
  const data = await res.json();

  return {
    props: { recipes: data },
  };
};

export default function Recettes({ recipes }) {
  const [recipeFilter, setRecipeFilter] = useState(recipes);
  const [activeFilter, setActiveFilter] = useState(null);
  const [mobileFilter, setMobileFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const lastPostI = currentPage * postPerPage;
  const firstPostI = lastPostI - postPerPage;
  const currentPost = recipeFilter.slice(firstPostI, lastPostI);

  return (
    <div className="">
      <div className="flex items-baseline min-height-[61vh] lg:max-w-[90%] mx-auto ">
        <div
          className={`lg:w-[300px] lg:translate-x-[0] lg:sticky lg:top-1 ${
            mobileFilter
              ? "translate-x-[0] w-[38vh] h-5/6 flex z-30 fixed top-1/2 -translate-y-1/2 left-0 flex-col duration-300   p-8"
              : "translate-x-[-100vh] duration-300"
          }`}
        >
          <Filter
            setRecipeFilter={setRecipeFilter}
            recipeFilter={recipeFilter}
            recipes={recipes}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        </div>
        <div
          className={`fixed lg:hidden bg-main-red text-lg font-medium bottom-40 text-white z-10 p-3 ${
            mobileFilter
              ? "rounded-l-lg transform right-0 duration-300 ease-in-out"
              : " left-0 rounded-r-lg duration-300 ease-in-out pr-24"
          }`}
          onClick={() => setMobileFilter(!mobileFilter)}
        >
          {mobileFilter ? "Retour" : "Filtrer"}
        </div>
        <div
          className={`w-full lg:ml-8 p-2  ${
            mobileFilter
              ? "translate-x-[38vh] duration-300 ease-in-out"
              : "translate-x-0  duration-300 ease-in-out"
          }`}
        >
          <div className="text-4xl uppercase text-main-blue">
            <div>
              <h1>Les recettes</h1>
              {/* <h3>{isChecked.join("+")}</h3> */}
            </div>
          </div>
          <motion.div
            layout
            className="grid grid-cols-cards xl:gap-5 gap-2 my-4 mx-auto"
          >
            {currentPost.map((recipe, index) => (
              <Card
                key={index}
                name={recipe.name}
                image_url={recipe.img_url}
                time={recipe.time}
                id={recipe._id}
              />
            ))}
          </motion.div>
          <div>
            <Pagination
              totalPosts={recipeFilter.length}
              postPerPage={postPerPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
