import React from 'react'
import { useHistory } from 'react-router-dom';
import {Button, TextField} from '@material-ui/core/';


const SearchBar = ({ searchQuery, setSearchQuery }) => {

    const history = useHistory();

    const onSubmit = (e) => {
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
    };
        return (
            <form
                action="/"
                method="get"
                autoComplete="off"
                onSubmit={onSubmit}
            >
                {/* <label htmlFor="header-search">
                    <span className="visually-hidden">
                        Search blog posts
                    </span>
                </label> */}
                <TextField type="text" 
                            value={searchQuery}
                            onInput={(e) => setSearchQuery(e.target.value)} 
                            label="Search for an offer" 
                            name="search"/>

                <Button type="submit"
                        variant="contained"
                        color="inherit"
                        type="submit">Search</Button>

            </form>
        );
};

export default SearchBar;