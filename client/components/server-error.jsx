import React from 'react';

const ServerError = () => (
  <div className="error-page">
    <div className="error-page__container">
      <div className="error-page__message error-page__message_wide">
        <div className="error-page__text error-page__text_big">Oops!</div>
        <div className="error-page__text error-page__text_normal">
          The server encountered a temporary error and could not complete your request.
        </div>
        <div className="error-page__text error-page__text_small">
          Please try again in 30 seconds.
        </div>
      </div>
    </div>
  </div>
);

export default ServerError;
