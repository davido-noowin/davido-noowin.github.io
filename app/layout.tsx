import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from 'next/image';
import githubLogo from "./assets/github.png";
import linkedinLogo from "./assets/linkedin.png";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Nguyen",
  description: "David's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} body`}>
      <body className="">
        <header>
            <Link href="/" className="header-title">David Nguyen</Link>
            <nav className="header-nav-container">
              <Link href={{ pathname: "/", hash: "#about" }}  className="header-link" replace>
                About
              </Link>
              <Link href={{ pathname: "/", hash: "#experience" }} className="header-link" replace>
                Experience
              </Link>
              <Link href={{ pathname: "/", hash: "#projects" }} className="header-link" replace>
                Projects
              </Link>
              <Link href="./contact" className="header-link">Contact</Link>
            </nav>
        </header>

        {children}

        <footer>
          <div className="footer-left">
            <h1 className="footer-title">David Nguyen</h1>
            <div className="footer-socials-container">
              <Link href="https://www.linkedin.com/in/david-nguyen-b96577244/" target="_blank" rel="noopener noreferrer" className="footer-social">
                <Image loading="lazy" className="footer-social-image" src={linkedinLogo} alt="LinkedIn" />
              </Link>
              <Link href="https://github.com/davido-noowin/" target="_blank" rel="noopener noreferrer" className="footer-social">
                <Image loading="lazy" className="footer-social-image" src={githubLogo} alt="GitHub" />
              </Link>
            </div>
          </div>
          <nav className="footer-nav-container">
              <Link href={{ pathname: "/", hash: "#about" }}  className="footer-link" replace>
                About
              </Link>
              <Link href={{ pathname: "/", hash: "#experience" }} className="footer-link" replace>
                Experience
              </Link>
              <Link href={{ pathname: "/", hash: "#projects" }} className="footer-link" replace>
                Projects
              </Link>
              <Link href="./contact" className="footer-link">Contact</Link>
          </nav>
        </footer>
      </body>
    </html>
  );
}
