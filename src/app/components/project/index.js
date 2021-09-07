import React from 'react';

const Project = ({ name, url }) => {

  return (
    <a className="project" href={url} target="_blank">
      <img src={`https://s2.googleusercontent.com/s2/favicons?domain=${url}`} />
      <p>{name}</p>
    </a>
  )
}

export default Project;