import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import propTypes from 'prop-types';

const NavigatorButton = ({ icon, clickMethod, title }) => {
  return (
      <IconButton
        edge="end"
        color="inherit"
        aria-label="mode"
        onClick={clickMethod}
        title={title}
      >
        {icon}
        </IconButton>
  );
};

NavigatorButton.propTypes = {
  icon: propTypes.string,
  clickMethod: propTypes.func,
  title: propTypes.string
};

export default NavigatorButton;
