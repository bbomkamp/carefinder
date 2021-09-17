import React from "react";
import {DataGrid} from '@material-ui/data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
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
        type: 'number',
        width: 110,
    },
    {
        field: 'countyName',
        headerName: 'County',
        width: 110,
    },
    {
        field: 'phone',
        headerName: 'Phone',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'type',
        headerName: 'Type',
        width: 110,
        editable: true,
    },
    {
        field: 'ownership',
        headerName: 'Ownership',
        type: 'number',
        width: 110,
        editable: true,
    }
];
const DataTable = (props) => {

    return (
        <div style={{height: '100%', width: '100%', backgroundColor: "#303030", fontSize: 15}}>
            <DataGrid

                rows={props}
                columns={columns}
                //pageSize={5}
                //checkboxSelection
                disableSelectionOnClick
            />
        </div>

    );

}
export default DataTable
