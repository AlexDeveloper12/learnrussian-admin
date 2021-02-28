import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import 'fontsource-roboto';
import Paper from '@material-ui/core/Paper';
import propTypes from 'prop-types';
import FilterRadioGroup from '../FilterRadioGroup/FilterRadioGroup';
import { AppContext } from '../../App';

function SearchPhrases ({ searchValue, changeHandler }) {
  const { selectedFilter } = useContext(AppContext);

  const phraseChangeHandler = (e) => {
    changeHandler(e);
  };

  return (
        <div style={styles.container}>
            <Paper>
                <FilterRadioGroup
                    selectedValue={selectedFilter}
                />
            </Paper>

            <TextField placeholder="Search phrases..."
                value={searchValue}
                onChange={phraseChangeHandler}
                name="searchdata"
                style={{ width: 250, fontFamily: 'Roboto' }}

            />
        </div>
  );
}

const styles = {
  container: {
    marginBottom: 10, float: 'left'
  }
};

SearchPhrases.propTypes = {
  searchValue: propTypes.string,
  changeHandler: propTypes.func
};

export default SearchPhrases;
