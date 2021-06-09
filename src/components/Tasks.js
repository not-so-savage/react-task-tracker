import Task from './Task'
import PropTypes from 'prop-types'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <div className='tasks'>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    id={task.id}
                    text={task.text}
                    date={task.date}
                    reminder={task.reminder}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}   
        </div>
    )
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
}

export default Tasks
