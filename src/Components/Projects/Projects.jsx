import React from "react";
import "./Projects.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import StreamIcon from "@mui/icons-material/Stream";
import { cardDetails } from "../../data";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h1>Projects</h1>
      <div className="container">
        {cardDetails.map((cd)=>
        <div className="card">
          <div className="left">
            <div className="img-container">
              <img
                src={cd.img}
                alt={cd.title}
              />
              <div className="floating-div">
                <div className="floating-text">
                  <div className="source-code">
                    <a
                      className="icon-text"
                      href={cd.webBack}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubIcon />
                      <span>Backend source code</span>
                    </a>
                    <a
                      className="icon-text"
                      href={cd.webFront}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubIcon />
                      <span>Frontend source code</span>
                    </a>
                  </div>
                  <div className="live">
                    <a
                      className="icon-text"
                      href={cd.webLive}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <StreamIcon />
                      <span>Live</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right-text">
              <h1>{cd.textHeader}</h1>
              <p>{cd.textPara}</p>
            </div>
          </div>
        </div>)}
        
      </div>
    </section>
  );
}
