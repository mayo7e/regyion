import React from 'react';
import Widget from 'rasa-webchat';

const CustomWidget = () => {
  return (
    <Widget
      initPayload="/get_started"
      socketUrl="http://localhost:5005"
      socketPath="/socket.io/"
      customData={{ language: 'en' }}
      title="Title"
    />
  );
};

export default CustomWidget;
