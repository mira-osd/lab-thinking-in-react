import React, {Component } from 'react'


class SearchBar extends Component {
    render() {
        return(
            <div className="searchbar">
                <h2>Search</h2>
                <input className="search" type="search" value={this.props.query} onChange={this.props.handleQuery}/>
                <div className='checkbox'>
                <input type="checkbox" checked={this.props.instockOnly} onChange={this.props.handleStock}/><p>Only show products on stock</p>
                </div>
            </div>
        )
    }
}

export default SearchBar