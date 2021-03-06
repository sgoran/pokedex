import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import StarIcon from '@material-ui/icons/Star';
import SwipeableDrawer from 'material-ui/SwipeableDrawer';
import List from 'material-ui/List';
import { Link } from 'react-router-dom';
import { NavList } from './Nav';

const classes = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navOpen: false
        }
    }

    toggleDrawer = (open) => () => {
        this.setState({
            navOpen: open,
        });
    };

    render() {
        return (
            <AppBar position="static">
                
                <Toolbar>
                    
                    <IconButton 
                        color="inherit" 
                        aria-label="Menu"
                        onClick={this.toggleDrawer(true)}
                        >
                        <MenuIcon />
                    </IconButton>
                    
                    <Typography variant="title" color="inherit" style={{flex: 1}} >
                        Pokedex
                    </Typography>
                    
                    <div>
                        <IconButton 
                            component={props => <Link to={"/my-pokemon"} {...props} />}
                        >
                            <StarIcon className="gold" />
                        </IconButton>
                    </div>
                

                </Toolbar>

                <SwipeableDrawer
                        open={this.state.navOpen}
                        onClose={this.toggleDrawer(false)}
                        onOpen={this.toggleDrawer(true)} >
                        
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={this.toggleDrawer(false)}
                            onKeyDown={this.toggleDrawer(false)}  >

                            <div className={classes.list}>
                                <List>{NavList}</List>
                            </div>

                        </div>

                    </SwipeableDrawer>

            </AppBar>
        );
    }
}

export default Header;