import React from 'react'
import PropTypes from 'prop-types'

function Task({ task }) {
    return (
        <div className='task'>
            <h3>{task.text}</h3>
            <p>{task.date}</p>
        </div>
    )
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

export default Task
