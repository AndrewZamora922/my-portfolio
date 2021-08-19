import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <img
        className="about__background"
        src="https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1586&q=80"
      alt=''/>
      <div className="about__info">
        <h1>About</h1>
        <br />
        <div className="about__myinfo">
          <p>
            I'm a US Army Veteran currently looking for a Java Developer position.
            I've completed numerous projects through two coding bootcamps.
            Lately I have been practicing utilizing Spring Boot with Java.
            I also have a Bachelor of Science in Information Systems with an emphasis on Cyber Security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
