import React, { useState } from "react";
import Image from "next/image";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch("https://mijotou-api.herokuapp.com/recettes/");
  const data = await res.json();
  const paths = data.map((rec) => {
    return {
      params: { id: rec._id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://mijotou-api.herokuapp.com/recettes/${id}`);
  const data = await res.json();

  return {
    props: { recipe: data },
  };
};

const Recipe = ({ recipe }) => {
  const recette = recipe;
  let { ingredients } = recette;
  const ingQuantity = ingredients.map((ing) => ing.quantity);
  const [serving, setServing] = useState(recette.servings);
  const [quantity, setQuantity] = useState(
    ingredients.map((ing) => ing.quantity)
  );

  const updateQuantity = (serving) => {
    const arr = ingQuantity.map((x) =>
      x !== 0 ? Math.floor((x * serving) / recette.servings) : x
    );

    setQuantity(arr);
    console.log(quantity);
  };

  return (
    <>
      <motion.div className="flex flex-col m-auto items-center py-4 lg:py-12 px-0">
        <div className="relative rounded-2xl h-72 overflow-hidden w-3/4">
          <Image
            src={recette.img_url}
            layout="fill"
            objectFit="cover"
            width="100%"
            height="100%"
            alt={recette.name}
          />
        </div>
        <h1 className="uppercase text-center my-4 lg:my-11">{recette.name}</h1>
        {recette.source_url && (
          <Link href={recette.source_url}>par {recette.author}</Link>
        )}

        <div className="grid grid-cols-3 gap-10 ">
          <div className="lg:mx-auto col-span-3 lg:col-span-1">
            {recette.servings && (
              <div className="flex flex-row lg:ml-4 lg:mb-6 justify-center lg:justify-start ">
                Pour
                <MinusCircleIcon
                  className="w-5 h-5"
                  onClick={() => {
                    setServing(serving - 1);
                    updateQuantity(serving + 1);
                  }}
                />
                {serving}
                <PlusCircleIcon
                  className="w-5 h-5"
                  onClick={() => {
                    setServing(serving + 1);
                    updateQuantity(serving + 1);
                  }}
                />
                personnes.
              </div>
            )}
            <div className="col-span-3 lg:col-span-1  lg:border-r max-[1024px]:border-b border-gray-800 border-dotted pr-4 lg:border-opacity-25">
              <h2 className="text-lg ml-4 uppercase">Ingredients </h2>
              {recette.ingredients.map((ingredient, index) => {
                return (
                  <ul className="mt-2 ml-9 lg:mt-6" key={index}>
                    <li key={index}>
                      {quantity[index]}
                      {ingredient.unit} {ingredient.ingredient}
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
          <div className="col-span-3 lg:col-span-2">
            <h2 className="text-lg ml-4 uppercase">Quoi que faire ?</h2>
            {recipe.steps.map((step, index) => {
              return (
                <ul className="mt-8  mx-6 lg:mt-6" key={index}>
                  <li key={index}>
                     {index + 1}. {step}
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Recipe;
