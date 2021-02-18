import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {

  const [ tasks, setTasks ] = useState ([
    {
        id: 1,
        text: 'Turn off the snow',
        day: 'Feb 5th at 2:30 PM',
        reminder: true,
    },
    {
        id: 2,
        text: 'Turn on the heat',
        day: 'Feb 25th at 2:30 PM',
        reminder: true,
    },
  ])

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
      <Header />
      <AddTask onAdd={addTask} />
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
