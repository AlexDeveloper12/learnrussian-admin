import React, { useContext } from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FilterRadioButton from './FilterRadioButton';


const FilterRadioGroup = () => {



    return (
        <div style={styles.container}>
            <RadioGroup row >

                <FilterRadioButton
                    label='General'
                    compValue='general'
                    defaultValue='general'

                />
                <FilterRadioButton
                    label='Greeting'
                    compValue='greeting'
                    defaultValue='greeting'

                />

                <FilterRadioButton
                    label='Language'
                    compValue='language'
                    defaultValue='language'

                />


            </RadioGroup>

        </div>
    )


}

const styles = {
    container: {
        marginBottom: 20
    }

}

export default FilterRadioGroup;