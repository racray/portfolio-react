import React from "react";
import "./Skills.scss";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 350 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#353535" : "#308fe8",
  },
}));

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h1>Skills</h1>
      <div className="container">
        <div className="left-column">
          <h3>Frontend</h3>
          <div className="progres-div">
            <div className="progress-title">
              <span className="progress-head">HTML</span>
              <span className="progress-no">90%</span>
            </div>
            <div className="progress-bar">
              <BorderLinearProgress variant="determinate" value={90} />
            </div>
          </div>
          <div className="progres-div">
            <div className="progress-title">
              <span className="progress-head">CSS</span>
              <span className="progress-no">75%</span>
            </div>
            <div className="progress-bar">
              <BorderLinearProgress variant="determinate" value={75} />
            </div>
          </div>
          <div className="progres-div">
            <div className="progress-title">
              <span className="progress-head">JavaScript</span>
              <span className="progress-no">80%</span>
            </div>
            <div className="progress-bar">
              <BorderLinearProgress variant="determinate" value={80} />
            </div>
          </div>
          <div className="progres-div">
            <div className="progress-title">
              <span className="progress-head">React</span>
              <span className="progress-no">80%</span>
            </div>
            <div className="progress-bar">
              <BorderLinearProgress variant="determinate" value={80} />
            </div>
          </div>

          


        </div>
        <div className="right-column">
          <h3>Backend</h3>
          <div className="progres-div">
            <div className="progress-title">
              <span className="progress-head">NodeJS</span>
              <span className="progress-no">70%</span>
            </div>
            <div className="progress-bar">
              <BorderLinearProgress variant="determinate" value={70} />
            </div>
          </div>
          <div className="progres-div">
            <div className="progress-title">
              <span className="progress-head">Express</span>
              <span className="progress-no">60%</span>
            </div>
            <div className="progress-bar">
              <BorderLinearProgress variant="determinate" value={60} />
            </div>
          </div>
          <div className="database-div">
            <h3>DataBase</h3>
            <div className="progres-div">
              <div className="progress-title ">
                <span className="progress-head">MongoDB</span>
                <span className="progress-no">50%</span>
              </div>
              <div className="progress-bar">
                <BorderLinearProgress variant="determinate" value={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
