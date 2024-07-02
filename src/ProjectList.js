import React from 'react';

const ProjectList = ({ projects }) => {
    return (
        <ul>
            {projects.map((project) => (
                <li key={project.name}>{project.name}</li>
            ))}
        </ul>
    );
};

export default ProjectList;