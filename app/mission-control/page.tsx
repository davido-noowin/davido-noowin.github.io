import "../styles/mission-control.css";

export default function MissionControl() {
  return (
    <div className="mission-control-container">
      <iframe src="/MissionControl.html" className="game-canvas" />
      <p className="game-subheader">
        Capstone Project in collaboration with ASU & NASA
      </p>
      <h1 className="game-title">Mission Control: All Systems Go</h1>

      <div className="game-music-container">
        <h1 className="education-title">Music By:</h1>
        <p className="hobby-subheader">Steven Ho</p>
      </div>

      <ul className="songs">
        <li className="song-text">
          <a href="https://youtu.be/S9hgmZrImZQ" target="_blank">
            1. Reach for the Stars
          </a>
        </li>
        <li className="song-text">
          <a href="https://youtu.be/IwoIHTl4Mfc" target="_blank">
            2. Wandering Mind
          </a>
        </li>
        <li className="song-text">
          <a href="https://youtu.be/qumIz6a7kTo" target="_blank">
            3. Scan At Will!
          </a>
        </li>
        <li className="song-text">
          <a href="https://youtu.be/NNeZPS9cN28" target="_blank">
            4. Mechanical Madness
          </a>
        </li>
        <li className="song-text">
          <a href="https://youtu.be/HvnUHujUT20" target="_blank">
            5. Otherworldly
          </a>
        </li>
        <li className="song-text">
          <a href="https://youtu.be/iRi4IpQSDUw" target="_blank">
            6. Chaos in Space
          </a>
        </li>
      </ul>

      <p className="game-subheader">Watch the trailer</p>
      <iframe
        className="game-canvas"
        src="https://www.youtube.com/embed/SMokWX9i3WY"
      ></iframe>
    </div>
  );
}
