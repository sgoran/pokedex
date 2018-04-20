import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});



class cardList extends Component {
    
    refresh(){
        console.log('REFRESHING . . . . ');
    }

    render() {

        const { classes } = this.props;
        
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    {this.props.list.map(function (item) {
                        return (<Grid item xs={6} sm={3} key={item.name}>
                                    <Paper className={classes.paper}>{item.name}</Paper>
                            </Grid>)
                    })}

                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(cardList);