import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Play the Pyramid Stage',
        date: 'June 28th at 4:00pm',
        reminder: false,
    },
])

  return (
    <div className="container">
      <Header title="Task Tracker"/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
