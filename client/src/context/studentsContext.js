import React, { useContext, useReducer } from "react";

// StudentsContext
const StudentsContext = React.createContext();

// StudentsProvider
const StudentsProvider = ({ children }) => {
  // initialStudentsState
  const initialStudentsState = {
    loading: true,
    students: [],
    error: "",
  };

  //   studentsReducer
  const studentsReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_REQUEST":
        return {
          ...state,
          loading: true,
          students: [],
          error: "",
        };

      case "FETCH_SUCCESS":
        return {
          ...state,
          loading: false,
          students: action.payload,
          error: "",
        };

      case "FETCH_FAILURE":
        return {
          ...state,
          loading: false,
          students: [],
          error: action.payload,
        };

      default:
        return state;
    }
  };

  //   useReducer
  const [studentsState, dispatchForStudents] = useReducer(
    studentsReducer,
    initialStudentsState
  );

  return (
    <StudentsContext.Provider
      values={{
        studentsState,
        dispatchForStudents,
      }}
    >
      {children}
    </StudentsContext.Provider>
  );
};

// useGloablStudentsContext => can be accessed globally
const useGlobalStudentsContext = () => {
  return useContext(StudentsContext);
};

export { StudentsProvider, useGlobalStudentsContext };