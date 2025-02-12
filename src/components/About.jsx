import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './About.css'; 

const About = () => {
  return (
    <Container className="about-container">
      <Row className="text-center mb-4">
        <Col>
          <h1>About Movie Finder</h1>
          <p className="lead">An easy-to-use app to search and explore your favorite movies!</p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6} className="about-image">
          <img
            src="/about-image.jpg"
            alt="Movies"
            className="img-fluid rounded"
          />
        </Col>
        <Col md={6}>
          <h3>What is Movie Finder?</h3>
          <p>
            Movie Finder is a user-friendly application designed to help movie lovers explore the world of cinema. It taps into the OMDB (Open Movie Database) API, which provides an extensive collection of movie data. With Movie Finder, you can search for movies by title, year, or keyword and instantly access detailed information, including the plot summary, cast, release year, and movie posters.
          </p>
          <p>The app is perfect for anyone looking to discover new films or revisit old classics. 

          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h3>Features</h3>
          <ul>
            <li>🌟 Search for movies using the OMDB API</li>
            <li>🎬 View movie details like title, year, and poster</li>
            <li>🖥️ Clean and user-friendly interface</li>
            <li>📱 Responsive design for all devices</li>
            <li>⚡ Lightweight and fast</li>
          </ul>

        </Col>
      </Row>

      <Row className="text-center mb-5">
        <Col>
          <h3>Get in Touch</h3>
          <p>
            Want to learn more or discuss a collaboration? Feel free to reach out through any of the following methods! You can contact me directly, explore my GitHub for more projects, or connect on social media.
          </p>
          <p>
            I'm always open to feedback, suggestions, and collaborations! If you have an idea you'd like to discuss or want to know more about this project, don’t hesitate to get in touch. I look forward to hearing from you!
          </p>
          
          <div className="contact-info">
            <h4>Contact Information</h4>
            <p>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
            <p>Phone: +1 234 567 890</p>
            <p>Location: City, Country</p>
          </div>
          
          <div className="social-links">
            <h4>Follow Me</h4>
            <ul>
              <li><a href="https://github.com/MuhammedHanasCH" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>

          <Button variant="primary" href="https://github.com/MuhammedHanasCH" target="_blank">
            Visit My GitHub
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
