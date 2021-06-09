import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

function Task({ id, text, date, reminder, onDelete, onToggle }) {
    return (
        <div className={`task ${reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(id)}>
            <h3>
                {text} <FaTimes
                    style={{color: 'red', cursor: 'pointer'}}
                    onClick={() => onDelete(id)}
                />
            </h3>
            <p>{date}</p>
        </div>
    )
}

Task.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    reminder: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
}

export default Task
