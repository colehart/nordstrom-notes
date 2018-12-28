import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { caughtError } from '../../actions';
// import { filterNotes } from '../../actions';
import './NotesFilter.css';

export class NotesFilter extends Component {
  constructor () {
    super()
    this.state = {
      filter: '',
      filterParams: '',
      isDisabled: true,
      placeholderText: 'Choose a filter.',
    }
  }

  handleInputChange = async event => {
    const { name, value } = event.target;

    await this.setState({ [name]: value })
    if (name === 'filter') this.toggleParams()
  }

  toggleParams = async () => {
    const { filter } = this.state

    filter
      ? await this.setState({ isDisabled: false })
      : await this.setState({ isDisabled: true })

    this.formatPlaceholder(filter)
  }

  formatPlaceholder = async filter => {
    const dateState = { placeholderText: 'Ex: 12-18-2018' }
    const tagState = { placeholderText: 'Ex: Work, Hobby...' }

    filter === 'date'
      ? await this.setState(dateState)
      : await this.setState(tagState)
  }

  render() {
    const { filter, filterParams, isDisabled, placeholderText } = this.state;

    return (
      <section className='NotesFilter'>
        <form
          className='nl-form'
          // onSubmit={this.props.filterNotes()}
        >
          <div className='nl-filter-by'>
            <label htmlFor='filter-group'>Filter by:</label>
            <div
              className="nl-filter-group"
              id='filter-group'
              name='filter-type'
            >
              <div className='nl-filter-type'>
                <input
                  type='radio'
                  name='filter'
                  value='date'
                  id='date'
                  onChange={this.handleInputChange}
                />
                <label htmlFor="date">Date</label>
              </div>
              <div className='nl-filter-type'>
                <input
                  type='radio'
                  name='filter'
                  value='tag'
                  id='tag'
                  onChange={this.handleInputChange}
                />
                <label htmlFor='tag'>Tag</label>
              </div>
            </div>
          </div>
          <div className='nl-filter-params-group'>
            <label htmlFor='filter-params'>Search:</label>
            <input
              className='nl-filter-params'
              id='filter-params'
              name='filterParams'
              value={filterParams}
              maxLength={ filter === 'date' ? '10' : '8' }
              onChange={this.handleInputChange}
              disabled={isDisabled}
              placeholder={placeholderText}
            />
          </div>
        </form>
      </section>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  caughtError: (errorMessage) => dispatch(caughtError(errorMessage)),
  // filterNotes: () => dispatch(filterNotes()),
})

NotesFilter.propTypes = {
  caughtError: PropTypes.func,
  filterNotes: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(NotesFilter)