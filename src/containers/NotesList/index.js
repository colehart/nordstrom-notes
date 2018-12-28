import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
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
    console.log(note)
    return (
      <div className={`nl-row-${index}`} key={index}>
        <section className={`nl-row-note`}>
          {note.text}
        </section>
        <section className={`nl-row-tag`}>
          {note.tag}
        </section>
        <section className={`nl-row-note`}>
          {note.date || null}
        </section>
      </div>
    )
  })

  return (
    <section className='NotesList'>
      <h2>Notable Notes</h2>
      <NotesFilter />
      <section className='nl-list'>
        { !notes.length ? noNotes : '' }
        <div className='nl-table'>
          <article className='nl-table-header'>
            <div className='nl-header-title'>
              Note
            </div>
            <div className='nl-header-title'>
              Tag
            </div>
            <div className='nl-header-title'>
              Date Created
            </div>
          </article>
          <article className='nl-table-rows'>
            { notesRows }
          </article>
        </div>
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