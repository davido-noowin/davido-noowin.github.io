import Link from "next/link";
import Image from "next/image";
import lockmein from "../assets/lockmein.png";
import lockmein1 from "../assets/lockmein1.png";
import lockmein2 from "../assets/lockmein2.png";
import lockmein3 from "../assets/lockmein3.png";
import lockmein4 from "../assets/lockmein4.png";
import "../styles/lock-me-in.css";
import "../styles/infotainment.css";

export default function LockMeIn() {
  return (
    <div className="lock-container">
      <div className="lock-details-container">
        <div className="infotainment-left">
          <h1 className="hobby-title">Lock Me In</h1>
          <br />
          <p className="education-subheader lock-details-subheader">
            A Chrome Extension designed to prevent doom scrolling on websites.
            Redirects users to selected websites and locks you in while the
            timer is activated.
          </p>
          <br />
          <p className="education-subheader lock-details-subheader">
            Built with React, JavaScript, and TypeScript
          </p>
          <div className="lock-btn-group">
            <Link
              href="https://github.com/davido-noowin/infotainment"
              target="_blank"
              rel="noopener noreferrer"
              className="lock-btn"
            >
              GitHub
            </Link>
            <Link
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="lock-btn"
            >
              Download Chrome Extension
            </Link>
          </div>
        </div>
        <Image
          className="infotainment-right"
          src={lockmein}
          alt="infotainment picture"
        />
      </div>

      <h1 className="hobby-title">Demo Video</h1>
      <iframe
        className="demo-canvas"
        src="https://www.youtube.com/embed/L_FqfgosWWk"
      ></iframe>

      <h1 className="hobby-title">Screenshots</h1>
      <div className="lock-screenshots-container">
        <Image className="lock-screenshot" src={lockmein1} alt="screenshot 1" />
        <Image className="lock-screenshot" src={lockmein2} alt="screenshot 2" />
        <Image className="lock-screenshot" src={lockmein3} alt="screenshot 3" />
        <Image className="lock-screenshot" src={lockmein4} alt="screenshot 4" />
      </div>

      <h1 className="hobby-title">Privacy Policy</h1>
      <br />
      <p className="education-subheader lock-details-subheader">
        Visit{" "}
        <span>
          <Link href={"./lock-me-in/privacy-policy"}>here</Link>
        </span>{" "}
        to view the privacy policy.
      </p>
    </div>
  );
}
