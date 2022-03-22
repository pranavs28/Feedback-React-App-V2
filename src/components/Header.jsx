import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

function Header({ text, bgColor, textColor }) {

  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor
  }

  return (
    <Link to='/' style={{textDecoration:"none"}}>
    <header style={headerStyles} >
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
    </Link>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0, 0, 0, 0.3)',
    textColor: 'white'

}

Header.propTypes = {
    text: PropTypes.string,
}

export default Header