import React from "react";
import "./skills.css";

export default function Skills() {
  return (
    <div className="skills-com">
      <div>
        <h3>My Skills</h3>
      </div>
      <div className="higher-ed">
        <h5>Higher Education:</h5>
        <ul>
          <li className="graduate">
            Bachelor's degree in Mathematics and Computer Science.
          </li>
        </ul>
      </div>
      <h5 className="tech-skills-h5"> Technical Skills: </h5>
      <div className="full-stack">
        <ul className="dev-skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
          <li className="lambda">Python</li>
          <li className="lambda">NodeJs</li>
          <li className="lambda">Express NodeJs</li>
          <li className="lambda">Knex</li>
          <li className="lambda">API's</li>
          <li className="lambda">SQLite 3</li>
          <li className="lambda">PostgreSQL</li>
          <li className="lambda">MySQL</li>
          <li className="lambda">Relational Database</li>
          <li>Less - Css Compiler</li>
          <li>Scss- Css Compiler</li>
          <li>npm</li>
          <li>Git / Github</li>
          <li className="deployment">
            {" "}
            Deployment Sites
            <ul>
              <li className="lambda">Heroku</li>
              <li className="lambda">Vercel</li>
              <li className="lambda">Netlify</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

// <a target="_blank" href="https://icons8.com/icons/set/postgreesql">PostgreSQL icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
