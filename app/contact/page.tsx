import Link from "next/link";
import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="hobby-title">Contact</h1>  
      <article className="contact-info">
        <div className="contact">
          <h3>Email 📧</h3>
          <p>
            <Link className="contact-link" href="mailto:davido.nguyen1212@gmail.com">
              davido.nguyen1212@gmail.com
            </Link>
          </p>
        </div>
        <div className="contact">
          <h3>GitHub</h3>
          <p>
            <Link className="contact-link" href="https://github.com/davido-noowin/">
              davido-noowin
            </Link>
          </p>
        </div>
        <div className="contact">
          <h3>LinkedIn</h3>
          <p>
            <Link className="contact-link" href="https://www.linkedin.com/in/david-nguyen-b96577244/">
              David Nguyen
            </Link>
          </p>
        </div>
      </article>
    </div>
  );
}
