import React from "react";
import {BrowserRouter, Routes,Route,Link} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import ProjectDetails from "./Pages/ProjectDetails";
import Contact from "./Pages/Contact";
import PageNotFound from "./Pages/PageNotFound";
import AddProject from "./Pages/AddProject";
import UpdateProject from "./Pages/UpdateProject";
import AddSkill from "./Pages/AddSkill";
import UpdateSkill from "./Pages/UpdateSkill";
import "./App.css";
import { ProjectProvider } from "./Context/ProjectContext";
import SkillsProvider from "./Context/SkillsContext";
import RightArrow from './assets/rightArrow.png';
import LinkedIn from './assets/linkedin.png';
import Insta from './assets/insta.png';
import Facebook from './assets/facebook.png';
import Github from './assets/github.png';

export default function App() {

  return (

    <SkillsProvider>
      <ProjectProvider>
        <BrowserRouter>
          <div className="header">
            <p>Kiruthika</p>
            <Navbar />
          </div>

          <main className="pageContainer">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />

              <Route
                path="/About"
                element={<About />}
              />

              <Route
                path="/Skills"
                element={<Skills />}
              />

              <Route
                path="/Skills/Add"
                element={<AddSkill />}
              />

              <Route
                path="/Skills/:skillDetails/Update"
                element={<UpdateSkill />}
              />

              <Route
                path="/Projects"
                element={<Projects />}
              />

              <Route
                path="/Projects/Add"
                element={<AddProject />}
              />

              <Route
                path="/Projects/:projectDetails"
                element={<ProjectDetails />}
              />

              <Route
                path="/Projects/:projectDetails/Update"
                element={<UpdateProject />}
              />

              <Route
                path="/Contact"
                element={<Contact />}
              />

              <Route
                path="*"
                element={<PageNotFound />}
              />
            </Routes>
          </main>

          <footer className="portfolioFooter">
            <div className="footerCTA">
              <span className="footerSmallText">HAVE AN IDEA?</span>
              <h2>Let's build it.
                <span> together.</span>
              </h2>
              <p>I'm always interested in creating
                something useful, creative and meaningful.
              </p>
          
              <Link to="/Contact" className="footerTalkButton">
                Let's Talk
                <img src={RightArrow} alt="Right arrow" />
              </Link>
            </div>
          
            <div className="footerLine"></div>
            <div className="footerBottom">
              <div className="footerLogo">
                Kiruthika
              </div>
              <div className="footerLinks">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Skills">Skills</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
              </div>
              <div className="footerSocial">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={Github} alt="GitHub" />
                </a>
              
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={LinkedIn} alt="LinkedIn" />
                </a>
              </div>
            </div>
          
            <div className="footerCopyright">
              <p>
                © 2026 Kiruthika. All rights reserved.
              </p>
              <p>
                <span>Code</span> that speaks.
                <span> Design</span> that connects.
              </p>
            </div>
          </footer>
        </BrowserRouter>
      </ProjectProvider>
    </SkillsProvider>

  );
}