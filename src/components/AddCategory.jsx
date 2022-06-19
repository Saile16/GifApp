import { useState } from "react";

const AddCategory = ({ onNewCategory }) => {
  // const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) {
      return console.log("ashjkdasjkh");
    }
    onNewCategory(inputValue.trim());
    // setCategories([...categories, inputValue]);
    //de esta manera podriamos hacer si no pasamos como prop el categories
    //usando el callback de setCategories
    //const AddCategory = ({ setCategories }) => {
    // setCategories((categories) => [...categories, inputValue]);
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

export default AddCategory;
