import React, { useState } from 'react';
import './AddFeature.css';

const AddFeature = ({ projects, setProjects }) => {
    const [projectName, setProjectName] = useState('');
    const [features, setFeatures] = useState(['']);
    const [projectFeatures, setProjectFeatures] = useState([]);

    const handleFeatureChange = (index, event) => {
        const newFeatures = [...features];
        newFeatures[index] = event.target.value;
        setFeatures(newFeatures);
    };

    const handleAddAnother = () => {
        setFeatures([...features, '']);
    };

    const handleSave = () => {
        const updatedProjects = projects.map(project => {
            if (project.name === projectName) {
                const updatedFeatures = [...project.features, ...features];
                setProjectFeatures(updatedFeatures);
                return { ...project, features: updatedFeatures };
            }
            return project;
        });
        setProjects(updatedProjects);
        setFeatures(['']);
        console.log(features);
    };

    const handleProjectNameChange = (event) => {
        const name = event.target.value;
        setProjectName(name);
        const project = projects.find(p => p.name === name);
        if (project) {
            setProjectFeatures(project.features);
        } else {
            setProjectFeatures([]);
        }
    };

    return (
        <div>
            <h2>Add Feature</h2>
            <div>
                <label>Project Name</label>
                <input
                    type="text"
                    value={projectName}
                    onChange={handleProjectNameChange}
                />
            </div>
            <div>
                <label>Feature List</label>
                {features.map((feature, index) => (
                    <input
                        key={index}
                        type="text"
                        value={feature}
                        onChange={(e) => handleFeatureChange(index, e)}
                    />
                ))}
                <button onClick={handleAddAnother}>Add Another</button>
            </div>
            <button onClick={handleSave}>Save</button>
            {projectFeatures.length > 0 && (
                <div>
                    <h3>Current Features for {projectName}</h3>
                    <ul>
                        {projectFeatures.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default AddFeature;
