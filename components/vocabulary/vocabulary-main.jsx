import React from "react";
import "./vocabulary.css";
import { Link } from 'react-router-dom';


// Functional component for the main vocabulary page
export default function VocabularyMain() {
   return (
     <React.Fragment>
       {/* Header with the title */}
       <h1>Choose a topic you want to learn today:</h1>

       {/* Displaying topic categories with links */}
       <div style={{ display: 'flex'}}>
         {/* Link to the "Kitchen" vocabulary page */}
         <Link to="/vocabulary/kitchen">
           <div className="box">Kitchen</div>
         </Link>

         {/* Link to the "School" vocabulary page */}
         <Link to="/vocabulary/school">
           <div className="box">School</div>
         </Link>
       </div>

       <div style={{ display: 'flex'}}>
         {/* Link to the "Shop" vocabulary page */}
         <Link to="/vocabulary/shop">
           <div className="box">Shop</div>
         </Link>

         {/* Link to the "Garden" vocabulary page */}
         <Link to="/vocabulary/garden">
           <div className="box">Garden</div>
         </Link>
       </div>
     </React.Fragment>
   )
}