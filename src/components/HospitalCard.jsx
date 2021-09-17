import React from "react";
import {Box, Card, Grid, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    card:{
        backgroundColor: "#303030"
    }
}));

const HospitalCard = (props) => {

    const classes = useStyles();

    return(
        <Card className={classes.card}>
            <Grid container direction="row"
                  justifyContent="space-between"
                  alignItems="center">
                <Grid item>
f
                </Grid>
            </Grid>
        </Card>
    )
}
export default HospitalCard
