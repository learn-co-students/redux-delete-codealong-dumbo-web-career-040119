export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: state.todos.concat(action.payload.text) };
    break;

    case 'DELETE_TODO':
      return {todos: state.todos.filter(todo => todo !== action.payload) }
    break;

    default:
      return state;
  }
}
