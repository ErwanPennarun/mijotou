import React, { useState } from "react";

const Addrecipe = () => {
  const [ingCounter, setIngCounter] = useState(1);
  const [stepCounter, setStepCounter] = useState(2);
  const [regimeCounter, setRegimeCounter] = useState(1);
  const [seasonCounter, setSeasonCounter] = useState(1);

  const handleIng = (e) => {
    e.preventDefault();
    setIngCounter(ingCounter + 1);
  };

  const handleSteps = (e) => {
    e.preventDefault();
    setStepCounter(stepCounter + 1);
  };

  const handleRegime = (e) => {
    e.preventDefault();
    setRegimeCounter(regimeCounter + 1);
  };

  const handleSeason = (e) => {
    e.preventDefault();
    setSeasonCounter(seasonCounter + 1);
  };

  return (
    <>
      <form
        action="https://mijotou-api.herokuapp.com/recettes"
        method="POST"
        className="flex flex-col gap-4 w-11/12 mx-auto overflow-x-hidden"
      >
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="author" placeholder="author" />
        <input type="text" name="source_url" placeholder="source_url" />
        <input type="text" name="img_url" placeholder="img_url" />
        <input type="text" name="servings" placeholder="servings" />
        <input type="text" name="time" placeholder="time" />

        <input type="text" name="category[0]" placeholder="catégorie" />
        <div>
          <input type="text" name="regimes[0]" placeholder="regime" />
          <button onClick={handleRegime}>+</button>
          {Array.from(Array(regimeCounter)).map((c, index) => {
            return (
              <input
                key={index}
                type="text"
                name={`regimes[${index + 1}]`}
                placeholder={`regime ${index + 1}`}
              />
            );
          })}
        </div>
        <div>
          <input type="text" name="season[0]" placeholder="season" />
          <button onClick={handleSeason}>+</button>
          {Array.from(Array(seasonCounter)).map((c, index) => {
            return (
              <input
                key={index}
                type="text"
                name={`season[${index + 1}]`}
                placeholder={`season ${index + 1}`}
              />
            );
          })}
        </div>
        <div>
          {Array.from(Array(ingCounter)).map((c, index) => {
            return (
              <div key={index}>
                <input
                  key={index}
                  type="text"
                  name={`ingredients[${index + 1}][quantity]`}
                  placeholder="quantity"
                />
                <input
                  type="text"
                  name={`ingredients[${index + 1}][unit]`}
                  placeholder="unit"
                />
                <input
                  type="text"
                  name={`ingredients[${index + 1}][ingredient]`}
                  placeholder="ingredient"
                />
              </div>
            );
          })}
          <button onClick={handleIng}>+</button>
        </div>

        {Array.from(Array(stepCounter)).map((c, index) => {
          return (
            <input
              key={index}
              type="text"
              name={`steps[${index + 1}]`}
              placeholder={`étape ${index + 1}`}
            />
          );
        })}
        <button onClick={handleSteps}>+</button>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Addrecipe;
