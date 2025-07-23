import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll(".animate-section");
    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <>
      <style>
        {`
          .animate-section {
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          }
          .animate-section.visible {
            opacity: 1;
            transform: translateY(0);
          }
          .name-animation {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
          }
          .name-animation span {
            display: inline-block;
            opacity: 0;
            transform: translateX(-20px);
            animation: slideIn 0.5s forwards;
          }
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .name-animation span:nth-child(1) { animation-delay: 0s; }
          .name-animation span:nth-child(2) { animation-delay: 0.1s; }
          .name-animation span:nth-child(3) { animation-delay: 0.2s; }
          .name-animation span:nth-child(4) { animation-delay: 0.3s; }
          .name-animation span:nth-child(5) { animation-delay: 0.4s; }
          .name-animation span:nth-child(6) { animation-delay: 0.5s; }
          .name-animation span:nth-child(7) { animation-delay: 0.6s; }
          .name-animation span:nth-child(8) { animation-delay: 0.7s; }
          .name-animation span:nth-child(9) { animation-delay: 0.8s; }
        `}
      </style>
      <Container fluid className="home-about-section animate-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description animate-section">
              <h1 style={{ fontSize: "2.6em" }}>
                A GLIMPSE <span className="purple"> INTO </span> MY JOURNEY
              </h1>
              <h2 className="name-animation">
                {[..."MEHDI ALAM"].map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
              </h2>
              <p className="home-about-body">
                ✨ Programming is not just a skill for me—it’s my passion, my playground, and a journey of endless learning.
                <br />
                <br />🚀 I am skilled in modern classics like
                <i>
                  <b className="purple"> ReactJS, Java, and WordPress, and I’m constantly expanding my knowledge base. </b>
                </i>
                <br />
                <br />🎨 My areas of interest include
                <i>
                  <b className="purple"> crafting cutting-edge Web Technologies, developing innovative Products, and </b> also in areas related to
                  <b className="purple"> exploring the creative world of Designing.</b>
                </i>
                <br />
                <br />💡 Whenever I get the chance, I channel my creativity into building impactful solutions with <b className="purple">Node.js</b> and
                <i>
                  <b className="purple"> React.js and Next.js.</b>
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvtar animate-section">
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social animate-section">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a href="https://github.com/mehdialam20002" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a href="https://x.com/Mehdi7862" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a href="https://www.linkedin.com/in/mehdi-alam-9411751b7/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a href="https://www.instagram.com/mehdiialam/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Home2;
