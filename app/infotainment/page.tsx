import "../styles/infotainment.css";
import Image from "next/image";
import infotainment from "../assets/infotainment.png";
import Link from "next/link";

export default function Infotainment() {
  return (
    <div className="infotainment-container">
      <div className="infotainment-left">
        <h1 className="hobby-title">infotainment</h1>
        <br />
        <p className="education-subheader">
          destress, relax, study, or take a breather with infotainment🌆
        </p>
        <br />
        <p className="education-subheader lock-details-subheader">
            Built with React and JavaScript
          </p>
        <div className="hero-btn-group">
          <Link
            href="https://github.com/davido-noowin/infotainment"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn2"
          >
            GitHub
          </Link>
          <Link
            href="https://www.figma.com/design/8GSl8ELzVrjUhudOh2S0vL/infotainment?node-id=0-1&p=f&t=7MQlFiUVATLAw4MW-0"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn2"
          >
            Figma
          </Link>
        </div>
      </div>
      <Image
        className="infotainment-right"
        src={infotainment}
        alt="infotainment picture"
      />
    </div>
  );
}
