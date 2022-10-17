import { combineReducers } from "redux";

import { Todo } from "./actions";
import { Action, ActionTypes } from "./types";

const initialState: Todo[] = [];

export interface StoreState {
  todos: Todo[];
}

const todosReducer = function (state = initialState, action: Action): Todo[] {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteToDo:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

// CombineReducer
const rootReducer = combineReducers<StoreState>({
  todos: todosReducer,
});

export default rootReducer;
