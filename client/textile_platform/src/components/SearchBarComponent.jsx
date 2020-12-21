import React from 'react'
import { useHistory } from 'react-router-dom';
import {Button, TextField} from '@material-ui/core/';


const SearchBar = ({ searchQuery, setSearchQuery, searchOffers }) => {

    const history = useHistory();

    const onSubmit = (e) => {
        history.push(`?search=${searchQuery}`);
        e.preventDefault();
        searchOffers();
    };
        return (
            <form
                action="/"
                method="get"
                autoComplete="off"
                onSubmit={onSubmit}
            >
                <TextField type="text" 
                            value={searchQuery}
                            onInput={(e) => setSearchQuery(e.target.value)} 
                            label="Search for an offer" 
                            name="search"
                            />

                <Button type="submit"
                        variant="contained"
                        color="inherit"
                        type="submit">Search</Button>

            </form>
        );
};

export default SearchBar;