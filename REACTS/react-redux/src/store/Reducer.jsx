import { combineReducers } from "redux";
import { ADD_PERSON, DELETE_PERSON } from "./ActionTypes";

const defaultState = {
  users: ["Murali", "Krishna", "Ram", "Ravi"],
  persons: [
    {name:"Murali",number:"9234855455",email:"vmurali@gmail.com",bike:"yamaha rx-100"},
    {name:"Ravi",number:"7238923847",email:"ravi@gmail.com",bike:"NS-200"},
    {name:"Sam",number:"2393263444",email:"sam@gmail.com",bike:"Royel-450"}
  ],
  products: [],
  books: [],
};

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADDUSER":
      let newUsers = [...state.users];
      newUsers.push(action.paload);
      return { ...state, users: newUsers };
    case "DELETEUSER":
      let updatedUsers = state.users.filter((user) => user !== action.paload);
      return { ...state, users: updatedUsers };

    default:
      return state;
  }
};

export const personsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      let newPersons = [...state];
      newPersons.push(action.payload);
      return newPersons;
    case DELETE_PERSON:
      return state.filter((person)=> person.email !== action.payload.email)

    default:
      return state.persons;
  }
};

export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const booksReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state.books;
  }
};
export const rootReducer = combineReducers({
  users: usersReducer,
  persons: personsReducer,
  products: productsReducer,
  books: booksReducer,
});