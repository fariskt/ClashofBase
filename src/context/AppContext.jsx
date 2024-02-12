import { createContext, useEffect, useReducer } from "react";

export const AppContext = createContext();

 const initialState = {
  selectedThValue: sessionStorage.getItem("selectedThValue") || "",
  selectedType: sessionStorage.getItem("selectedType") || "",
  filteredLayouts: JSON.parse(
    sessionStorage.getItem("filteredLayouts") || "[]"
  ),
  base: JSON.parse(sessionStorage.getItem("base") || "[]"),
  isActive: false,
  clickedIndex: sessionStorage.getItem("clickedIndex") || "",
  isLoading: true,
};

 const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SELECTED_TH_VALUE":
      return { ...state, selectedThValue: action.payload, isActive: false };
    case "SET_SELECTED_TYPE":
      return { ...state, selectedType: action.payload };
    case "SET_FILTERED_LAYOUTS":
      return { ...state, filteredLayouts: action.payload };
    case "SET_BASE":
      return { ...state, base: action.payload };
    case "SET_IS_ACTIVE":
      return { ...state, isActive: action.payload };
    case "SET_CLICKED_INDEX":
      return { ...state, clickedIndex: action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "SET_IS_LOADING", payload: true });
        const response = await fetch(
          "https://clashof-base-api.vercel.app/api/layout"
        );
        const base = await response.json();
        dispatch({ type: "SET_BASE", payload: base });
        setTimeout(()=> {
          dispatch({ type: "SET_IS_LOADING", payload: false });
        },3000)
      } catch (error) {
        console.error("Error fetching data:", error);
        dispatch({ type: "SET_IS_LOADING", payload: false });
      }
    };
  
    fetchData();
  }, []);
  

  useEffect(() => {
    sessionStorage.setItem("selectedThValue", state.selectedThValue);
    sessionStorage.setItem("selectedType", state.selectedType);
    sessionStorage.setItem(
      "filteredLayouts",
      JSON.stringify(state.filteredLayouts)
    );
    sessionStorage.setItem("base", JSON.stringify(state.base));
    sessionStorage.setItem("clickedIndex", state.clickedIndex);
  }, [state.selectedThValue, state.selectedType, state.clickedIndex]);

  const handleThValueFilter = (value) => {
    dispatch({ type: "SET_SELECTED_TH_VALUE", payload: value });
      const result = state.base.filter(
        (layout) =>
          layout.category === value && layout.type === state.selectedType
      );
      dispatch({ type: "SET_FILTERED_LAYOUTS", payload: result });
      if (state.selectedType === "all") {
      handleTypeFilter("all");
    }
  };


  const handleTypeFilter = (type) => {
    dispatch({ type: "SET_SELECTED_TYPE", payload: type });
    if (type !== "all") {
      dispatch({ type: "SET_IS_ACTIVE", payload: false });
      const result = state.base.filter(
        (layout) =>
          layout.category === state.selectedThValue && layout.type === type
      );
      dispatch({ type: "SET_FILTERED_LAYOUTS", payload: result });
    }
    else if (type === "all") {
      dispatch({ type: "SET_IS_ACTIVE", payload: true });
      const result = state.base.filter(
        (layout) => layout.category === state.selectedThValue && layout.img
      );
      dispatch({ type: "SET_FILTERED_LAYOUTS", payload: result });
    }
  };

  useEffect(() => {
    if (state.selectedThValue) {
      handleTypeFilter("all");
    }
    dispatch({ type: "SET_IS_LOADING", payload: true });
    window.scrollTo(0, 0);
    setTimeout(() => {
      dispatch({ type: "SET_IS_LOADING", payload: false });
    }, 1000);
  }, [state.selectedThValue]);

  const contextValue = {
    ...state,
    handleThValueFilter,
    handleTypeFilter,
  };

  return (
    <AppContext.Provider value={{ state, dispatch, ...contextValue }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
