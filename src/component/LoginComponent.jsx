import React from 'react';
import {Button, Grid, Paper, TextField, Typography} from "@material-ui/core";

const LoginComponent = () => {

    const paperStyle = {padding: 20, alignContent: 'center', height: '60vh', width:340}

    return(
        <Grid container>
            <Grid item>
                <Paper elevation={10} style={paperStyle}>
                    <Grid container spacing={4} style={{padding: 10}}>
                    <Grid item xs={12}>
                        <Typography variant={"h4"} style={{alignText:'center'}}>
                            Sign In
                        </Typography>
                    </Grid>
                    <Grid spacing={5} xs={12}>
                        Email
                    </Grid>
                    <Grid xs={12}>
                        <TextField id="outlined-basic" label="Email" variant='outlined'>

                        </TextField>
                    </Grid>
                    <Grid xs={12}>
                        Password
                    </Grid>
                        <Grid xs={12}>
                            <TextField  id="outlined-basic" label="Password" variant='outlined'>

                            </TextField>
                        </Grid>
                        <Grid item>
                        <Button  variant="contained">Log In</Button>
                    </Grid>
                        <Grid item>
                            <Button variant="text">Sign Up</Button>
                        </Grid>
                    </Grid>
                </Paper>

            </Grid>

        </Grid>
    )
}

export default LoginComponent;