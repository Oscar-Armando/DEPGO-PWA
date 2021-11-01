import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import "../css/styles.css"

const city = [{label: 'Cancun'}, {label: 'CDMX'}, {label: 'Guadalajara'}]

function Searching() {
  return (
    <div id="busqueda">
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={city}
      sx={{ width: 500}}
      renderInput={(params) => <TextField {...params} label="En donde buscas tu nuevo hogar" />}
    />
    </div>
  );
}

export default Searching;