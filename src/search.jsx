import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Search({ setSearchInput}) {

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value)
    }
    return (
        <div className='search-container'> 
        <h1>Emoji Search</h1>
        <input
        type="text"
        className='search-input'
        onChange={handleSearch}
        />
        <button
        type='submit'
        
        >SEARCH</button>
        </div>

    )
}

Search.propTypes = {
    searchInput: PropTypes.string,
    setSearchInput: PropTypes.func
}
