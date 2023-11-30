import React from 'react';

import '../style/sidebar.css' ;

export const Sidebar = () => {
    const sectionStyle = {
        padding: '0px', // Padding around the content
        marginTop: '50px', // Space above the section
        marginBottom: '20px', // Space below the section
      };
      const headingStyle = {
        marginTop: '0px', // No space on top of the heading
        color: '#333', // Dark grey text for the heading
        marginBottom: '10px', // Space below the heading
        fontSize: '25px',
        left: '0',
        
      };
      const listStyle ={
        listStyleType: 'none', // Remove default list styling
        paddingLeft: '0', // Remove default padding
        left: '0',
      }
      const linkStyle = {
        color: '#333',
        padding: '10px',
        textDecoration: 'none',
        fontSize: '20px',
        left: '0',
      };
    

    return(
        <aside className="sidebar">
            <section style={sectionStyle}>
                <h2 style={headingStyle}>English Pubs</h2>
                <ul>
                    <li style={listStyle}>
                    <a style={linkStyle} href="https://dickensfair.com/photo-galleries/#family-fun/" target="_blank" rel="noopener noreferrer">
                    Family</a>
                    </li>
                    <li style={listStyle}>
                    <a style={linkStyle} href="https://dickensfair.com/photo-galleries/#theatre-nightlife/" target="_blank" rel="noopener noreferrer">
                    Theatre</a>
                    </li>
                    <li style={listStyle}>
                    <a style={linkStyle} href="https://dickensfair.com/photo-galleries/#dramatic-streets/" target="_blank" rel="noopener noreferrer">
                    Dramatic</a>
                    </li>
                </ul>
                    
            
                <h2 style={headingStyle}>Victorian Holiday</h2>
                <ul>
                    <li style={listStyle}>
                    <a style={linkStyle} href="https://dickensfair.com/food-drink/" target="_blank" rel="noopener noreferrer">
                    Delicacies</a>
                    </li>
                    <li style={listStyle}>
                    <a style={linkStyle} href="https://dickensfair.com/textile-arts/" target="_blank" rel="noopener noreferrer">
                    Costumes</a>
                    </li>
                    <li style={listStyle}>
                    <a style={linkStyle} href="https://dickensfair.com/activities-diversions/" target="_blank" rel="noopener noreferrer">
                    Activities</a>
                    </li>
                </ul>
            </section>
       </aside>
    );
}