import React from "react";
import { connect } from "react-redux";

import { Todo, fetchTodos, deleteTodo } from "./redux/actions";
import { StoreState } from "./redux/reducer";

import "./App.scss";

interface AppProps {
  color?: string;
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}
interface AppState {
  counter: number;
  fetching: boolean;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { counter: 0, fetching: false };
  }

  // state = { counter: 0 };
  // componentDidMount(): void {
  //   this.props.fetchTodos();
  // }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ ...this.state, fetching: false });
    }
  }

  onIncrement = (): void => {
    this.setState({ ...this.state, counter: this.state.counter + 1 });
  };
  onDecrement = (): void => {
    this.setState({ ...this.state, counter: this.state.counter - 1 });
  };

  onButtonClick = async (): Promise<void> => {
    await this.setState({ ...this.state, fetching: true });
    await this.props.fetchTodos().then(() => this.setState({ ...this.state, fetching: false }));
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div onClick={() => this.onTodoClick(todo.id)} key={todo.id} style={{ cursor: "pointer" }}>
          {todo.title}
        </div>
      );
    });
  }

  render() {
    // console.log(this.props.todos);
    // console.log(this.state);
    return (
      <React.Fragment>
        <div>
          <button style={{ color: this.props.color }} onClick={this.onIncrement}>
            Increment
          </button>
          <button style={{ color: this.props.color }} onClick={this.onDecrement}>
            Decrement
          </button>
          <br />
          Counter State: {this.state.counter}
        </div>
        <br />
        <hr />
        <div>
          <button onClick={this.onButtonClick}>Fetch</button>
          <h1>Todo List</h1>
          {this.state.fetching ? "Loading" : null}
          {this.renderList()}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos: todos };
};

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(App);

//* Functional Component
// function App(props: AppProps): JSX.Element {
//   const [state, setState] = React.useState<AppState>({ counter: 0 });

//   const onIncrement = (): void => {
//     setState({ counter: state.counter + 1 });
//   };
//   const onDecrement = (): void => {
//     setState({ counter: state.counter - 1 });
//   };

//   return (
//     <div>
//       <button style={{ color: props.color }} onClick={onIncrement}>
//         Increment
//       </button>
//       <button style={{ color: props.color }} onClick={onDecrement}>
//         Decrement
//       </button>
//       <br />
//       Counter State: {state.counter}
//     </div>
//   );
// }
