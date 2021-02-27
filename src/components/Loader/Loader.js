import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import propTypes from 'prop-types';

const Loader = ({ loading }) => {
    return (
        <ClipLoader loading={loading} />
    )
}

Loader.propTypes = {
    loading: propTypes.bool
};

export default Loader;