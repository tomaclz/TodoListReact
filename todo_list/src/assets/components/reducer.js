const ACTIONS = {
    ADD_TODO: 'add-todo',
    UPDATE_TODO: 'update-todo',
    DELETE_TODO: 'delete-todo',
    CANCEL_TODO: 'cancel-todo',
    DONE_TODO: 'done-todo',
    SUPP_DONE: 'supp-done'
  };
  


export function reducer(state, action) {
    
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id: action.payload.id,
              title: action.payload.title,
              data: action.payload.data,
              done: false,
              editing: true,
              searchVisible: true
            }
          ]
          
        };
      case ACTIONS.UPDATE_TODO:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload.id ? { ...todo, ...action.payload, editing: !todo.editing } : todo
          )
        };
      case ACTIONS.DELETE_TODO:
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload.id)
        };
      case ACTIONS.CANCEL_TODO:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload.id ? { ...todo, editing: !todo.editing } : todo
          )
        };
      case ACTIONS.DONE_TODO:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
          )
        };
      case ACTIONS.SUPP_DONE:
        return {
          ...state,
          todos: state.todos.filter((todo) => !todo.done)
        };
      default:
        return state;
    }
  }