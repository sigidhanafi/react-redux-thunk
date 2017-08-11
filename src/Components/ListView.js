import React from 'react'
import { connect } from 'react-redux'

import { fetchGenre } from '../Actions/Genre'

class ListView extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      genre: props.genre,
      fetching: false
    }
  }

  componentWillReceiveProps (newProps) {
    const { genre } = newProps
    const { fetching } = genre
    if (fetching !== this.state.fetching) {
      this.setState({
        fetching,
        genre: genre.data
      })
    }
  }

  componentDidMount () {
    this.props.fetchGenre()
  }

  renderGenre (genre) {
    return (<a href='#' className='list-group-item' key={genre.id}>{genre.name}</a>)
  }

  loadMore = (event) => {
    event.preventDefault()
    this.props.fetchGenre()
  }

  render () {
    const { genre, fetching } = this.state
    if (fetching) {
      return <div>loading...</div>
    }
    return (
      <div>
        <div className='page-header'>
          <h4>Movie Genre <small>Filter movie by genre</small></h4>
        </div>
        <ul className='list-group'>
          { (genre && Array.isArray(genre))
            ? genre.map((genre) => this.renderGenre(genre))
            : null
          }
          <a href='#' className='list-group-item' onClick={(e) => this.loadMore(e)}>Refresh</a>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    genre: state.genre
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGenre: () => dispatch(fetchGenre())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView)
