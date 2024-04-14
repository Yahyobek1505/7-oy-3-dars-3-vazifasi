import { composeWithDevTools } from "@redux-devtools/extension";
import { combineReducers, createStore } from "redux";
import { todoReducer } from "./todosReducer";
const rootReducer = combineReducers({
  todos: todoReducer,
});
export const store = createStore(rootReducer, composeWithDevTools());
