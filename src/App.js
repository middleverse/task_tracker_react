import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

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

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      { tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
        ) : (
          'No tasks to show'
        )
      }
    </div>
  );
}

export default App;
