import React from 'react';
import './antimortality.scss';
import Tree from "./components";

const Index = () => {

  return (
    <div className="outer">
      <img src="/icon.svg" alt="Antimortality" />
      <p className="header"><strong>antimortality</strong><br/><br />towards eternal life for mankind<br /><span style={{ color: '#ff0000' }}>*this site is a very early work in progress*</span></p>
      <Tree />
      <p className="footer">copyright &copy; 2021, a project by <a href="https://twitter.com/kaimicahmills" target="_blank">@kaimicahmills</a></p>
    </div>
  );
};

export default Index;
