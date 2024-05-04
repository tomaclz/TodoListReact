import { Header } from './assets/pages/header';
import { AddTodo } from './assets/pages/todo.jsx';
import { useEffect, useReducer, useState } from 'react';
import { reducer } from './assets/components/reducer.js';
import { Reorder } from "framer-motion"



const ACTIONS = {
  ADD_TODO: 'add-todo',
  UPDATE_TODO: 'update-todo',
  DELETE_TODO: 'delete-todo',
  CANCEL_TODO: 'cancel-todo',
  DONE_TODO: 'done-todo',
  SUPP_DONE: 'supp-done'
};


function App() {
  const [lastTodoId, setLastTodoId] = useState(2); //? J'enregistre le dernier id de todo pour pouvoir incrémenter sans doublons
  const [newTodo, setNewTodo] = useState(false); //? useState qui permet de savoir si on doit afficher le formulaire d'ajout de todo
  const [state, dispatch] = useReducer(reducer, { todos: [
    {id: 1, title: "Faire la vaisselle", data :"Je dois aller faire la vaisselle demain avant 9h", done: false, editing: false, supp: false , searchVisible: true},
    {id: 2, title: "Faire les courses", data :"Je dois aller faire les courses demain avant 9h", done: false, editing: false, supp: false, searchVisible: true},
  ] });
  const [search, setSearch] = useState(""); //? UseState qui permet de stocker la valeur de l'input de recherche
  const [filteredTodos, setFilteredTodos] = useState([]); //? UseState qui permet de stocker les todos filtrés

  useEffect(() => { //? lorsque la valeur de search change, on filtre les todos pour ne garder que ceux qui contiennent la valeur de search
    const filtered = state.todos.filter(todo =>
      todo.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTodos(filtered);
  }, [search, state.todos]);




  
  return (
    <section className="d-flex align-items-center flex-column pt-5 w-100">
      <Header
        onSubmitAdd={() => setNewTodo(true)} //? Utilisation de setNewTodo pour mettre afficher un formulaire d'ajout de todo
        suppDone={() => dispatch({ type: ACTIONS.SUPP_DONE })} //? Dispatch pour supprimer les todos checked
        setSearchTerm={setSearch} //? OnChange de l'input de recherche
      />
      <Reorder.Group 
        as="ul"
        axis='y' 
        values={state.todos} 
        onReorder={(data) => {dispatch({ type: ACTIONS.REORDER_TODOS, payload: data });
        console.log(state.todos)
  }}  className="w-100 d-flex flex-column align-items-center todo-list list-unstyled">
      {filteredTodos.map((todo) => (
        <Reorder.Item key={todo.id} value={todo} className='w-50'>
        <AddTodo //? Je setup AddTodo avec les props nécessaires
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
        </Reorder.Item>
      ))}
      {newTodo && (
        <AddTodo
          editing={true}
          save={(newTodoData) => { //? Lorsque le formulaire d'ajout de todo est soumis, on dispatch une action pour ajouter le todo (pour setup l'id j'utilise le lastTodoId + 1)
            dispatch({ type: ACTIONS.ADD_TODO, payload: { ...newTodoData, id: lastTodoId + 1 } });
            setLastTodoId(lastTodoId + 1);
            setNewTodo(false);
          }}
          cancel={() => setNewTodo(false)}
        />
        
      )}
      
      
      </Reorder.Group>
    </section>
  );
}

export default App;