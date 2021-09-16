import React from "react";
import {Box, Grid, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((Theme) => ({
    root:{
        display: "flex",
        background: "gray"
    },
    header:{
        fontSize: 100,
        textAlign: "center"
    },
    slogan:{
        fontSize: 25,
        textAlign: "center"
    }


}))


const HomePage = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography className={classes.header}>
                        CareFinder
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.slogan}>
                        Find The Right Hospital For You.
                    </Typography>
                </Grid>
                <Grid item xs={2} style={{background: "yellow"}}>
d
                </Grid>
                <Grid item xs={10} style={{background: "brown"}}>
                    <Box style={{height: '750px'}}>
f
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}



export default HomePage;