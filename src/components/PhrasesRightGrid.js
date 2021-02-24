import React, { useContext } from 'react';
import PhrasesData from './PhrasesData';
import SearchPhrases from './SearchPhrases';
import { AppContext } from '../App';


function PhrasesRightGrid({ data, toggleModal, changeHandler, searchHandler }) {

    const { phrasesCount } = useContext(AppContext);

    const myData = data.filter(v => v.Pronunciation !== null).map((value, index) => {
        return (
            <div key={index}>
                <PhrasesData
                    ID={value.BasicPhrasesID}
                    pronunciation={value.Pronunciation}
                    description={value.BasicPhrasesDescription}
                    toggleModal={toggleModal}
                    value={value}
                />
            </div>

        )
    })

    return (
        <div>

            <div>
                <span>Number of phrases: {phrasesCount}</span>

            </div>

            <SearchPhrases
                changeHandler={searchHandler}
            />
            {myData}
        </div>

    )

}

export default PhrasesRightGrid;