import { combineReducers } from "redux";
import { AnyAction } from "redux";

import { Todo } from "./actions";
import { ActionTypes } from "./types";

const initialState: Todo[] = [];

export interface StoreState {
  todos: Todo[];
}

const todosReducer = function (state = initialState, action: AnyAction): Todo[] {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};

// CombineReducer
const rootReducer = combineReducers<StoreState>({
  todos: todosReducer,
});

export default rootReducer;
