import React from "react";
const github_username = "Amansingh-afk";
const linkedin = "aman-singh-afk";
const email = "amansingh.afk@gmail.com";

const projects = [
  "Amansingh-afk/razorpay-api-wrapper",
  "Amansingh-afk/ReadifyAI",
  "Amansingh-afk/clubhub-ui",
  "Amansingh-afk/clubhub",
  "Amansingh-afk/Spotify--Clone",
  "Amansingh-afk/chat-app-using-react-and-firebase",
  "Amansingh-afk/Ecom",
];

const links = [
  {
    name: "GitHub",
    icon: "fab fa-fw fa-github",
    link: "https://github.com/Amansingh-afk",
    description: "My profile on GitHub",
  },
  {
    name: "Linkedin",
    icon: "fab fa-fw fa-linkedin",
    link: `https://www.linkedin.com/in/${linkedin}`,
    description: ` my linkedin profile | Connect to me..`,
  },
  {
    name: "E-mail",
    icon: "fas fa-fw fa-at",
    link: `mailto:${email}`,
    description: "Lets get in touch!",
  },
];

const info = (
  <>
    <p>Yo! I'm a graduate with a passion for computer science (CSE).</p>
    <p>
      I have intermediate experience with{" "}
      <span className="highlighted">JavaScript, PHP</span> and{" "}
      <span className="highlighted">Node.js</span>.
    </p>
    <p>
      I've been doing <span className="highlighted">back-end development</span>{" "}
      for a couple of years now. Currently, I'm skilled in{" "}
      <span className="highlighted">Express.js, Laravel</span>,{" "}
      <span className="highlighted">Nginx, docker, Firebase</span>, and more.
    </p>
    <p>
      Aside from that, I have good knowledge of{" "}
      <span className="highlighted">Java</span> and{" "}
      {/* <span className="highlighted">Javascript</span>,  */}
      <span className="highlighted">shell scripting.</span>
    </p>
  </>
);

const workHistory = [
  {
    name: "Software Developer @ Vamaship",
    icon: "fas fa-fw fa-cube",
    time: "2020 - Present",
    description: `<br/>Oct 2022 - Present
					<br/>Full-time
					<br/>&emsp;&emsp; ~ Conducted tests on Restful APIs using Postman to ensure functionality and improve performance.
					<br/>&emsp;&emsp; ~ Developed an admin and user backend that uploads data through CSV files to SQL databases using PHP, Node.js, and Docker.
					<br/>&emsp;&emsp; ~ Implemented scripts to automatically generate code based on user-defined templates, resulting in a significant reduction in development time.
					<br/>&emsp;&emsp; ~ Collaborated with the team on front-end development using Vue.js.
					<br/>&emsp;&emsp; ~ Skills: Vue.js, NodeJs, ExpressJs, Firebase, Docker, MySQL, Git`,
  },
];

const joke = `A doctor tells a man that he has to stop masturbating. 
	 <br /> The man is surprised and says, "Why?" And the doctor says,
	 "Because I'm trying to examine you!`;

export { github_username, email, projects, links, info, workHistory, joke };
