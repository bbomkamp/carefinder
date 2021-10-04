import React, {useEffect, useState,} from "react";
import {
    Box,
    FormControl, FormControlLabel,
    FormLabel,
    Grid, LinearProgress,
    makeStyles, Paper, Radio,
    RadioGroup,
    Typography
} from "@material-ui/core";
import getHospitals from "../helpers/getHospitals";
import {DataGrid} from "@material-ui/data-grid";

const columns = [
    { field: 'id', headerName: 'ID', width: 100},
    {
        field: 'hospitalName',
        headerName: 'Name',
        width: 300,
    },
    {
        field: 'address',
        headerName: 'Address',
        width: 250,
    },
    {
        field: 'state',
        headerName: 'State',
        width: 110,
    },

    {
        field: 'city',
        headerName: 'City',
        width: 110,
    },
    {
        field: 'county',
        headerName: 'County',
        width: 140,
    },

    {
        field: 'phoneNumber',
        headerName: 'Phone',
        width: 120,
    },

    // {
    //     field: 'zipCode',
    //     headerName: 'Zip Code',
    //     width: 135,
    // },
    // {
    //     field: 'type',
    //     headerName: 'Type',
    //     width: 110,
    // },
    // {
    //     field: 'ownership',
    //     headerName: 'Ownership',
    //     width: 150,
    // }
];
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


    const [category, setCategory] = useState('all')
    const [hospitals, setHospitals] = useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [input, setInput] = useState('');

    const classes = useStyles()

    useEffect(() => {

        getHospitals(input, category, function(hospitals){

            if (isLoading) {
                setHospitals(hospitals)
            }
            setIsLoading(false);
        })
    }, [category, input, isLoading])

    const handleSubmit = () => {
       getHospitals(input,category)
    }
    return (
        <div className={classes.root}>
            <Grid container>

                <Grid item xs={12}>
                    <Typography className={classes.header}>
                        CareFinder
                    </Typography>
                </Grid>

                <Grid item xs={12} style={{padding: 5}}>
                    <Typography className={classes.slogan}>
                        Find The Right Hospital For You.
                    </Typography>
                </Grid>

                <Grid item xs={12} style={{padding: 5}}>
                    <Paper>
                        <form onSubmit={handleSubmit}>
                            <label>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                />
                            </label>
                            <input type="submit" />
                        </form>

                        {isLoading && <LinearProgress />}
                    </Paper>
                </Grid>

                <Grid item xs={2}  style={{padding: 10}}>
                    <Grid item style={{padding: 10}}>

                        <FormControl component="fieldset" >
                            <FormLabel component="legend">Search Fields</FormLabel>
                            <RadioGroup
                                aria-label="gender"
                                defaultValue="female"
                                name="radio-buttons-group"
                                value={category}  onChange={(e) => setCategory(e.target.value)}>
                                <FormControlLabel value="name" control={<Radio  />} label="Name" />
                                <FormControlLabel value="providerId" control={<Radio />} label="Provider ID" />
                                <FormControlLabel value="city" control={<Radio />} label="City" />
                                <FormControlLabel value="state" control={<Radio />} label="State" />
                                <FormControlLabel value="county" control={<Radio />} label="County" />
                                <FormControlLabel value="cityAndState" control={<Radio />} label="City and State" />
                            </RadioGroup>
                        </FormControl>

                    </Grid>
                </Grid>
                <Grid item xs={10} style={{padding: 10}}>
                    <Box>
                        <Paper>
                            <Grid container>

                                <DataGrid
                                    columns={columns}
                                    rows={hospitals}
                                    style={{height: 600}}
                                />
                            </Grid>
                        </Paper>
                    </Box>

                </Grid>
            </Grid>
        </div>
    );
}



export default HomePage;
