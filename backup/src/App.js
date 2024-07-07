import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ProjectList from './ProjectList';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);

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

    // for (let searchWord of searchWords) {
    //   for (let featureWord of featureWords) {
    //     if (featureWord == searchWord) {
    //       return true;
    //     }
    //   }
    // }

    // return false;

    return searchWords.some(searchWord =>
      featureWords.some(featureWord => featureWord === searchWord)
    );

  };

  return (
    <div>
      <h1>Project Search</h1>
      <SearchBar onSearchTermChange={setSearchTerm} onSearch={handleSearch} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
};

export default App;