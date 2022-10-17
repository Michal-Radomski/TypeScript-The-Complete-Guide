import axios from "axios";
import { Dispatch } from "redux";

import { ActionTypes } from "./types";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteToDo;
  payload: number;
}

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = (): ((dispatch: Dispatch) => Promise<void>) => {
  //* Dispatch better than AppDispatch
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);
    // console.log({ response });

    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteToDo,
    payload: id,
  };
};
