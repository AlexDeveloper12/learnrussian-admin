import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Loader = ({loading}) =>{
    return(
        <ClipLoader loading={loading}/>
    )

}

export default Loader;