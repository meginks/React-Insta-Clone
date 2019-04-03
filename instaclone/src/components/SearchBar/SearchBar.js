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

const SearchBar = (props) => {

    return (
        <div>
            <SearchBarForm onKeyDown={props.search}>
            <SearchBarInput type="text" placeholder="search" posts={props.postdata} search={props.search}/> 
            </SearchBarForm>
        </div>
    )
}


export default SearchBar;