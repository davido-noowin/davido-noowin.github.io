import "../styles/damp.css";
import Image from "next/image";
import damp from "../assets/damp.png";
import Link from "next/link";

export default function Damp() {
  return (
    <div className="experience-container">
      <div className="project-container">
        <h2 className="project-title">DAMP Search Engine</h2>
        <p className="project-description">
          A search engine built in Python using Cosine Similarity & PageRank as
          the main algorithms. It retrieves information from UCI webpages to
          answer queries and is complete with a functional web UI. The search
          engine also features webpage summaries backed by generative AI.
        </p>
        <br />
        <p className="education-subheader lock-details-subheader">
          Built with Python, JavaScript, HTML, and CSS
        </p>
        <Link
          href="https://github.com/mgearhart/Search-Engine"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn2"
        >
          GitHub
        </Link>
      </div>
      <Image
        className="experience-tools-container"
        src={damp}
        alt="damp search engine image"
      />
      <iframe
        className="experience-tools-container"
        src="https://www.youtube.com/embed/mwVxG9Um7M4"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share fullscreen"
      ></iframe>
      <h2 className="tools-title">Demo Video</h2>
    </div>
  );
}
