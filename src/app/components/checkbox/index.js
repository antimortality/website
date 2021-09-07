import React from 'react';

const Checkbox = ({ text, completed }) => {

  return (
    <div className="checkbox-outer">
      <div className="checkbox">
        {completed && <i class="fas fa-check"></i>}
      </div>
      <p>{text}</p>
    </div>
  )
};

export default Checkbox;