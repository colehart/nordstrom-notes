import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import moment from 'moment';
import { caughtError } from '../../actions';
import NotesFilter from '../NotesFilter';
import './NotesList.css';

export const NotesList = ({notes, caughtError}) => {
  const noNotes = (
    <div className='nl-no-notes'>
      <h3>You have no notes.</h3>
      <p>Please click the the 'Make Note' or your browser's back button to navigate to the Make Note form.</p>
      <p>The Nordstrom Notes logo will also return you to the Make Note page.</p>
    </div>
  )

  const notesRows = notes.map((note, index) => {

    return (
      <div className={`nl-table-setup nl-row`} key={index}>
        <section className={`nl-row-note`}>
          {note.text}
        </section>
        <section className={`nl-row-tag`}>
          {note.tag}
        </section>
        <section className={`nl-row-date`}>
          {note.date || 'no date'}
        </section>
      </div>
    )
  })

  const noteTable = (
    <div className='nl-table'>
      <article className='nl-table-header nl-table-setup'>
        <div className='nl-header-note'>
          Note
        </div>
        <div className='nl-header-tag'>
          Tag
        </div>
        <div className='nl-header-date'>
          Date
        </div>
      </article>
      <article className='nl-table-rows'>
        { notesRows }
      </article>
    </div>
  )

  return (
    <section className='NotesList'>
      <h2>Notable Notes</h2>
      <NotesFilter />
      <section className='nl-list'>
        { !notes.length ? noNotes : noteTable }
      </section>
    </section>
  )
}

export const mapStateToProps = (state) => ({
  notes: state.notes,
})

export const mapDispatchToProps = (dispatch) => ({
  caughtError: (errorMessage) => dispatch(caughtError(errorMessage)),
})

NotesList.propTypes = {
  notes: PropTypes.array,
  caughtError: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesList)