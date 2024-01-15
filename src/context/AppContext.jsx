import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const filterFromLocal = JSON.parse(
  sessionStorage.getItem("filteredLayouts") || "[]"
);
const baseFromLocal = JSON.parse(sessionStorage.getItem("base") || "[]");
const thfromLocal = sessionStorage.getItem("selectedThValue") || "";
const typeFromLocal = sessionStorage.getItem("selectedType") || "";
const clickedIndexFromLocal = sessionStorage.getItem("clickedIndex") || "";

export const AppProvider = ({ children }) => {
  const [selectedThValue, setSelectedThValue] = useState(thfromLocal);
  const [selectedType, setSelectedType] = useState(typeFromLocal);
  const [filteredLayouts, setFilteredLayouts] = useState(filterFromLocal);
  const [base, setBase] = useState(baseFromLocal);
  const [isActive, setIsActive] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(clickedIndexFromLocal);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/layout");
        const base = await response.json();
        setBase(base);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    sessionStorage.setItem("selectedThValue", selectedThValue);
    sessionStorage.setItem("selectedType", selectedType);
    sessionStorage.setItem("filteredLayouts", JSON.stringify(filteredLayouts));
    sessionStorage.setItem("base", JSON.stringify(base));
    sessionStorage.setItem("clickedIndex", clickedIndex);
  }, [selectedThValue, selectedType, clickedIndex]);

  const handleThValueFilter = (value) => {
    setIsActive(false);
    setSelectedThValue(value);
    const result = base.filter(
      (layout) => layout.category === value && layout.type === selectedType
      );
      const newFiltered = [...result];
      setFilteredLayouts(newFiltered);
      if(selectedType === "all"){
        handleTypeFilter("all")  
      }
  };

  const handleTypeFilter = (type) => {
    setSelectedType(type);
    if (type !== "all") {
      setIsActive(false);
      const result = base.filter(
        (layout) => layout.category === selectedThValue && layout.type === type
      );
      const newFiltered = [...result];
      setFilteredLayouts(newFiltered);
    }
    if (type === "all") {
      setIsActive(true);
      const result = base.filter(
        (layout) => layout.category === selectedThValue && layout.img
      );
      const newFiltered = [...result];
      setFilteredLayouts(newFiltered);
    }
  };

  useEffect(() => {
    handleTypeFilter("all");
  }, [selectedThValue]);

  const contextValue = {
    selectedThValue,
    setSelectedThValue,
    filteredLayouts,
    setFilteredLayouts,
    selectedType,
    setSelectedType,
    isActive,
    setIsActive,
    clickedIndex,
    setClickedIndex,
    handleThValueFilter,
    handleTypeFilter,
    base,
    isLoading,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
export default AppProvider;
