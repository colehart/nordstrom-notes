import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import nordIcon from '../../assets/images/nordstrom-notes-logo.png'
import './Header.css';

export const Header = () => {
  return (
    <header className='Header'>
      {/*
      <div
        className={ caughtError ? 'h-error' : 'hidden'}
      >
        { caughtError }
      </div>
      */}

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
    </header>
  )
}