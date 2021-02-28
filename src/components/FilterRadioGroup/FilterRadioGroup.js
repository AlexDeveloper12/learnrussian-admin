import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import FilterRadioButton from '../FilterRadioButton/FilterRadioButton';

const FilterRadioGroup = () => {
  return (
        <div style={styles.container}>
            <RadioGroup row >
                <FilterRadioButton
                    label='General'
                    defaultValue='general'
                />
                <FilterRadioButton
                    label='Greeting'
                    defaultValue='greeting'
                />

                <FilterRadioButton
                    label='Language'
                    defaultValue='language'
                />

            </RadioGroup>

        </div>
  );
};

const styles = {
  container: {
    marginBottom: 20
  }
};

export default FilterRadioGroup;
