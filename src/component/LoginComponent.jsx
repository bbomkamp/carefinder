import React from 'react';
import {Button, Grid, Paper, TextField, Typography} from "@material-ui/core";

const LoginComponent = () => {

    const paperStyle = {padding: 20, height: '60vh', width:450}

    return(
        <Grid container style={{height: "800.px"}}>
                <Paper elevation={10} style={paperStyle}>
                    <Grid container spacing={1} style={{padding: 15}}>
                    <Grid item xs={12}>
                        <Typography variant={"h4"} align={"center"}>
                            Sign In
                        </Typography>
                    </Grid>
                    <Grid>

                    </Grid>
                    <Grid xs={12} style={{padding:5}}>
                        <TextField id="outlined-basic" label="Email" variant='outlined' fullWidth={true}>

                        </TextField>
                    </Grid>
                    <Grid xs={12}>
                    </Grid>
                        <Grid xs={12} style={{padding:5}}>
                            <TextField  id="outlined-basic" label="Password" variant='outlined' fullWidth={true}>

                            </TextField>
                        </Grid>
                        <Grid item xs={9}>
                        <Button variant="contained">Log In</Button>
                    </Grid>
                        <Grid item xs={3}>
                            <Button variant="text" >Sign Up</Button>
                        </Grid>
                    </Grid>
                </Paper>
        </Grid>
    )
}

export default LoginComponent;
