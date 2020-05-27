import React from 'react';

const validation = ( props ) => {

  let validationText = <p>Text too short!</p>
  if (props.textInputLength > 5) {
    validationText = <p>Text long enough!</p>
  }

    return (
      <div>
        {validationText}
       </div>
    )
};

export default validation;