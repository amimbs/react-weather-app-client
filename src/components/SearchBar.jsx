import React, { useState } from "react";

export default function SearchBar({setQueryResult}) {
    const [searchQuery, setSearchQuery] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        setQueryResult(searchQuery);
        setSearchQuery('')
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Search Location"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </form>
        </div>
    );
};
