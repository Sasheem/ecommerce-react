import React from 'react';

import Directory from '../../components/directory/directory.component.jsx';

import './homepage.styles.scss';

// making this a functional component 
// because I don't need any lifecycle 
// methods or state right now
const HomePage = () => (
    <div className='homepage'>
        <Directory />
    </div>
);

export default HomePage;