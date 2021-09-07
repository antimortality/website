import React from 'react';

const Node = ({ title, description, icon }) => {

  return (
    <>
      <div className="node">
        <div className="node-icon">
          <i className={icon}></i>
        </div>
        <div className="node-body">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Node;