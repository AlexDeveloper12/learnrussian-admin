import React, { useContext } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { AppContext } from '../../App';
import propTypes from 'prop-types';

const FilterRadioButton = ({ label, compValue, defaultValue }) => {
  const { filterByPhraseType, selectedFilter } = useContext(AppContext);

  return (

  <FormControlLabel
            label={label}
            control={<Radio color="primary" checked={selectedFilter === compValue ? true : false} onClick={filterByPhraseType} value={defaultValue} />}
            value={defaultValue} />
  );
};

FilterRadioButton.propTypes = {
  label: propTypes.string,
  compValue: propTypes.string,
  defaultValue: propTypes.string
};

export default FilterRadioButton;
