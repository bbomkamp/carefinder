import React from "react";
import {Box, CircularProgress, Grid, makeStyles, Typography} from "@material-ui/core";
import { DataGrid } from '@mui/x-data-grid';
import DataTable from "../components/HospitalGrid";


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
    const [isLoading, setIsLoading] = React.useState(true);

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
                <Grid item xs={9} style={{background: "brown"}}>
                    <Box style={{height: '750px'}}>
f                       <div style={{ height: 400, width: '100%' }}>
                        <Box style={{height: '800px'}}>
                            {isLoading ? <CircularProgress/> : DataTable(data.users)}
                        </Box>
                    </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}



export default HomePage;
