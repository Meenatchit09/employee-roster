import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/App.css';

export const Pagination = (props) => {
    const { pages, handleClick, currentPage } = props;
        
    return (
        <div className='search-box'>
            <button onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
            {pages.map(item => <button className={item === currentPage && 'active-button'} key={item} id={item} onClick={(e) => handleClick(e.target.id)}>{item}</button>)}
            <button onClick={() => handleClick(currentPage + 1)} disabled={currentPage === pages.length}>Next</button>
        </div>
    )
}

Pagination.propTypes = {
    pages:PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
}