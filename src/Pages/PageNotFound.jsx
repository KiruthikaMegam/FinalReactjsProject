import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

export default function PageNotFound() {
  return (
    <div className="pageNotFound">
      <div className="notFoundContent">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>The page you're looking for doesn't exist
          or may have been moved.
        </p>
        <Link to="/" className="homeButton">Back to Home</Link>
      </div>
    </div>
  );
}
