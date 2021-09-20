import React, {useEffect} from "react";
import {Box, Card, Grid, makeStyles, TextField, Typography} from "@material-ui/core";
import HospitalGrid from "../components/HospitalGrid";
import getHospitals from "../helpers/getHospitals";



const useStyles = makeStyles((Theme) => ({
    root:{
        display: "flex",
        background: "#d5dbe3"
    },
    header:{
        color: 'blue',
        fontSize: 100,
        textAlign: "center",

    },
    slogan:{
        color: 'white',
        fontSize: 25,
        textAlign: "center",
        backgroundColor:"blue",
    },
    card:{
        borderRadius: 10,
        padding:10,
        backgroundColor: "#d5dbe3"
    },

}))


const HomePage = () => {

    const classes = useStyles()

    let hospitalsAll =[]

    useEffect(()=>{
         hospitalsAll = getHospitals
    }, [])


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
                <Grid item xs={2} style={{padding: 10}}>
                    <Card className={classes.card}>
                        <TextField id="outlined-basic" label="Search Hospitals" variant="outlined" style={{width: '100%'}}  />
                    </Card>

                </Grid>
                <Grid item xs={10} style={{padding: 10}}>
                    <Box>
                        {HospitalGrid}
                    </Box>

                </Grid>
            </Grid>
        </div>
    );
}



export default HomePage;
