import React from 'react';
import Node from "./node";
import Checkbox from "./checkbox";
import Project from "./project";
import { prevention, extension, ascension } from "../data";

/**
 * Render branch of tree
 * @param data
 * @returns {JSX.Element}
 * @constructor
 */

const Branch = ({ data }) => {
  return (
    <>
      {
        data.problems && data.problems.map((problem) => {
          return (
            <>
              <Checkbox text={problem.text} completed={problem.completed} key={problem.text} />
              <div className="projects">
                {
                  problem.projects && problem.projects.map((project) => {
                    return (
                      <Project name={project.name} url={project.url} key={project.name} />
                    )
                  })
                }
              </div>
            </>
          )
        })
      }
      <Node title={data.title} description={data.description} icon={data.icon} key={data.title} />
    </>
  )
}

/**
 * Antimortality tree
 * @returns {JSX.Element}
 * @constructor
 */

const Tree = () => {

  return (
    <div className="tree">
      <div className="branch">
        <h1>Prevention</h1>
        { prevention.map((data) => <Branch data={data} /> ) }
      </div>
      <div className="branch">
        <h1>Extension</h1>
        { extension.map((data) => <Branch data={data} /> ) }
      </div>
      <div className="branch">
        <h1>Ascension</h1>
        { ascension.map((data) => <Branch data={data} /> ) }
      </div>
    </div>
  );
};

export default Tree;