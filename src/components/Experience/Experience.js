import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    title: "Software Development Engineer",
    company: "Finolity Consultancy Pvt. Ltd.",
    location: "Patna, India",
    duration: "Jun 2024 – May 2025",
    points: [
      "Built full-stack web apps using React.js, Node.js & WordPress.",
      "Improved website performance and reduced load times.",
      "Collaborated with design & QA teams for production-ready delivery.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Finolity Consultancy Services",
    location: "Haryana, India",
    duration: "Jan 2023 – Jun 2023",
    points: [
      "Developed responsive UI components using React.js.",
      "Worked with designers and backend teams for seamless UI.",
      "Enhanced app performance and optimized codebase.",
    ],
  },
];

function Experience() {
  return (
    <Container fluid className="project-section">
      <Container>
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="project-heading text-center text-4xl font-bold mb-5 text-purple-400"
        >
          <FaBriefcase className="inline mb-2 mr-2" />
          My <span className="purple">Professional</span> Journey
        </motion.h1>

        <Row>
          {experiences.map((exp, index) => (
            <Col key={index} md={6} className="mb-5 animate-section">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 rounded-2xl shadow-xl h-full"
              >
                <h3 className="text-2xl font-bold text-yellow-300 mb-1">
                  {exp.title}
                </h3>
                <h4 className="text-lg font-medium">{exp.company}</h4>
                <p className="text-sm text-gray-200 mb-2">
                  {exp.location} • <i>{exp.duration}</i>
                </p>
                <ul className="list-disc list-inside text-gray-100 text-sm mt-2 space-y-1">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
