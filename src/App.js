import { useState, useEffect } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)
  const [ tasks, setTasks ] = useState ([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks')
    const data = await response.json()
    return data
  }

  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000)
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])

    console.log(task)
  }

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder for task with id
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? 
      {...task, reminder: !task.reminder} : task)
    )
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {/* ternary operator below without an else, if showAddTask, show */}
      { showAddTask && <AddTask onAdd={addTask} /> } 
      { tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        ) : (
          'No tasks to show'
        )
      }
    </div>
  );
}

export default App;
