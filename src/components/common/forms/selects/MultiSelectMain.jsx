import { useState } from "react";
import MultiSelect from "../../MultiSelect";

const MultiSelectMain = () => {
  const [selectedFruits, setSelectedFruits] = useState([]);
  const fruits = ["Apple", "Banana", "Orange", "Grape", "Mango", "Papaya"];

  const handleSelectFruit = (fruit) => {
    setSelectedFruits([...selectedFruits, fruit]);
  };

  const handleDeselectFruit = (fruit) => {
    setSelectedFruits(selectedFruits.filter((item) => item !== fruit));
  };
  return (
    <>
      <MultiSelect
        options={fruits}
        selectedOptions={selectedFruits}
        onSelect={handleSelectFruit}
        onDeselect={handleDeselectFruit}
        placeholder="Select fruits"
        searchPlaceholder="Search fruits"
      />
    </>
  );
};

export default MultiSelectMain;
