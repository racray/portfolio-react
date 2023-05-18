import { Button } from "@mui/material";
import React from "react";
import ArticleIcon from '@mui/icons-material/Article';
import "./About.scss";
export default function About() {
  return (
    <section className="about" id="about">


        <h1>About</h1>
        <div className="container">
            <div className="img-container"><img src="https://c.tenor.com/2uyENRmiUt0AAAAC/coding.gif" alt="Loading"/></div>
            <div className="about-text">
                <p>
                A self-taught developer.I'm enthusiastic about learning new skills, expanding my knowledge, and leveraging my learnings.I enjoy creating user experience design, interfaces and web development.
                
                <div>Check out my resume for past experiences 😀</div>
                </p>

                <a href="https://drive.google.com/file/d/1wDB4xNxDCFpMIQreYDpIrog_xRYXlit6/view?usp=sharing" target="_blank" rel="noreferrer"> 
                <Button><ArticleIcon/>
                <span>Resume</span>
                </Button>
                </a>
            </div>
        </div>

    </section>
  );
}
