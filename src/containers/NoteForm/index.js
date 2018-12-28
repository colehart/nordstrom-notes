import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import './NoteForm.css';

export class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tag: '',
      text: '',
      isDisabled: true
    }
  }

  handleTextChange = async event => {
    const { value } = event.target;

    await this.setState({ text: value })
    this.toggleSubmit();
  }

  toggleSubmit = async () => {
    const { text } = this.state

    text
      ? await this.setState({ isDisabled: false })
      : await this.setState({ isDisabled: true })
  }

  handleSubmit = async event => {
    event.preventDefault();
  }

  render() {
    const { tag, text, isDisabled } = this.state

    return (
      <section className='NoteForm'>
        <h2>Take Note</h2>
        <form
          className='nf-form'
          onSubmit={this.handleSubmit}
        >
          <TextareaAutosize
            className='nf-note-text'
            value={text}
            onChange={this.handleTextChange}
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
                id='nf-tags'
              >
                <option value='work'>Work</option>
                <option value='personal'>Personal</option>
                <option value='hobby'>Hobby</option>
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