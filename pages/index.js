import Image from "next/image";
import Button from "../components/Button";
import Card from "../components/Card";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const getStaticProps = async () => {
  const res = await fetch(`https://mijotou-api.herokuapp.com/recettes`);
  const data = await res.json();

  return {
    props: { recipes: data },
  };
};

export default function Home() {
  const [isInView, setIsInView] = useState(false);
  const [recipes, setRecipes] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(`https://mijotou-api.herokuapp.com/recettes`);
  //       const data = await res.json();
  //       setRecipes(data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      <div className="m-auto overflow-x-hidden">
        <div className="border-b border-black flex flex-col items-center">
          <h1 className="text-3xl lg:text-5xl lg:p-8 p-4">
            Dernières recettes
          </h1>

          <div className="gap-x-2 gap-y-8 grid lg:grid-cols-4 grid-cols-2 p-4">
            {recipes.splice(-4).map((recipe, index) => (
              <Card
                key={index}
                name={recipe.name}
                image_url={recipe.img_url}
                time={recipe.time}
                id={recipe._id}
              />
            ))}
          </div>
          <Button link="/recettes" text="voir toutes les recettes" />
        </div>
        <motion.div
          className="relative w-full"
          whileInView={() => {
            setIsInView(true);
            return {};
          }}
        >
          <motion.div
            className="w-44 h-44 absolute top-1/3 -left-20"
            initial={{ x: "-100vw" }}
            animate={
              isInView && {
                x: 0,
                transition: { duration: 1, type: "spring", stiffness: 50 },
              }
            }
          >
            <Image
              src="/img/pngegg.png"
              layout="responsive"
              objectFit="cover"
              width="100%"
              alt="tomate"
              height="100%"
            />
          </motion.div>
          <motion.div
            className="w-44 h-44 absolute top-1/3 -right-20"
            initial={{ x: "100vw" }}
            animate={
              isInView && {
                x: 0,
                transition: { duration: 1, type: "spring", stiffness: 50 },
              }
            }
          >
            <Image
              src="/img/banane.png"
              layout="responsive"
              objectFit="contain"
              width="100%"
              height="100%"
              alt="banane"
            />
          </motion.div>
          <div className="text-center mx-auto leading-loose w-3/5">
            <h1 className="text-3xl lg:text-5xl lg:p-8 p-4">
              Fruits et légumes du mois.
            </h1>
            <p className="">
              Manger de saison, c’est essentiel, c’est pourquoi les recettes
              peuvent être classées selon la couleur des feuilles dans les
              arbres !
              <br />
              Vous pouvez aussi cliquer sur le bouton ci-dessous et retrouver
              les fruits et légumes du mois présent.
            </p>
          </div>

          <Button link="http://twitter.com" text="Fruits et légumes du mois" />
        </motion.div>
      </div>
    </div>
  );
}
