import {Header} from './assets/pages/header'
import {AddTodo} from './assets/pages/todo.jsx'
import {useEffect, useState} from 'react'
import {toggle} from './assets/components/toggle.js'



function App() {
  const [newTodo, setNewTodo] = toggle(false) //? permet de savoir si il faut rajouter une nouvelle todo ou non
  const [todos, setTodos] = useState([ //? Tableau des todo, avec leurs etats
    {id: 1, title: "Faire la vaisselle", data :"Je dois aller faire la vaisselle demain avant 9h", done: false, editing: false, supp: false , searchVisible: true},
    {id: 2, title: "Faire les courses", data :"Je dois aller faire les courses demain avant 9h", done: false, editing: false, supp: false, searchVisible: true},
  ]);
  const [search, setSearch] = useState("") //? Permet de filtrer les todo en fonction de la recherche




  const saveTodo = (newTodoData) => {//? enregistrement d'une nouvelle todo.
    if (newTodoData.id !== undefined) {
      setTodos(todos.map((todo) => todo.id === newTodoData.id ? {...todo, ...newTodoData, editing: !todo.editing, supp: false} : todo));
    } else {
      const newTodo = {
        id: todos.length + 1,
        title: newTodoData.title,
        data: newTodoData.data,
        done: false,
        editing: false,
        supp: false,
        searchVisible: true
    }
    setNewTodo(false);
    setTodos([...todos, newTodo]);
  }
    
  };


  function cancel (id) { //? verification s'il sagit d'un cancel de todo ou d'un cancel de l'ajout d'une todo (grace à l'id)
    if (id !== undefined) {
      setTodos(todos.map((todo) => todo.id === id ? {...todo, editing: !todo.editing} : todo));
    } else {
      setNewTodo(false);
    }
    }


  const deleteTodo = (id) => { //? Suppression (visuelement) d'une todo
    setTodos(todos.map((todo) => todo.id === id ? {...todo, supp: !todo.supp} : todo));
  }

  const editTodo = (id) => { //? Edition d'une todo
    setTodos(todos.map((todo) => todo.id === id ? {...todo, editing: !todo.editing} : todo));
  }

  const doneTodo = (id) => { //? Changement de l'état de la todo (done ou pas)
    setTodos(todos.map((todo) => todo.id === id ? {...todo, done: !todo.done} : todo));
  }

  const suppDone = () => { //? Suppression de toute les todos check (done)
    setTodos(todos.map((todo) => todo.done === true ? {...todo, supp: !todo.supp, done: false} : todo));
  }


  useEffect(() => { //? a chaque fois que la recherche change, on filtre les todo en fonction de la recherche
    setTodos(todos.map((todo) => todo.title.toLowerCase().includes(search.toLowerCase()) ? {...todo, searchVisible: true} : {...todo, searchVisible: false}));
  }, [search]);


  return <section  className ="d-flex align-items-center flex-column pt-5 w-100">
    {!newTodo && <Header 
      onSubmitAdd={setNewTodo} 
      suppDone = {suppDone} 
      setSearchTerm = {setSearch} />}
    {newTodo && <Header/>}
    {todos.filter(todo => !todo.supp && todo.searchVisible).map((todo) => (
      <AddTodo 
        key = {todo.id} 
        title = {todo.title} 
        data = {todo.data} 
        isDone = {todo.done} 
        editing = {todo.editing} 
        supp = {todo.supp} 
        id = {todo.id} 
        save = {saveTodo} 
        deleteTodo = {deleteTodo} 
        editTodo = {editTodo} 
        doneTodo = {doneTodo}
        cancel = {cancel}
      />
    ))}
    {newTodo && <AddTodo 
      editing="true" 
      save = {saveTodo} 
      cancel = {cancel}
      />}
  </section>
  
  
  
}

export default App
