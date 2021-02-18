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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
