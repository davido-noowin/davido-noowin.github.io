'use client';

import "../styles/page.css";

export default function ResumeButton() {
    return (
        <button className="hero-btn1" onClick={() => {window.open("resume.pdf", "_blank", "noopener noreferrer")}}>
            View My Resume
        </button>
    )
}