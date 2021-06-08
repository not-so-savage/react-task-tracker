import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <div className='tasks'>
            {tasks.map((task) => (
                <Task key={task.id} id={task.id} text={task.text} date={task.date} reminder={task.reminder} onDelete={onDelete} onToggle={onToggle}/>
            ))}   
        </div>
    )
}

export default Tasks
