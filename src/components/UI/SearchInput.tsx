import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React from 'react';

interface SearchInputProps {
    className?: string
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: React.FunctionComponent<SearchInputProps> = (props: SearchInputProps) => {
    return (
        <TextField
            id='search-text'
            label='Search'
            className={props.className}
            value={props.value}
            onChange={props.onChange}
            InputProps={{
                endAdornment: (
                    <InputAdornment position='start'>
                        <IconButton>
                            <Search />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
};
