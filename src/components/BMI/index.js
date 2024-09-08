import { useEffect, useState } from "react";

import "./index.css";

const resultBMI = (height, weight) => {
  const heightInMeters = height / 100;
  const bmi = weight / heightInMeters ** 2;
  return bmi.toFixed(2);
};

const BMI = () => {
  const storedHeight = JSON.parse(localStorage.getItem("height"));
  const storedWeight = JSON.parse(localStorage.getItem("weight"));

  const [height, setHeight] = useState(
    storedHeight !== null ? storedHeight : 170
  );

  const [weight, setWeight] = useState(
    storedWeight !== null ? storedWeight : 60
  );

  useEffect(() => {
    localStorage.setItem("height", JSON.stringify(height));
  }, [height]);

  useEffect(() => {
    localStorage.setItem("weight", JSON.stringify(weight));
  }, [weight]);

  const onIncreamentHeight = () => {
    setHeight((prev) => prev + 1);
  };

  const onIncreamentWeight = () => {
    setWeight((prev) => prev + 1);
  };

  const onDecreamentHeight = () => {
    setHeight((prev) => prev - 1);
  };

  const onDecreamentWeight = () => {
    setWeight((prev) => prev - 1);
  };

  return (
    <div className="bg-container">
      <h1 className="heading">BMI CALCULATOR</h1>
      <img
        src="https://assets.ccbp.in/frontend/hooks/bmi-levels-img.png"
        alt="bmi levels"
        className="level-image"
      />
      <div className="calculation-container">
        <div className="details-container">
          <h1>Hight</h1>
          <h1>
            {height}
            <span className="units">cm</span>
          </h1>
          <button
            type="button"
            className="buttons"
            onClick={onIncreamentHeight}
          >
            +
          </button>
          <button
            type="button"
            className="buttons"
            onClick={onDecreamentHeight}
          >
            -
          </button>
        </div>
        <div className="details-container">
          <h1>Width</h1>
          <h1>
            {weight}
            <span className="units">kgs</span>
          </h1>
          <button
            type="button"
            className="buttons"
            onClick={onIncreamentWeight}
          >
            +
          </button>
          <button
            type="button"
            className="buttons"
            onClick={onDecreamentWeight}
          >
            -
          </button>
        </div>
      </div>
      <h1 className="results">
        BMI: <span>{resultBMI(height, weight)}</span>
      </h1>
    </div>
  );
};
export default BMI;
