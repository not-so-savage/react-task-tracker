import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onToggle, showAdd }) => {
    return (
        <header>
            <h1>{title}</h1>
            <Button colour={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onToggle}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Header',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onToggle: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
}

export default Header
