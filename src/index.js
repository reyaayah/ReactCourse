import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "purple"
  },
  {
    skill: "Javascript",
    level: "advanced",
    color: "Red"
  },
  {
    skill: "C/C++",
    level: "advanced",
    color: "Orange"
  },
  {
    skill: "Web Design",
    level: "intermediate",
    color: "skyblue"
  },
  {
    skill: "Git & GitHub",
    level: "intermediate",
    color: "lightgreen"
  },
  {
    skill: "React",
    level: "intermediate",
    color: "yellow"
  },
  {
    skill: "Flutter",
    level: "intermediate",
    color: "pink"
  },
  {
    skill: "React Native",
    level: "beginner",
    color: "green"
  }

];
function App() {
  return (
    <div className="card">
      <Avatar />
      <Intro />
      <Skills />
      <SkillList />
      <Contact />
    </div>
  );
}
function Avatar() {
  return (
    <>
      <div className="avatarimg">
        <img src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/453246881_2238769909791494_6393567758119638222_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ehnvepArAs0Q7kNvgEtkFyw&_nc_ht=scontent.fktm21-1.fna&oh=00_AYBbLyAvQh2__lJsGDH0m65TVHLCXKveaVCO_kSyptvHYQ&oe=6702F2D7" alt="profile photo" height={200} width={200} />
      </div>
    </>

  );
}
function Intro() {
  return (
    <div className="introduction">
      <p><strong>Riya Awal</strong></p>
      <p>Full Stack Developer, currently studying in Samriddhi College, Lokanthali, Bkt, Doing an internship at Dhimay Tech. Learned Git, Figma, Kanban and react js</p>
    </div>
  )
}
function SkillList() {
  return (
    <div className="skill">
      {skills.map((skill) => (
        <Skills skill={skill.skill} color={skill.color} level={skill.level} />
      )
      )}
    </div>

    // <div>
    //   <Skills skill="HTML+CSS" emoji="💪" color="yellow" />
    //   <Skills skill="JavaScript" emoji="💪" color="lightblue" />
    //   <Skills skill="C/C++" emoji="💪" color="orangered" />
    //   <Skills skill="Python" emoji="👼" color="purple" />
    //   <Skills skill="React Js" emoji="💪" color="green" />
    //   <Skills skill="Flutter" emoji="✌️" color="pink" />
    // </div>
  );
}
function Skills({ skill, color, level }) {
  return (
    <>
      <div className="skill" style={{ backgroundColor: color }}>
        <span>{skill}</span>
        <span>
          {level === "beginner" && "👼"}
          {level === "intermediate" && "✌️"}
          {level === "advanced" && "💪"}
        </span>

      </div>
    </>
  );
}
function Contact() {
  return (
    <div className="contact">
      <a href="https://www.facebook.com/reeya.awal.75/"><i class="fa fa-facebook"></i></a>
      <a href="https://www.instagram.com/reya_awal?igsh=MW8xMmNhc2RxMGlpeA=="><i class="fa fa-instagram"></i></a>
      <a href="https://www.linkedin.com/in/reya-awal-591330294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="fa fa-linkedin"></i></a>
      <a href="https://github.com/reyaayah"><i class="fa fa-github"></i></a>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
