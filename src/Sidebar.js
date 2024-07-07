import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onSelect }) => {
    return (
        <div className="sidebar">
            <button onClick={() => onSelect('search')}>Search</button>
            <button onClick={() => onSelect('addFeature')}>Add Feature</button>
        </div>
    );
};

export default Sidebar;