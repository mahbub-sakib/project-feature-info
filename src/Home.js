import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import ProjectList from './ProjectList';
import AddFeature from './AddFeature';
import './Home.css';

const Home = () => {
    const [projects, setProjects] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [selectedComponent, setSelectedComponent] = useState('search');

    useEffect(() => {
        // Fetch project data from an API or use static data
        const fetchedProjects = [
            { name: 'proj123', features: ['data file type', 'xml parsing'] },
            { name: 'proj456', features: ['archival type', 'data file type'] },
            // Add more projects as needed
        ];
        setProjects(fetchedProjects);
    }, []);

    const handleSearch = () => {
        const filtered = searchTerm
            ? projects.filter(project =>
                project.features.some(feature => matchFeature(feature, searchTerm))
            )
            : [];
        setFilteredProjects(filtered);
    };

    const matchFeature = (feature, searchTerm) => {
        const featureWords = feature.toLowerCase().split(' ');
        const searchWords = searchTerm.toLowerCase().split(' ');

        return searchWords.some(searchWord =>
            featureWords.some(featureWord => featureWord === searchWord)
        );
    };

    return (
        <div className="home">
            <Sidebar onSelect={setSelectedComponent} />
            <div className="content">
                {selectedComponent === 'search' && (
                    <>
                        <h1>Search Projects Using Features</h1>
                        <SearchBar onSearchTermChange={setSearchTerm} onSearch={handleSearch} />
                        <ProjectList projects={filteredProjects} />
                    </>
                )}
                {selectedComponent === 'addFeature' && (
                    <AddFeature projects={projects} setProjects={setProjects} />
                )}
            </div>
        </div>
    );
};

export default Home;
