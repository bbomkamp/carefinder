import React, {useEffect, useState,} from "react";
import {
    Box,
    FormControl, FormControlLabel,
    FormLabel,
    Grid,
    makeStyles, Paper, Radio,
    RadioGroup,
    Typography
} from "@material-ui/core";
import getHospitals from "../helpers/getHospitals";
import SearchBar from "material-ui-search-bar";
import {DataGrid} from "@material-ui/data-grid";
import {blue} from "@mui/material/colors";
import styled from "@emotion/styled";
import shadows from "@mui/material/styles/shadows";

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
        field: 'city',
        headerName: 'City',
        width: 110,
    },
    {
        field: 'state',
        headerName: 'State',
        width: 110,
    },
    {
        field: 'zipCode',
        headerName: 'Zip Code',
        width: 135,
    },
    {
        field: 'countyName',
        headerName: 'County',
        width: 140,
    },
    {
        field: 'phone',
        headerName: 'Phone',
        type: 'number',
        width: 140,
    },
    {
        field: 'type',
        headerName: 'Type',
        width: 110,
    },
    {
        field: 'ownership',
        headerName: 'Ownership',
        width: 150,
    }
];
const rows = [
    {
        id: 1, hospitalName: "All Saints",
        address: "1234 Spring St.",
        city: "Racine", state: "WI",
        zipCode: "53402", countyName: "Racine",
        phone: "2621234567", type: "Type",
        ownership:"ownership"
    },
    {
        id: 2, hospitalName: "MARSHALL MEDICAL CENTER SOUTH",
        address: "2505 U S HIGHWAY 431 NORTH",
        city: "BOAZ", state: "AL",
        zipCode: "35957", countyName: "MARSHALL",
        phone: "2565938310", type: "Acute Care Hospitals",
        ownership:"Government"
    },
    {
        id: 3, hospitalName: "SOUTHEAST ALABAMA MEDICAL CENTER",
        address: "1108 ROSS CLARK CIRCLE",
        city: "DOTHAN", state: "AL",
        zipCode: "36301", countyName: "HOUSTON",
        phone: "3347938701", type: "Acute Care Hospitals",
        ownership:"Government"
    },
    {
        id: 4, hospitalName: "ELIZA COFFEE MEMORIAL HOSPITAL",
        address: "205 MARENGO STREET",
        city: "FLORENCE", state: "AL",
        zipCode: "35631", countyName: "LAUDERDALE",
        phone: "2567688400", type: "Acute Care Hospitals",
        ownership:"Government"
    },
    {
        id: 5, hospitalName: "All Saints",
        address: "1234 Spring St.",
        city: "Racine", state: "WI",
        zipCode: "53402", countyName: "Racine",
        phone: "2621234567", type: "Type",
        ownership:"ownership"
    },
    {
        id: 6, hospitalName: "All Saints",
        address: "1234 Spring St.",
        city: "Racine", state: "WI",
        zipCode: "53402", countyName: "Racine",
        phone: "2621234567", type: "Type",
        ownership:"ownership"
    },
    {
        id: 7, hospitalName: "All Saints",
        address: "1234 Spring St.",
        city: "Racine", state: "WI",
        zipCode: "53402", countyName: "Racine",
        phone: "2621234567", type: "Type",
        ownership:"ownership"
    },
    {
        id: 8, hospitalName: "All Saints",
        address: "1234 Spring St.",
        city: "Racine", state: "WI",
        zipCode: "53402", countyName: "Racine",
        phone: "2621234567", type: "Type",
        ownership:"ownership"
    },
    {
        id: 9, hospitalName: "All Saints",
        address: "1234 Spring St.",
        city: "Racine", state: "WI",
        zipCode: "53402", countyName: "Racine",
        phone: "2621234567", type: "Type",
        ownership:"ownership"
    },
]

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

    // States
    const [category, setCategory] = useState('name')
    const [theRows, setTheRows] = useState(rows)
    const [searched, setSearched] = useState('')

    const requestSearch = (searchedVal) => {
        const filterRows = rows.filter((rows) =>{
            return rows.name.toLowerCase().includes(searchedVal.toLowerCase());
        })
        setTheRows(filterRows)
    };
    const cancelSearch = () => {
        let setSearched = "";
        requestSearch(searched)
    };

    // Vars
    const classes = useStyles()
    let hospitalsAll =[]

    // useEffect
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

                <Grid item xs={12} style={{padding: 5}}>
                    <Typography className={classes.slogan}>
                        Find The Right Hospital For You.
                    </Typography>
                </Grid>

                <Grid item xs={12} style={{padding: 5}}>
                    <Paper>
                    <SearchBar>
                        value= {searched}
                        onChange={(searchVal) => requestSearch(searchVal)}
                        onCancelSearch= {()=> cancelSearch()}
                    </SearchBar>
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
                                value={category}  onChange={(e) => setCategory(e.target.value)}
                            >
                                <FormControlLabel value="name" control={<Radio  />} label="Name" />
                                <FormControlLabel value="address" control={<Radio />} label="Address" />
                                <FormControlLabel value="city" control={<Radio />} label="City" />
                                <FormControlLabel value="state" control={<Radio />} label="State" />
                                <FormControlLabel value="zipCode" control={<Radio />} label="Zip Code" />
                                <FormControlLabel value="county" control={<Radio />} label="County" />
                                <FormControlLabel value="phone" control={<Radio />} label="Phone Number" />
                                <FormControlLabel value="type" control={<Radio />} label="Type" />
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
                                    rows={rows}
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
