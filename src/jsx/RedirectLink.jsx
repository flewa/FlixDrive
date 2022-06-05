import React from 'react';
import PropTypes from 'prop-types'


const RedirectLink = (props) => {

    const {
      url
    } = props

    window.location.href = url;

    return (
        <div>Redirecting...</div>
    );
};

RedirectLink.propTypes = {
  url: PropTypes.string.isRequired
}

export default RedirectLink;