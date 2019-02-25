import React from 'react';
import Styled from 'styled-components';

// Styled Components 

const SearchBarForm = Styled.form`
    padding-top: 2.5rem;
`; 

const SearchBarInput = Styled.input`
    padding: 1rem;

`;

// SearchBar Component 

class SearchBar extends React.Component {
    
    render() {
    return (
        <div>
            <SearchBarForm>
            <SearchBarInput type="text" placeholder="search" /> 
            </SearchBarForm>
        </div>
    )
    }
}


export default SearchBar;