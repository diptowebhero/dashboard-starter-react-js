import { useState } from "react";
import MultiSelect from "../../common/MultiSelect";
import Box from "../Box";
import Title from "../Title";

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
    <Box>
      <Title title="Custom Multi Select" />
      <MultiSelect
        options={fruits}
        selectedOptions={selectedFruits}
        onSelect={handleSelectFruit}
        onDeselect={handleDeselectFruit}
        placeholder="Select fruits"
        searchPlaceholder="Search fruits"
      />
    </Box>
  );
};

export default MultiSelectMain;
