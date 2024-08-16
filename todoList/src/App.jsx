import React from 'react'
import './App.css'
import TodoComponent from './components/todocomps'

function App() {
  const [todo, setTodo] = React.useState({
    Title: '',
    Description: ''
  })
  const [todos, setTodos] = React.useState([])

  function handleSubmit(e){
    e.preventDefault()
    setTodos([...todos, todo])
    setTodo({
      Title: '',
      Description: ''
    })
  }

  return (

    <>
      <div>
        <h1>My Todo List</h1>
      </div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" name="title" id="" value={todo.Title} 
          onChange={(e) => {
            setTodo({...todo, Title: e.target.value})
          }} placeholder='Title for your Todo' />

          <input type="text" name="description" id="" value={todo.Description}
          onChange={(e) => {
            setTodo({...todo, Description: e.target.value})
          }}
          placeholder='Describe your Todo' />
          <button type="submit">Set Todo</button>
        </form>
      </div>
      <div>
        <h2>My Todos</h2>
        {
          todos.map((item,index) => {
            return(
              <TodoComponent
                key={index}
                Title={item.Title}
                Description={item.Description}
              />
            )
          })
        }
      </div>
    </>
  )
}

export default App
