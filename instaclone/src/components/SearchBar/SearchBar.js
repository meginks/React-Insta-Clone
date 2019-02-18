import React from 'react';
import './searchbar.css';

class SearchBar extends React.Component {
    
    render() {
    return (
        <div>
            <form className="searchbar">
            <input type="text" placeholder="search" /> 
            </form>
        </div>
    )
    }
}


export default SearchBar;