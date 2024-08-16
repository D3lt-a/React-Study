import React from 'react'
import './App.css'
import TodoComponent from './components/todocomps'

function App() {
  const [todo, setTodo] = React.useState({
    Title: '',
    Description: ''
  })
  const [todos, setTodos] = React.useState([])

  function handleSubmit(e) {
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
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="relative">
          <input type="text" id="floating_filled" value={todo.Title}
            onChange={(e) => {
              setTodo({ ...todo, Title: e.target.value })
            }}
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Title for your Todo</label>
          <div><br /></div>
          <input type="text" id="floating_filled" value={todo.Description}
            onChange={(e) => {
              setTodo({ ...todo, Description: e.target.value })
            }}
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-2 scale-75 top-24 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Describe your Todo</label>
          <div><br /></div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Set Todo</button>
        </div>

      </form>
      <TodoComponent />
      <div>
        <h2>My Todos</h2>
        {
          todos.map((item, index) => {
            return (
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
