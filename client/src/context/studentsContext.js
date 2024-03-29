import React, { useContext, useReducer } from "react";

// StudentsContext
const StudentsContext = React.createContext();

// StudentsProvider => distributor
const StudentsProvider = ({ children }) => {
  const handleDeleteStudent = (data, id) => {
    return data.filter((student) => {
      return student.id !== Number(id);
    });
  };

  const handleUpdateStudent = (students, data) => {
    const updatedStudents = students.map((student) => {
      if (student.id === data.id) {
        return data;
      }
      return student;
    });

    return updatedStudents;
  };

  // initialStudentsState
  const initialStudentsState = {
    loading: false,
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

      case "ADD_STUDENT":
        return {
          ...state,
          loading: false,
          students: [...state.students, action.payload],
          error: "",
        };

      case "UPDATE_STUDENT":
        return {
          ...state,
          loading: false,
          students: handleUpdateStudent(state.students, action.payload),
          error: "",
        };

      case "DELETE_STUDENT":
        return {
          ...state,
          loading: false,
          students: handleDeleteStudent(state.students, action.payload),
          error: "",
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
      value={{
        studentsState,
        dispatchForStudents,
      }}
    >
      {children}
    </StudentsContext.Provider>
  );
};

// useGlobalStudentsContext => can be accessed globally
const useGlobalStudentsContext = () => {
  return useContext(StudentsContext);
};

export { StudentsProvider, useGlobalStudentsContext };
