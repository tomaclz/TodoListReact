import { Header } from './assets/pages/header';
import { AddTodo } from './assets/pages/todo.jsx';
import { useEffect, useReducer, useState } from 'react';
import { reducer } from './assets/components/reducer.js';



const ACTIONS = {
  ADD_TODO: 'add-todo',
  UPDATE_TODO: 'update-todo',
  DELETE_TODO: 'delete-todo',
  CANCEL_TODO: 'cancel-todo',
  DONE_TODO: 'done-todo',
  SUPP_DONE: 'supp-done'
};


function App() {
  const [lastTodoId, setLastTodoId] = useState(2);
  const [newTodo, setNewTodo] = useState(false); // Ajout de newTodo dans l'état local
  const [state, dispatch] = useReducer(reducer, { todos: [
    {id: 1, title: "Faire la vaisselle", data :"Je dois aller faire la vaisselle demain avant 9h", done: false, editing: false, supp: false , searchVisible: true},
    {id: 2, title: "Faire les courses", data :"Je dois aller faire les courses demain avant 9h", done: false, editing: false, supp: false, searchVisible: true},
  ] });
  const [search, setSearch] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filtered = state.todos.filter(todo =>
      todo.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTodos(filtered);
  }, [search, state.todos]);

  return (
    <section className="d-flex align-items-center flex-column pt-5 w-100">
      <Header
        onSubmitAdd={() => setNewTodo(true)} // Utilisation de setNewTodo pour mettre à jour newTodo
        suppDone={() => dispatch({ type: ACTIONS.SUPP_DONE })}
        setSearchTerm={setSearch}
      />
      {filteredTodos.map((todo) => (
        <AddTodo
          key={todo.id}
          title={todo.title}
          data={todo.data}
          isDone={todo.done}
          editing={todo.editing}
          id={todo.id}
          save={(newTodoData) => dispatch({ type: ACTIONS.UPDATE_TODO, payload: newTodoData })}
          deleteTodo={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}
          editTodo={() => dispatch({ type: ACTIONS.UPDATE_TODO, payload: { id: todo.id, editing: true } })}
          doneTodo={() => dispatch({ type: ACTIONS.DONE_TODO, payload: { id: todo.id } })}
          cancel={() => dispatch({ type: ACTIONS.UPDATE_TODO, payload: { id: todo.id, editing: false } })}
        />
      ))}
      {newTodo && (
        <AddTodo
          editing={true}
          save={(newTodoData) => {
            dispatch({ type: ACTIONS.ADD_TODO, payload: { ...newTodoData, id: lastTodoId + 1 } });
            setLastTodoId(lastTodoId + 1);
            setNewTodo(false);
          }}
          cancel={() => setNewTodo(false)}
        />
      )}
    </section>
  );
}

export default App;