import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import './NoteForm.css';

export const NoteForm = () => {
  return (
    <section className='NoteForm'>
      <h2>Take Note</h2>
      <form className='nf-form'>
        <TextareaAutosize
          className='nf-note-text'
          name='note-text'
          type='text'
          placeholder='Write your thoughts here...'
          aria-label='Write your note here, in 250 characters or less'
          maxLength='250'
          wrap='soft'
          autoresize='true'
          required
          onResize={(e) => {}}
        />
        <div className="nf-button-group">
          <div className="nf-dropdown-group">
            <label for='nf-tags'>Tag:</label>
            <select
              className="nf-dropdown nf-btn"
              id='nf-tags'
            >
              <option value='work'>Work</option>
              <option value='personal'>Personal</option>
              <option value='hobby'>Hobby</option>
            </select>
          </div>
          <button
            className='nf-submit nf-btn'
            type='submit'
          >
            Make Note
          </button>
        </div>
      </form>
    </section>
  )
}