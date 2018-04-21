import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import StarIcon from '@material-ui/icons/Star';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';
import { CircularProgress } from 'material-ui/Progress';
import purple from 'material-ui/colors/purple';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9,
        backgroundSize: 'auto',
        backgroundColor: '#e2ebf0'
    },
    button: {
        margin: theme.spacing.unit,
    },
});



class cardList extends Component {
    
    render() {

        const { classes } = this.props;
        const me = this;

        return (
            <div className={classes.root}>

                <Grid container spacing={24}>

                    {this.props.list.map(function (item) {

                        return (
                            <Grid item xs={6} sm={3} key={item.name}>

                                <Card className={classes.card}>

                                    <CardMedia
                                        className={classes.media}
                                        image={item.sprite}
                                    />

                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h3">
                                            {item.name}
                                        </Typography>
                                    </CardContent>

                                    <Divider />

                                    <IconButton
                                        className={classes.button}
                                        aria-label="Add To My Pokemons"
                                        data={item.id}
                                        onClick={() => { me.props.onItemStarClick(item.id) }}
                                    >
                                        <StarIcon
                                            className={item.favorit ? 'gold' : ''}
                                        />
                                    </IconButton>

                                    <Button 
                                        size="small" 
                                        color="primary" 
                                        component={props => <Link to={"/pokemon/"+item.id} {...props} />} >
                                        Explore
                                    </Button>

                                </Card>

                            </Grid>
                        )

                    })}

                </Grid>
                {!this.props.disableLoader &&
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '50px'
                    }}>
                        <CircularProgress
                            style={{
                                color: purple[500],
                                margin: '20 auto'
                            }}
                            thickness={7}
                        />
                    </div>    
                }
            </div>
        );
    }
}

export default withStyles(styles)(cardList);