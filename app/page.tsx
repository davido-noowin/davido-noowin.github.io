import Image from "next/image";
import blank from "./assets/blank.jpg";
import pfp from "./assets/pfp.jpg";
import pfp2 from "./assets/pfp2.png";
import infotainment from "./assets/infotainment.png";
import damp from "./assets/damp.png";
import smellyoulater from "./assets/smellyoulater.png";
import lockmein from "./assets/lockmein.png";
import missioncontrol from "./assets/missioncontrol.png";
import moonrise from "./assets/moonrise.jpg";
import timesquare1 from "./assets/timesquare1.jpg";
import timesquare2 from "./assets/timesquare2.jpg";
import vegas from "./assets/vegas.jpg";
import city from "./assets/city.jpg";
import camera from "./assets/camera.jpg";
import car from "./assets/car.jpeg";
import "./styles/page.css";
import Link from "next/link";
import ResumeButton from "./components/ResumeButton";

export default function Home() {
  return (
    <div>
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-title sliding">Hello, I'm David Nguyen</h1>
          <h2 className="hero-subtitle">
            <span className="typing">
              Full Stack Developer - React, Python, Java, SQL, NoSQL
              <span className="delayed">
                <span className="blink">|</span>
              </span>
            </span>
          </h2>
          <div className="hero-btn-group">
            <ResumeButton />
            <Link href="./contact" className="hero-btn2">
              Contact Info
            </Link>
          </div>
        </div>
        <Image className="hero-right" src={pfp} alt="portfolio picture" />
      </div>
      <section id="about">
        <div className="about-me-container">
          <div className="about-me-text-container">
            <h1 className="about-me-title">More About Me</h1>
            <p className="about-me-text">
              I am a graduate from UCI with a bachelor's in computer science.
              Currently, I'm an incoming masters student at UT Austin with an
              interest in AI and web development. I have experience in full
              stack development with tools and frameworks such as React,
              JavaScript/TypeScript, Python, Java, AWS, and databases tools
              (both SQL & NoSQL). In my journey, I have created several unique and
              interesting projects that have helped me grow.
              <br />
              <br />
              There are several activies that I enjoy aside from programming. I
              try my best to stay physically active so you'll most-likey catch
              me at the gym if I am away from the computer. Occasionally, I play
              volleyball with my friends. I have always loved playing video
              games since I was younger, so when I have the time, I'll either
              run some games with friends, play Pokemon, or play Minecraft. And
              although, I don't do it as much anymore, I am a huge fan of street
              photography, so if I ever travel to places, I always try to take a
              couple of shots to remember the trip and tell a story.
            </p>
          </div>
          <Image className="about-me-image" src={pfp2} alt="about me img" />
        </div>
        <div className="education-container">
          <h2 className="education-title">Education</h2>
          <div className="education-card-container">
            <div className="education-card">
              <h3 className="education-degree">B.S. Computer Science</h3>
              <p className="education-subheader">
                University of California, Irvine
              </p>
              <br />
              <p className="education-subheader">Complete</p>
            </div>
            <div className="education-card">
              <h3 className="education-degree">M.S. Computer Science</h3>
              <p className="education-subheadern">
                The University of Texas at Austin
              </p>
              <br />
              <p className="education-subheader">Ongoing</p>
            </div>
          </div>
        </div>
        <div className="hobby-container">
          <h1 className="hobby-title">Photos From My Life</h1>
          <br />
          <p className="hobby-subheader">Snapshots Taken by Me</p>
          <div className="hobby-images-container">
            <div className="hobby-section">
              <div className="size2 rounded-border">
                <Image className="hobby-image" src={moonrise} alt="image 1" />
              </div>
              <div className="size2 rounded-border">
                <Image className="hobby-image" src={timesquare2} alt="image 2" />
              </div>
            </div>
            <div className="hobby-section">
              <div className="size3 rounded-border">
                <Image className="hobby-image" src={vegas} alt="image 3" />
              </div>
              <div className="size2 rounded-border">
                <Image className="hobby-image" src={city} alt="image 4" />
              </div>
              <div className="size3 rounded-border">
                <Image className="hobby-image" src={camera} alt="image 5" />
              </div>
            </div>
            <div className="hobby-section">
              <div className="size2 rounded-border">
                <Image className="hobby-image" src={car} alt="image 6" />
              </div>
              <div className="size2 rounded-border">
                <Image className="hobby-image" src={timesquare1} alt="image 7" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="experience">
        <div className="hobby-container">
          <div className="experience-header">
            <h1 className="hobby-title">Experience</h1>
            <div className="education-card">
              <h3 className="education-degree">Tricia</h3>
              <p className="education-subheader">Software Engineer Intern</p>
              <br />
              <p className="education-subheader">April 2025 - July 2025</p>
            </div>
          </div>
        </div>

        <div className="experience-container">
          <h2 className="tools-title">Frontend Development</h2>
          <div className="experience-tools-container">
            <ul>
              <li>✓ HTML</li>
              <li>✓ CSS</li>
              <li>✓ React</li>
              <li>✓ JavaScript</li>
              <li>✓ TypeScript</li>
            </ul>
          </div>
          <div className="experience-tools-container">
            <ul>
              <li>✓ Python</li>
              <li>✓ Java</li>
              <li>✓ C#</li>
              <li>✓ PostgreSQL</li>
              <li>✓ MySQL</li>
              <li>✓ AWS (EC2)</li>
              <li>✓ Git</li>
              <li>✓ MongoDB</li>
            </ul>
          </div>
          <h2 className="tools-title">Backend Development</h2>
        </div>
      </section>
      <section id="projects">
        <div className="hobby-container">
          <h1 className="hobby-title">Projects</h1>
          <article className="projects-container">
            <div className="project-wrapper">
              <Link className="project-card" href="./infotainment">
                <div className="project-card-image-container">
                  <Image
                    className="project-card-image"
                    src={infotainment}
                    alt="infotainment image"
                  />
                </div>
                <div className="project-card-text">
                  <h3 className="project-card-text-title">infotainment</h3>
                  <p className="project-card-text-subtitle">
                    A low-distraction, tranquil web application.
                  </p>
                  <br />
                  <p className="project-card-text-action">Learn more →</p>
                </div>
              </Link>
            </div>
            <div className="project-wrapper">
              <Link className="project-card" href="./damp">
                <div className="project-card-image-container">
                  <Image
                    className="project-card-image"
                    src={damp}
                    alt="damp image"
                  />
                </div>
                <div className="project-card-text">
                  <h3 className="project-card-text-title">
                    DAMP Search Engine
                  </h3>
                  <p className="project-card-text-subtitle">
                    Search engine tailored to browse UCI
                    webpages.
                  </p>
                  <br />
                  <p className="project-card-text-action">Learn more →</p>
                </div>
              </Link>
            </div>
            <div className="project-wrapper">
              <Link className="project-card" href="./smell-you-later">
                <div className="project-card-image-container">
                  <Image
                    className="project-card-image"
                    src={smellyoulater}
                    alt="smell you later image"
                  />
                </div>
                <div className="project-card-text">
                  <h3 className="project-card-text-title">Smell You Later</h3>
                  <p className="project-card-text-subtitle">
                    A personalized fragrance recommendation system.
                  </p>
                  <br />
                  <p className="project-card-text-action">Learn more →</p>
                </div>
              </Link>
            </div>
            <div className="project-wrapper">
              <Link className="project-card" href="./lock-me-in">
                <div className="project-card-image-container">
                  <Image
                    className="project-card-image"
                    src={lockmein}
                    alt="Lock Me In image"
                  />
                </div>
                <div className="project-card-text">
                  <h3 className="project-card-text-title">Lock Me In</h3>
                  <p className="project-card-text-subtitle">
                    A Chrome extension dedicated to focus and productivity.
                  </p>
                  <br />
                  <p className="project-card-text-action">Learn more →</p>
                </div>
              </Link>
            </div>
            <div className="project-wrapper">
              <Link className="project-card" href="./mission-control">
                <div className="project-card-image-container">
                  <Image
                    className="project-card-image"
                    src={missioncontrol}
                    alt="Mission Control image"
                  />
                </div>
                <div className="project-card-text">
                  <h3 className="project-card-text-title">Mission Control</h3>
                  <p className="project-card-text-subtitle">
                    A web-based game built as a capstone project in association with NASA & ASU.
                  </p>
                  <br />
                  <p className="project-card-text-action">Learn more →</p>
                </div>
              </Link>
            </div>
            <div className="project-wrapper">
              <Link className="project-card" href="">
                <div className="project-card-image-container">
                  <Image
                    className="project-card-image"
                    src={blank}
                    alt="Pokemon Rogue Dungeon image"
                  />
                </div>
                <div className="project-card-text">
                  <h3 className="project-card-text-title">?</h3>
                  <p className="project-card-text-subtitle">
                    Coming soon.
                  </p>
                  <br />
                  <p className="project-card-text-action">Learn more →</p>
                </div>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
