import React, { Component } from 'react'
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import StarIcon from '@material-ui/icons/Star';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function SmallCard(attr, value) {
    return (
        <Card>
            <CardContent>
                <Typography color="textSecondary">
                    {attr}
                </Typography>
                <Typography variant="headline" component="h2">
                    {value}
                </Typography>
            </CardContent>
        </Card>
    );
}

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

class Details extends Component {

    state = {
        value: 0,
        open: false,
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false });
    };

    handleClick = () => {

        this.setState({ open: true });

    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    addToList = (event, value) => {
        
        this.props.onItemStarClick(this.props.pokemon.id);
        this.setState({ open: true });
        
    };

    render() {
        const pokemon = this.props.pokemon;

        const { value } = this.state;

        return (
            <div>
                <p></p>

                <Button fullWidth variant="raised" color="secondary" onClick={this.addToList}>
                    <span>Add {pokemon.name} to your pokemons </span>
                    <StarIcon className='gold' />
                </Button>

                <p></p>
                <Grid container spacing={8} >
                    <Grid item xs={6} sm={3} >
                        <Avatar src={pokemon.sprites.back_default} className="custom-avatar" />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Avatar src={pokemon.sprites.front_default} className="custom-avatar" />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Avatar src={pokemon.sprites.back_shiny} className="custom-avatar" />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Avatar src={pokemon.sprites.front_shiny} className="custom-avatar" />
                    </Grid>
                </Grid>

                <p></p>

                <Grid container spacing={8} >
                    <Grid item xs={6} sm={3}>
                        {SmallCard('Name', pokemon.name)}
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        {SmallCard('Weight', pokemon.weight)}
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        {SmallCard('Height', pokemon.height)}
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        {SmallCard('Experience', pokemon.base_experience)}
                    </Grid>
                </Grid>

                <p></p>

                <div>
                    <AppBar position="static">
                        <Tabs value={value} onChange={this.handleChange}>
                            <Tab label="Abilities" />
                            <Tab label="Moves" />
                            <Tab label="Types" />
                        </Tabs>
                    </AppBar>

                    {value === 0 && <TabContainer>
                        <List component="nav">
                            {pokemon.abilities.map((itm) => {
                                return <div key={itm.ability.name}>
                                    <ListItem button key={itm.ability.name}>
                                        <ListItemText primary={itm.ability.name} />   slot: {itm.slot}
                                    </ListItem>
                                    <Divider />
                                </div>
                            })}
                        </List>
                    </TabContainer>}

                    {value === 1 && <TabContainer>
                        <List component="nav">
                            {pokemon.moves.map((itm) => {
                                return <div key={itm.move.name}>
                                    <ListItem button>
                                        <ListItemText primary={itm.move.name} />
                                    </ListItem>
                                    <Divider />
                                </div>
                            })}
                        </List>
                    </TabContainer>}

                    {value === 2 && <TabContainer>
                        <List component="nav">
                            {pokemon.types.map((itm) => {
                                return <div key={itm.type.name}>
                                    <ListItem button>
                                        <ListItemText primary={itm.type.name} />
                                    </ListItem>
                                    <Divider />
                                </div>
                            })}
                        </List>
                    </TabContainer>}

                </div>
                
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    SnackbarContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{pokemon.name} added to list!</span>}
                    action={[
                        <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
                        CLOSE
                        </Button>,
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={this.handleClose}
                        >
                        <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </div>
        )
    }
}

export default Details;
