import { useState, useContext } from "react"

export default function AspectMark({ aspect, id, onSelect }) {

  const handleSelect = (e) => {
    onSelect({ aspect, id, value: parseInt(e.target.value)})
  };

  return (
    <div className="aspect-mark-container relative flex gap-x-5">
      <select
        onClick={handleSelect}
        name="aspect-mark"
        id="aspect-mark"
        label="score"
        className="bg-white border-2 rounded-md w-16 md:w-20 lg:w-40 p-2 focus:outline-gray-400">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}