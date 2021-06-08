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
    {
      id: 2,
      text: 'Go to the gym',
      date: 'June 29th at 5:00pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Win the lottery',
      date: 'July 5th at 8:00pm',
      reminder: false,
    }
])

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header title="Task Tracker"/>
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No tasks to show')}
      
    </div>
  );
}

export default App;
