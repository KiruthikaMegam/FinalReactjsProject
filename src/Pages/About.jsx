import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="aboutPage">

      <div className="aboutHeading">
        <p>GET TO KNOW ME</p>
      </div>

      <div className="aboutInfo">
        <div className="aboutIntro">
          <span>01</span>
          <h2>Who I Am</h2>
          <p>
            I am a dedicated Web Developer with an interest in
            front-end development and modern web technologies.
            I enjoy creating intuitive interfaces, learning through
            real-world projects, and continuously growing as a developer.
          </p>
        </div>

        <div className="aboutIntro">
          <span>02</span>
          <h2>My Journey</h2>
          <p>
            My development journey started with <b>Mobile App Development</b>.
            With <b>one year of professional experience</b>, I gained practical
            knowledge in building applications, working with APIs,
            creating interfaces, and solving real-world problems.
          </p>
        </div>

        <div className="aboutIntro">
          <span>03</span>
          <h2>Where I'm Going</h2>
          <p>
            I'm now expanding my skills into Web Development and
            looking forward to building modern web applications,
            learning new technologies, and taking on challenging projects.
          </p>
        </div>
      </div>
    </div>
  );
}