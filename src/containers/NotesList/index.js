import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './NotesList.css';

export class NotesList extends Component {
  constructor () {
    super()
    this.state = {
      notes: [],
      filter: '',
      oldNoteCount: 0
    }
  }

  handleInputChange = async event => {
    const { name, value } = event.target;

    await this.setState({ [name]: value })
  }

  render() {
    const { notes } = this.state;

    return (
      <section className='NotesList'>
        <h2>Notable Notes</h2>
        <form className='nl-filter-group'>
          <div
            className="nl-dropdown-group"
            name='filter-type'
            onChange={this.handleInputChange}
          >
            <input
              type='radio'
              name='filter'
              id='date'
              lable='Date'
              onChange={this.setFilter}
            />
            <input
              type='radio'
              name='filter'
              id='tag'
              lable='Tag'
              onChange={this.setFilter}
            />
          </div>
          <input
            className="nl-filter-params"
            name="filter-params"
          />
        </form>
        <section className='nl-list'>
          { /* add table here */ }
        </section>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  notes: state.notes
})

NotesList.propTypes = {
  notes: PropTypes.array
}

export default connect(mapStateToProps)(NotesList)