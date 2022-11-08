import React, { useState, useEffect } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  return (
    <div className="accordion my-5">
      <div className="">
        <div
          className="flex flox-row justify-between text-xl uppercase cursor-pointer text-blue-800"
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <div>{title}</div>
          <div
            className={`duration-300 ease-in-out ${
              isActive ? "rotate-45" : ""
            } `}
          >
            +
          </div>
        </div>
        <div className="pl-2">
          {isActive && (
            <div
              className="animate-dropdown"
              onAnimationEnd={() => {
                if (!isActive) setShowDiv(false);
              }}
            >
               {content}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
