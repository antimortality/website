import React from 'react';
import './antimortality.scss';
import Tree from "./components";

const Index = () => {

  return (
    <div className="outer">
      <img src="https://kaimicahmills.com/assets/media/icon.png" alt="Antimortality" />
      <p className="header"><strong>Antimortality</strong><br/><br/>Towards eternal life for mankind.<br /><span style={{ color: '#ff0000' }}>*This site is a very early work in progress.*</span></p>
      <Tree />
      <p className="footer">Copyright &copy; 2022 Antimortality; a project by <a href="https://twitter.com/kaimicahmills" target="_blank" rel="noreferrer">@kaimicahmills</a>; contribute on <a href="https://github.com/antimortality/website" target="_blank" rel="noreferrer">Github</a>.</p>
    </div>
  );
};

export default Index;
