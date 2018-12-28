import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { caughtError } from '../../actions';
import NotesFilter from '../NotesFilter';
import './NotesList.css';

export class NotesList extends Component {
  constructor () {
    super()
    this.state = {
      notes: [],
    }
  }

  noNotes = () => (
    <section className='nl-list'>
      <h3>You have no notes.</h3>
      <p>Please click the the 'Make Note' or your browser's back button to navigate to the Make Note form.</p>
      <p>The Nordstrom Notes logo will also return you to the Make Note page.</p>
    </section>
  )

  render() {
    const { notes } = this.state;

    return (
      <section className='NotesList'>
        <h2>Notable Notes</h2>
        <NotesFilter />
        {!notes.length ? this.noNotes() : ''}
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  notes: state.notes
})

export const mapDispatchToProps = (dispatch) => ({
  caughtError: (errorMessage) => dispatch(caughtError(errorMessage)),
})

NotesList.propTypes = {
  notes: PropTypes.array,
  caughtError: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesList)