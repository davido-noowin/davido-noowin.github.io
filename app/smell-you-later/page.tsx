import Image from "next/image";
import smellyoulater from "../assets/smellyoulater.png";

export default function SmellYouLater() {
  return (
    <div className="experience-container">
      <div className="project-container">
        <h2 className="project-title">Smell You Later</h2>
        <p className="project-description">
          This was a VenusHacks 2024 project. Smell You Later is a fragrance
          recommendation system built using a Python & MongoDB backend and a
          React Native frontend. It uses a K-Means Clustering model and Google
          Gemini to recommend fragrances to users after taking a personalized
          quiz.
        </p>
        <br />
        <p className="education-subheader lock-details-subheader">
            Built with React Native, TypeScript, Python, MongoDB, and AWS EC2
          </p>
      </div>
      <Image
        className="experience-tools-container"
        src={smellyoulater}
        alt="smell you later image"
      />
      <iframe
        className="experience-tools-container"
        src="https://www.youtube.com/embed/kjbxZJkhO7M"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <h2 className="tools-title">Demo Video</h2>
    </div>
  );
}
