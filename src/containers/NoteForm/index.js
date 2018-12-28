import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNotes, caughtError, newNoteCount } from '../../actions';
import './NoteForm.css';

export class NoteForm extends Component {
  constructor() {
    super()
    this.state = {
      tag: 'Work',
      text: '',
      isDisabled: true,
      wasSuccessful: false,
    }
  }

  handleInputChange = async event => {
    const { name, value } = event.target;

    await this.setState({ [name]: value })
    if (name === 'text') this.toggleSubmit();
  }

  toggleSubmit = async () => {
    const { text } = this.state

    text
      ? await this.setState({ isDisabled: false })
      : await this.setState({ isDisabled: true })
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { tag, text } = this.state

    try {
      const successState = {
        tag: 'Work',
        text: '',
        isDisabled: true,
        wasSuccessful: true,
      }

      await this.props.addNotes(tag, text)
      await this.props.newNoteCount()
      await this.setState(successState)
      this.resetBanner()
    }
    catch(error) {
      this.props.caughtError(error.message)
    }
  }

  resetBanner = () => {
    setTimeout(() => this.setState({ wasSuccessful: false }), 2000)
  }

  render() {
    const { text, isDisabled, wasSuccessful } = this.state

    return (
      <section className='NoteForm'>
        <div className={ wasSuccessful ? 'nf-success' : 'hidden' }>
          Note successfully added!
        </div>
        <h2>Make Note</h2>
        <form
          className='nf-form'
          onSubmit={this.handleSubmit}
        >
          <TextareaAutosize
            className='nf-note-text'
            name='text'
            value={text}
            onChange={this.handleInputChange}
            placeholder='Write your thoughts here...'
            aria-label='Write your note here, in 250 characters or less'
            maxLength='250'
            wrap='soft'
            required
            onResize={(e) => {}}
          />
          <div className="nf-button-group">
            <div className="nf-dropdown-group">
              <label htmlFor='nf-tags'>Tag:</label>
              <select
                className="nf-dropdown nf-btn"
                name='tag'
                onChange={this.handleInputChange}
                id='nf-tags'
              >
                <option value='Work'>Work</option>
                <option value='Personal'>Personal</option>
                <option value='Hobby'>Hobby</option>
              </select>
            </div>
            <button
              className='nf-submit nf-btn'
              disabled={isDisabled}
              type='submit'
              onClick={this.handleSubmit}
            >
              Make Note
            </button>
          </div>
        </form>
      </section>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addNotes: (tag, text) => dispatch(addNotes(tag, text)),
  caughtError: (errorMessage) => dispatch(caughtError(errorMessage)),
  newNoteCount: () => dispatch(newNoteCount())
})

NoteForm.propTypes = {
  addNotes: PropTypes.func,
  caughtError: PropTypes.func,
  newNoteCount: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(NoteForm)