import React from "react";
import { Link } from 'react-router-dom';
import "./reading.css"

export default function ReadingMain() {
    return (
      <React.Fragment>
      <h1>Choose a story you want to read today:</h1>
        <div style={{ display: 'flex'}}>
        {/* link to the path -"/reading/first-story" */}
        <Link to="/reading/first-story">
           <div className="first-story-box">"The adventures of Tom Sawyer" by M. Twain</div>
        </Link>
          {/* link to the path -"/reading/Second-story" */}
        <Link to="/reading/second-story">
           <div className="second-story-box">"The Little Prince"    by Antoine de Saint-Exupéry</div>
        </Link>
          {/* link to the path -"/reading/third-story" */}
        <Link to="/reading/third-story">
           <div className="third-story-box">"Alice in Wonderland" by Lewis Carroll </div>
        </Link>
      </div>
      </React.Fragment>
    )
    
}