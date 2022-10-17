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

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => {
  //* Dispatch better than AppDispatch
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);
    console.log({ response });

    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};
