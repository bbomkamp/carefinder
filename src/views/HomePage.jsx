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

fetch('http://www.knautzfamilywi.com/CareFinder-1.0.0/api/key/get').then(function (response){
    return response.json();
}).then(function (data){
    console.log(data);
}).catch(function (){
    console.log("Somethings Wrong")
})


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
                <Grid item xs={3} style={{background: "yellow"}}>
d
                </Grid>
                <Grid item xs={9} style={{background: "blue"}}>
                    <Box style={{height: '750px'}}>
f                       <div style={{ height: 400, width: '100%' }}>
                        <Box style={{height: '800px'}}>

                        </Box>
                    </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}



export default HomePage;
