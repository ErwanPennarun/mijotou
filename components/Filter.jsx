import { useState, useEffect } from "react";
import Accordion from "./Accordion";

const Filter = ({
  recipes,
  setRecipeFilter,
  activeFilter,
  setActiveFilter,
}) => {
  const [category, setCategory] = useState(null);
  const [regimes, setRegime] = useState([
    { id: 1, checked: false, label: "Végé", name: "Végétarien" },
    { id: 2, checked: false, label: "Vegan", name: "Vegan" },
    { id: 3, checked: false, label: "Sans lactose", name: "Sans lactose" },
  ]);

  const [seasons, setSeason] = useState([
    {
      id: 4,
      checked: false,
      label: "Printemps",
    },
    { id: 5, checked: false, label: "Eté" },
    {
      id: 6,
      checked: false,
      label: "Automne",
    },
    {
      id: 7,
      checked: false,
      label: "Hiver",
    },
  ]);

  const categories = ["Salé", "Sucré", "Boulangerie", "Sauces"];

  const handleCategory = (e) => {
    const value = e.target.id;
    if (!value || activeFilter === value) {
      setCategory(null);
      setActiveFilter(null);
    } else if (value) {
      setActiveFilter(value);
      setCategory(value);
    }
  };

  const handleChangeRegime = (id) => {
    const regimeState = regimes;
    const changeCheckedregime = regimeState.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setRegime(changeCheckedregime);
  };

  const handleChangeSeason = (id) => {
    const seasonState = seasons;
    const changeCheckedSeason = seasonState.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setSeason(changeCheckedSeason);
  };

  const applyFilters = () => {
    let updatedList = recipes;

    if (category) {
      updatedList = updatedList.filter((data) =>
        data.category.includes(category)
      );
      setActiveFilter(category);
    }

    // const regimeChecked = regimes
    //   .filter((item) => item.checked)
    //   .map((item) => item.label);

    // if (regimeChecked.length) {
    //   updatedList = updatedList.filter((el) =>
    //     regimeChecked.every((x) => el.regime.includes(x))
    //   );
    // }

    const seasonsChecked = seasons
      .filter((item) => item.checked)
      .map((item) => item.label);

    if (seasonsChecked.length) {
      updatedList = updatedList.filter((el) =>
        seasonsChecked.every((x) => el.season.includes(x))
      );
    }

    if (!seasonsChecked.length && !category) setRecipeFilter(recipes);
    else setRecipeFilter(updatedList);
  };

  useEffect(() => {
    applyFilters();
  }, [activeFilter, category, regimes, seasons]);

  const categoryFilter = () => {
    return (
      <div className="">
        {categories.map((item, index) => (
          <ul className="ml-2" key={index}>
            <li
              htmlFor={item}
              id={item}
              onClick={handleCategory}
              className={`hover:bg-yellow-400 ${
                activeFilter === item ? "bg-yellow-300" : ""
              }`}
            >
              {item}
            </li>
          </ul>
        ))}
      </div>
    );
  };

  const regimeFilter = () => {
    return (
      <div className="sticky top-0">
        {regimes.map((regime, index) => (
          <ul className="ml-2" key={index}>
            <li>
              <label
                key={regime.id}
                htmlFor={regime.label}
                value={regime.label}
                clasName={`relative  p-3 mr-1 mt-1 hover:bg-yellow-400 ${
                  regime.checked ? "bg-yellow-300" : ""
                }`}
              >
                <input
                  type="checkbox"
                  className=" group"
                  checked={regime.checked}
                  value={regime.label}
                  onChange={() => handleChangeRegime(regime.id)}
                />
                <span>{regime.name}</span>
              </label>
            </li>
          </ul>
        ))}
      </div>
    );
  };

  const seasonFilter = () => {
    return (
      <div className="">
        {seasons.map((season, index) => (
          <ul className="ml-2" key={index}>
            <li className="flex ">
              <label
                key={season.id}
                htmlFor={season.label}
                value={season.label}
                className={`hover:bg-yellow-400 w-full relative ${
                  season.checked ? "bg-yellow-300" : ""
                }`}
              >
                <input
                  type="checkbox"
                  className="absolute w-0 h-0"
                  checked={season.checked}
                  id={season.label}
                  value={season.label}
                  onChange={() => handleChangeSeason(season.id)}
                />
                <span>{season.label}</span>
              </label>
            </li>
          </ul>
        ))}
      </div>
    );
  };

  return (
    <>
      <h2 className="text-xl uppercase text-main-blue">Filtrer par :</h2>
      <div className="mr-3">
        <Accordion title="type" content={categoryFilter()} />
      </div>
      <div className="mr-3">
        <Accordion title="régimes" content={regimeFilter()} />
      </div>
      <div className="mr-3">
        <Accordion title="season" content={seasonFilter()} />
      </div>
    </>
  );
};

export default Filter;
