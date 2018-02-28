import React from 'react';
import { Link } from 'react-router-dom';

import classes from './FullCard.module.css';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from 'material-ui-icons/Close';

const fullCard = props => {
    return (
        <div className={classes.FullCard}>
                    <Paper className={classes.Card}>
                        <Link to="/">
                            <IconButton className={classes.Close} aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                        </Link>
                        <Grid container spacing={24}>
                            <Grid item xs className={classes.Pic}>
                                <img alt="card" src={props.images[props.cardsInfo[props.selectedCard].id]} />
                            </Grid>
                            <Grid item xs className={classes.Text}>
                                <Typography variant="headline" component="h1">
                                    {props.cardsInfo[props.selectedCard].title}
                                </Typography>
                                <br/>
                                <Typography component="h2">
                                    {props.cardsInfo[props.selectedCard].personType}
                                </Typography>
                                <br/>
                                <Typography component="p" align="justify">
                                    {props.cardsInfo[props.selectedCard].fullDesc}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
        </div>
    )
};

export default fullCard;