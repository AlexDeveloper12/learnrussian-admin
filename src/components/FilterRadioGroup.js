import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const FilterRadioGroup = () =>{

    return(
        <div>Filter:
            <RadioGroup row >
                <FormControlLabel label="Greeting" control={<Radio/>} checked={false} />
                <FormControlLabel label="General" control={<Radio/>} checked={false} />
                <FormControlLabel label="Language" control={<Radio/>} checked={false} />
            </RadioGroup>

        </div>
    )


}

export default FilterRadioGroup;