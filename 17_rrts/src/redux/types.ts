//- Instead of actionTypes
import { AnyAction } from "redux";

import { DeleteTodoAction, FetchTodosAction } from "./actions";

export enum ActionTypes {
  fetchTodos = "fetchTodos",
  deleteToDo = "deleteToDo",
}

//* Below can be: FetchTodosAction | DeleteTodoAction or AnyAction
export type Action = FetchTodosAction | DeleteTodoAction | AnyAction;
