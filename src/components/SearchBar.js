import React from 'react';

const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = React.useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        onSearch(term);
    }

    return (
        <React.Fragment>
            <form className="ui form" onSubmit={onSubmit}>
                <p>Image Search</p>
                <div className="field">
                    <input type="text" name="first-name" placeholder="Search Car" value={term}
                        onChange={(e) => setTerm(e.target.value)} />
                </div>
            </form>
        </React.Fragment>
    )
};

export default SearchBar;