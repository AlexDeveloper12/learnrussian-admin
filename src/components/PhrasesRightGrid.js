import React from 'react';
import PhrasesData from './PhrasesData';
import SearchPhrases from './SearchPhrases';


function PhrasesRightGrid({ data, toggleModal, changeHandler,searchHandler }) {

    const myData = data.filter(v => v.Pronunciation !== null).map((value, index) => {
        return (

            <PhrasesData
                ID={value.BasicPhrasesID}
                pronunciation={value.Pronunciation}
                description={value.BasicPhrasesDescription}
                toggleModal={toggleModal}
            />
        )
    })

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