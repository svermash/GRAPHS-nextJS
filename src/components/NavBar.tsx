'use client'; // 👈 needed if you use hooks in a client component

import { useState } from 'react';
import Link from 'next/link'; // Next.js link

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="Nav-wrap">
      <hr />
      <nav className="nav-class">
        {/* first div */}
        <div className="nav-action">
          <p className="logo">svermash</p>
          <div className="Ham">
            <div
              className={`ham-menu ${menuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* second div */}
        <div className={`off-screen-menu ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-ul">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                HOME
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                CONTACT
              </Link>
            </li>
            <li>
              <Link href="/details" onClick={() => setMenuOpen(false)}>
                DETAILS
              </Link>
            </li>
          </ul>
        </div>

        {/* third div */}
        <div className="login-btn">
          <button>LOGIN</button>
        </div>
      </nav>
      <hr />
    </div>
  );
}

export function Footer() {
  return (
    <div className="footer-wrap">
      <hr />
      <nav className="footer">
        <div className="li-wrap about-us">
          <p id="footer-p">ABOUT US</p>
          <li>
            <a href="#">Our vision</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </div>
        <div className="li-wrap our-social">
          <p id="footer-p">OUR SOCIAL</p>
          <li>
            <a
              href="https://github.com/svermash"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sver/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIN
            </a>
          </li>
        </div>
      </nav>
      <nav className="footer-bottom">
        <div>
          <p id="footer-p">made with &#10084; by svermash</p>
        </div>
        <div className="footer-bm-a">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Helpdesk</a>
        </div>
      </nav>
      <hr />
      <hr />
      <hr />
      <hr />
    </div>
  );
}
