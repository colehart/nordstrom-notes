import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import nordIcon from '../../assets/images/nordstrom-notes-logo.png'
import './Header.css';

export const Header = ({ caughtError }) => {
  return (
    <header className='Header'>
      <div className={ caughtError ? 'h-error' : 'hidden'}>
        { caughtError }
      </div>
      <Link
        to='/'
        className='h-logo'
        aria-label='Return to the Take Note Form'
      >
        <img
          src={nordIcon}
          alt='The Nordstrom Notes logo'
        />
      </Link>
      <nav className='h-nav-group'>
        <NavLink
          exact to='/'
          className="h-take-note btn"
          aria-label='Click to return to the Take Note form'
        >
          Take Note
        </NavLink>
        <NavLink
          exact to='/notes'
          className="h-notable-notes btn"
          aria-label='Click to view your notable notes'
        >
          Notable Notes
        </NavLink>
      </nav>
    </header>
  )
}

export const mapStateToProps = (state) => ({
  caughtError: state.caughtError
})

Header.propTypes = {
  caughtError: PropTypes.string
}

export default connect(mapStateToProps)(Header)