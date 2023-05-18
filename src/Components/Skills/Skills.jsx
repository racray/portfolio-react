import React from "react";
import "./Skills.scss";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { FrontskillsData, BackskillsData } from "../../data";

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
          {FrontskillsData.map((fr) => (
            <div className="progres-div" key={fr.id}>
              <div className="progress-title">
                <span className="progress-head">{fr.title}</span>
                <span className="progress-no">{fr.progBar}%</span>
              </div>
              <div className="progress-bar">
                <BorderLinearProgress
                  variant="determinate"
                  value={fr.progBar}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="right-column">
          <h3>Backend</h3>
          {BackskillsData.map((bk) => (
            <div className="progres-div" key={bk.id}>
              <div className="progress-title">
                <span className="progress-head">{bk.title}</span>
                <span className="progress-no">{bk.progBar}%</span>
              </div>
              <div className="progress-bar">
                <BorderLinearProgress
                  variant="determinate"
                  value={bk.progBar}
                />
              </div>
            </div>
          ))}

          <div className="database-div">
            <h3>DataBase</h3>
            <div className="progres-div">
              <div className="progress-title ">
                <span className="progress-head">MongoDB</span>
                <span className="progress-no">70%</span>
              </div>
              <div className="progress-bar">
                <BorderLinearProgress variant="determinate" value={70} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
