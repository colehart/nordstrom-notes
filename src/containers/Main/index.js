import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Loader } from '../../components/Loader';
import NoteForm from '../../containers/NoteForm';
import { NotesList } from '../../containers/NotesList';
import './Main.css';

export const Main = ({ isLoading, match }) => {
  return (
    <main className='Main'>
      { isLoading ? <Loader /> : '' }
      { match.path === '/'
          ? <NoteForm />
          : <NotesList />
      }
    </main>
  )
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading
})

Main.propTypes = {
  isLoading: PropTypes.bool
}

export default withRouter(connect(mapStateToProps)(Main))
