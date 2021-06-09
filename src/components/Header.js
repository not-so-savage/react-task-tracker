import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onToggle, showAdd }) => {
    const location = useLocation()

    return (
        <header>
            <h1>{title}</h1>
            {location.pathname === '/' && (
                <Button
                    colour={showAdd ? 'red' : 'green'}
                    text={showAdd ? 'Close' : 'Add'}
                    onClick={onToggle}
                />
            )}   
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
