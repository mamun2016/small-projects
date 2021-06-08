import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectDetails from '../ProjectDetails';

const ProjectList = () => {
  const [state] = useState(ProjectDetails);

  return (
    <section className="project-list">
      {
        state.map(project => {
          const { id, path, name, image } = project;

          return (
            <Link key={id} to={path} className="project">
              <h2 className="project-header">{name}</h2>
              <div className="project-details">
                <img src={image} alt={name} />
              </div>
            </Link>
          )
        })
      }
    </section>
  )
}

export default ProjectList;
