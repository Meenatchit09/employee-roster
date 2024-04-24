import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/App.css';

export const SearchBox = (props) => {
    const { handleSearch } = props;
    const [textVal, setTextVal] = useState('')

    const handleChange = (e) => {
        return setTextVal(e.target.value)
    }
    
    return (
        <div className='search-box'>
            <input aria-label='search box' type='text' value={textVal} onChange={e => handleChange(e)} />
            <button onClick={() => handleSearch(textVal)}>Search</button>
        </div>
    )
}

SearchBox.propTypes = {
    handleSearch:PropTypes.func.isRequired,
}