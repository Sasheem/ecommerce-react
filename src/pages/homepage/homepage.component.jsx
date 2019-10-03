import React from 'react';

import Directory from '../../components/directory/directory.component.jsx';

import { HomePageContainer } from './homepage.styles';

// making this a functional component 
// because I don't need any lifecycle 
// methods or state right now
const HomePage = () => (
	<HomePageContainer>
		<Directory />
	</HomePageContainer>
);

export default HomePage;