import React from 'react';
import './Search.css';


const Search = props => {
    
    
    const updateSearch = e =>{
        props.setSearch(e.target.value);
    }
    
    const getSearch = e =>{
        e.preventDefault();
        props.setQuery(props.search);
    }

    return(
        <form onSubmit={getSearch} className="searchForm">
            <input className="searchBar" type="text" value={props.search} onChange={updateSearch} placeholder="Chicken"/>
            <button className="searchButton" type="submit">Search</button>
        </form>
    );
}

export default Search;