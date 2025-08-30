import React from "react";
import { Link } from "react-router-dom";
import "./Create.css";

function Create() {
  return (
    <header className="create-header">
      <nav>
        <ul>
          <li><Link to="/text">Text-To-Image</Link></li>
          <li><Link to="/image">Image-To-Image</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Create;
