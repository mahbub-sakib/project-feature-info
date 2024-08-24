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
        <div className="add-feature-container">
            <h2 className="add-feature-header">Add Feature</h2>
            <div>
                <label className="add-feature-label">Project Name</label>
                <input
                    type="text"
                    className="add-feature-input"
                    value={projectName}
                    onChange={handleProjectNameChange}
                />
            </div>
            <div>
                <label className="add-feature-label">Feature List</label>
                {features.map((feature, index) => (
                    <input
                        key={index}
                        type="text"
                        className="add-feature-input"
                        value={feature}
                        onChange={(e) => handleFeatureChange(index, e)}
                    />
                ))}
                <button className="add-feature-button add-another-button" onClick={handleAddAnother}>Add Another</button>
            </div>
            <button className="add-feature-button" onClick={handleSave}>Save</button>
            {projectFeatures.length > 0 && (
                <div>
                    <h3 className="add-feature-header">Current Features for {projectName}</h3>
                    <ul className="add-feature-list">
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
