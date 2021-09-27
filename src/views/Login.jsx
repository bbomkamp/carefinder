import React from 'react';
import {Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import LoginComponent from "../component/LoginComponent";


const useStyles = makeStyles((Theme) => ({
        root: {
            display: "flex",
            background: "#d5dbe3"
        },
        header: {
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
        loginText:{
            color: 'white',
            fontSize: 25,
            textAlign: "center",
        },
    }
))


const Login = () => {


    const classes = useStyles()

    return(
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>

                    <Typography className={classes.header}>
                        CareFinder
                    </Typography>
                </Grid>

                <Grid item xs={12} style={{padding: 5}} alignItems={'center'}>
                    <Typography className={classes.slogan}>
                        Find The Right Hospital For You.
                    </Typography>
                </Grid>
                <Grid item xs={12}>


                <Paper>
                    <Grid item justifyContent={"center"}>
                        <LoginComponent />
                    </Grid>
                </Paper>
            </Grid>
            </Grid>



        </div>
    );
}

export default Login;