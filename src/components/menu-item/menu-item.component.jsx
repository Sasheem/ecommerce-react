import React from 'react';
// higher order component
// function that takes a component as an arg
// then returns a modified component
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

// functional component, don't need state right now
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={() => {
        /**
         * * remember match has the base url and your appending the
         * * menu item name to route to appropriate page
         */
        history.push(`${match.url}${linkUrl}`);
		console.log(history);
        
    }}>
        <div 
            className='background-image' 
            style={{
                backgroundImage: `url(${imageUrl})`
            }} 
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

// withRoute()
// this will return a super powered MenuItem that has
// props from Route: history, location and  match
export default withRouter(MenuItem);