import PropTypes from 'prop-types'

const Button = ({ colour, text, onClick }) => {
    return (
        <button onClick={onClick} className='btn' style={{ backgroundColor: colour}}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button
