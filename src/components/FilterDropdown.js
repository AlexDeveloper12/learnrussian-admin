import React from 'react';
import Select from '@material-ui/core/Select';

function FilterDropdown(){

    return(
        <Select native >
            <option value={1} defaultValue >Ascending</option>
            <option value={2} >Descending</option>
        </Select>
    )

}

export default FilterDropdown;