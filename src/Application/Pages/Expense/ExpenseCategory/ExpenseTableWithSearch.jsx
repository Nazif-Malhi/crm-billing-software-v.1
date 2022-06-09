import * as React from 'react';
import {useState} from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { randomCreatedDate, randomUpdatedDate } from '@mui/x-data-grid-generator';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import {
  GridToolbarQuickFilter,
  GridLinkOperator,
} from '@mui/x-data-grid';


const initialRows = [
  {
      id:1,
    code: 111,
    name: 'Damien',
  },
  {id:2,
    code: 112,
    name: 'Adnan',
  },
  {id:3,
    code: 113,
    name: 'sami',
  },
  {id:4,
    code: 114,
    name: 'ali',
  },
  {id:5,
    code: 115,
    name: 'Amir',
  },
  {
    id:6,
    code: 116,
    name: 'Damien',
  },
];

function QuickSearchToolbar() {
    return (
      <div style={{ paddingTop:20, justifyContent:"center",display:"flex",alignItems:"center"}}> 
      <GridToolbarQuickFilter 
        style={{minWidth:500}}
          quickFilterParser={(searchInput) =>
            searchInput
              .split(',')
              .map((value) => value.trim())
              .filter((value) => value !== '')
          }
        />
      </div>
    );
  }
  

export default function ColumnTypesGrid() {
  const [rows, setRows] = useState(initialRows);


const handleEditClick = (id) => () => {
    console.log(id+ "Edit");
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const columns = React.useMemo(
    () => [
      { field: 'code', type: 'number' },
      { field: 'name', type: 'string' },
      {
        field: 'actions',
        type: 'actions',
        headerName: 'Actions',
        width: 100,
        cellClassName: 'actions',
        getActions: ({ id }) => {
  
          return [
            <GridActionsCellItem
              icon={<EditIcon style={{color:"gray"}} />}
              label="Edit"
              className="textPrimary"
              onClick={handleEditClick(id)}
              color="inherit"
            />,
            <GridActionsCellItem
              icon={<DeleteIcon  style={{color:"gray"}}/>}
              label="Delete"
              onClick={handleDeleteClick(id)}
              color="inherit"
            />,
          ];
        },
      }
    ]
    );

  return (
    <div style={{ height: 350, width: '100%', paddingTop:10 }}>
      <DataGrid columns={columns} rows={rows} 
      checkboxSelection
      pageSize={5}
      rowsPerPageOptions={[5]}

      initialState={{
        filter: {
          filterModel: {
            items: [],
            quickFilterLogicOperator: GridLinkOperator.Or,
          },
        },
      }}
      components={{ Toolbar: QuickSearchToolbar }}
      />
    </div>
  );
}
