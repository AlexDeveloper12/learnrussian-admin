import React, { useContext } from 'react';
import PhrasesData from './PhrasesData';
import SearchPhrases from './SearchPhrases';
import { AppContext } from '../App';


function PhrasesRightGrid({ data, toggleModal, changeHandler, searchHandler }) {

    const myData = data.filter(v => v.Pronunciation !== null).map((value, index) => {
        const phraseType ={
            isGreeting:value.isGreetingPhrase.data[0],
            isGeneral:value.isGeneralPhrase.data[0],
            isLanguage:value.isLanguagePhrase.data[0]
        }
        return (
            <div key={index}>
                <PhrasesData
                    ID={value.BasicPhrasesID}
                    pronunciation={value.Pronunciation}
                    description={value.BasicPhrasesDescription}
                    toggleModal={toggleModal}
                    value={value}
                    sortOrder={value.SortOrder}
                    phraseType={phraseType}
                />
            </div>

        )
    });

    return (
        <div>



            <SearchPhrases
                changeHandler={searchHandler}
            />
            {myData}
        </div>

    )

}

export default PhrasesRightGrid;