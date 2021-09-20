import React from "react";
import {DataGrid} from '@material-ui/data-grid';
import {Grid} from "@material-ui/core";

const columns = [
    { field: 'id', headerName: 'ID', width: 100},
    {
        field: 'hospitalName',
        headerName: 'Name',
        width: 150,
    },
    {
        field: 'address',
        headerName: 'Address',
        width: 150,
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
        id: 2, hospitalName: "All Saints",
        address: "1234 Spring St.",
        city: "Racine", state: "WI",
        zipCode: "53402", countyName: "Racine",
        phone: "2621234567", type: "Type",
        ownership:"ownership"
    },
    {
        id: 3, hospitalName: "All Saints",
        address: "1234 Spring St.",
        city: "Racine", state: "WI",
        zipCode: "53402", countyName: "Racine",
        phone: "2621234567", type: "Type",
        ownership:"ownership"
    },
    {
        id: 4, hospitalName: "All Saints",
        address: "1234 Spring St.",
        city: "Racine", state: "WI",
        zipCode: "53402", countyName: "Racine",
        phone: "2621234567", type: "Type",
        ownership:"ownership"
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

const DataTable = () => {

    return (
        <Grid container>
            <DataGrid
                columns={columns}
                rows={rows}
                style={{height: 800}}
        />
        </Grid>

    );

}
export default DataTable
