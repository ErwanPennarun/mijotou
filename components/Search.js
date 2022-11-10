import React, { useState, useRef } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export const getStaticProps = async () => {
  const res = await fetch(`https://mijotou-api.herokuapp.com/recettes`);
  const data = await res.json();

  return {
    props: { recipes: data },
  };
};

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchClick, setSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [focus, setFocus] = useState(false);
  const inputRef = useRef(null);

  async function handleSearch(e) {
    e.preventDefault();

    const value = inputRef.current.value;
    setQuery(value);
    if (value.length > 2) {
      const res = await fetch(
        `https://mijotou-api.herokuapp.com/recettes/search/${value}`
      );
      const dataSearched = await res.json();
      setResults(dataSearched);
      console.log(results);
    } else {
      setResults([]);
    }
  }

  return (
    <>
      <div className="relative ">
        <form className="ml-4 w-full">
          <input
            className={`border-b border-main-blue bg-transparent relative focus:outline-0  ${
              searchClick
                ? "w-[100vw] translate-y-[5vh] -translate-x-28 duration-300 pl-4"
                : "lg:w-full w-0 translate-y-0 translate-x-0 duration-300"
            }`}
            ref={inputRef}
            onChange={handleSearch}
            onBlur={() => setFocus(false)}
            required
            placeholder="Rechercher une recette, un ingrédient..."
            name={query}
            type="search"
          />
          <MagnifyingGlassIcon
            className="w-6 absolute z-40 -right-4 top-0 text-black"
            onClick={() => {
              setSearch(!searchClick);
            }}
          />

          <div className="relative">
            {results.length > 0 && (
              <div className="bg-white text-black  translate-y-[5vh]  max-lg:-left-28 lg:-translate-y-6 lg:translate-x-0 lg:rounded-b-3xl absolute z-40 lg:top-6 border-b w-screen lg:border-r lg:border-l border-black lg:w-full flex flex-col drop-shadow">
                <ul className="m-0 pt-4">
                  {results.map((value, key) => {
                    return (
                      <a key={key} href={`/recettes/${value._id}`}>
                        <li className="list-none w-full py-2 text-black flex flex-row items-center hover:bg-gray-400 pl-4 z-40">
                          <Image
                            src={value.img_url}
                            width="100%"
                            height="50%"
                            objectFit="cover"
                          />{" "}
                          <span className="pl-2">{value.name}</span>
                        </li>
                      </a>
                    );
                  })}{" "}
                </ul>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
