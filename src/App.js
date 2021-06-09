import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
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

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleAddTask = () => {
  setShowAddTask(!showAddTask)
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header title="Task Tracker" onToggle={toggleAddTask} showAdd={showAddTask}/>
      {showAddTask ? <AddTask onAdd={addTask} /> : ''}
      {tasks.length > 0 ?
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)
        : ('No tasks to show')}
    </div>
  );
}

export default App;
