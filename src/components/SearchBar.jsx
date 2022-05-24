import React, { useState } from "react";
import styled from "styled-components";

export default function SearchBar({setQueryResult}) {
    const [searchQuery, setSearchQuery] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        setQueryResult(searchQuery);
        setSearchQuery('')
    }

    return (
        <StyledSearchBar>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Search Location"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </form>
        </StyledSearchBar>
    );
};

const StyledSearchBar = styled.div `
    margin-bottom: 30px;
    input{
        width: 80%;
        height: 40px;
        border-radius: 10px;
        padding-left: 20px;
    }
`;