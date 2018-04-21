// This file is shared across the demos.

import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import SearchIcon from '@material-ui/icons/Search';
import StarIcon from '@material-ui/icons/Star';
import { Link } from 'react-router-dom';

export const NavList = (
    <div>

        <ListItem component={props => <Link to="/" {...props} />} button>
            <ListItemIcon>
                <SearchIcon />
            </ListItemIcon>
            <ListItemText primary="Pokemons" />
        </ListItem>


        <ListItem component={props => <Link to="/my-pokemon" {...props} />} button>
            <ListItemIcon>
                <StarIcon />
            </ListItemIcon>
            <ListItemText primary="My Pokemon" />
        </ListItem>

    </div>
);