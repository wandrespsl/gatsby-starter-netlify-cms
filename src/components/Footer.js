import React from "react";

import { StyledFooter, Button } from "../styles/components";
import Image from "./image";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

export default function Footer() {
  return (
    <StyledFooter>
      <div className="custom-home-about-us">
        <div className="container">
          <div className="column-3">
            <Image name="logo-psl-2019.png" />
            <p>
              Hours:
              <br />
              Monday - Friday
              <br />
              8:00am – 6:00pm
            </p>
            <p>
              Address: <br />
              Carrera 42 #72-11
              <br />
              Itagui, Medellin - Colombia
            </p>
            <Button type="outline">Contact us today!</Button>
          </div>
          <div className="column-4">
            <h3>About PSL</h3>
            <p>
              We are a purpose-led software company with 33 years of experience
              and over 700 driven and passionate engineers. PSL partners with
              its clients from nearshore locations to help them succeed on their
              most complex software development challenges. We deliver
              world-class quality software using agile processes and real-time
              interaction with our clients. <a href="/about">Read more</a>
            </p>
            <div className="social">
              <a title="facebook" href="https://facebook.com/pslcorp">
                <img
                  src={facebook}
                  alt="Facebook"
                />
              </a>
              <a title="twitter" href="https://twitter.com/pslcorp">
                <img
                  className="fas fa-lg"
                  src={twitter}
                  alt="Twitter"
                />
              </a>
              <a title="instagram" href="https://instagram.com/pslcorp">
                <img
                  src={instagram}
                  alt="Instagram"
                />
              </a>
              <a title="vimeo" href="https://www.youtube.com/PSLCorp">
                <img
                  src={vimeo}
                  alt="Vimeo"
                />
              </a>
            </div>
          </div>
          <div className="column-3">
            <h3>Useful articles</h3>
            <ul>
              <li>
                <a href="https://www.pslcorp.com/">
                  Software Development Outsourcing
                </a>
              </li>
              <li>
                <a href="/it-outsourcing-services-companies/">
                  IT Outsourcing Companies
                </a>
              </li>
              <li>
                <a href="/outsource-web-development/">
                  Outsource Web Development
                </a>
              </li>
              <li>
                <a href="https://www.pslcorp.com/">Nearshore Outsourcing</a>
              </li>
              <li>
                <a href="/nearshoring-outsourcing/the-practical-advantage-of-nearshore-outsourcing">
                  Advantage Of Offshore Outsourcing
                </a>
              </li>
              <li>
                <a href="/nearshoring-outsourcing/looking-to-the-future-of-it-outsourcing">
                  Future Of IT Outsourcing
                </a>
              </li>
            </ul>
          </div>
          <div className="column-2">
            <h3>Find Us</h3>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/resources/case-studies">Case Studies</a>
              </li>
              <li>
                <a href="/contact">Contact us</a>
              </li>
              <li>
                <a href="/sitemap">Sitemap</a>
              </li>
              <li>
                <a
                  href="/documents/psl-privacy-policy-28032019.pdf"
                  target="_blank"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
            <p>
              All rights reserved. <br />
              Images property{" "}
              <a href="https://www.pslcorp.com" className="no-link">
                PSL S.A.S.
              </a>
            </p>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
}
