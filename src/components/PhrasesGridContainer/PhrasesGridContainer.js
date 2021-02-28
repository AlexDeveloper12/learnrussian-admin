import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FaChevronCircleUp } from 'react-icons/fa';
import PhrasesData from '../PhrasesData/PhrasesData';
import propTypes from 'prop-types';

function PhrasesGridContainer ({ phrasesData, toggleModal, deleteMethod }) {
  const myData = phrasesData.filter(v => v.Pronunciation !== null).map((value, index) => {
    const phraseType = {
      isGreeting: value.isGreetingPhrase.data[0],
      isGeneral: value.isGeneralPhrase.data[0],
      isLanguage: value.isLanguagePhrase.data[0]
    };
    return (
        <PhrasesData
            phraseObject={value}
            phraseType={phraseType}
            toggleModal={toggleModal}
            deleteMethod={deleteMethod}
            key={value.BasicPhrasesID}
            />
    );
  });

  return (
        <Grid container key={phrasesData.BasicPhrasesID} direction="row" justify="center" >
            {myData}

            <Grid item xs={6} md={6}>
                Hello
                <FaChevronCircleUp size={20}/>
            </Grid>
        </Grid>
  );
}

PhrasesGridContainer.propTypes = {
  phrasesData: propTypes.array,
  toggleModal: propTypes.func,
  deleteMethod: propTypes.func
};

export default PhrasesGridContainer;
