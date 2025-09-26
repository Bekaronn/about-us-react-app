import React, { useState } from "react";
import { Mail, Phone, Github, User } from "lucide-react";
import "./App.css";

const AboutUs = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <p className="about-text">
        Привет! Я студент 4 курса КБТУ, учусь и развиваюсь в веб-разработке.
        Сейчас создаю React-приложения и активно прокачиваю навыки.
      </p>

      <div className="contact-section">
        <h2 className="contact-title">Контакты</h2>
        <ul className="contact-list">
          <li>
            <Mail size={20} />
            <strong>Email:</strong>
            <span 
              className="copy-text" 
              onClick={() => handleCopy("bekadron231316@gmail.com", "Email")}
            >
              bekadron231316@gmail.com
            </span>
            {copied === "Email" && <span className="copied-tooltip">Скопировано!</span>}
          </li>
          <li>
            <Phone size={20} />
            <strong>Телефон:</strong>
            <span 
              className="copy-text" 
              onClick={() => handleCopy("+77078508269", "Телефон")}
            >
              +7 707 850 82 69
            </span>
            {copied === "Телефон" && <span className="copied-tooltip">Скопировано!</span>}
          </li>
          <li>
            <Github size={20} />
            <strong>GitHub:</strong>
            <a href="https://github.com/Bekaronn" target="_blank" rel="noreferrer">
              github.com/Bekaronn
            </a>
          </li>
          <li>
            <User size={20} />
            <strong>LinkedIn:</strong>
            <a href="https://kz.linkedin.com/in/bekarysm" target="_blank" rel="noreferrer">
              linkedin.com/in/bekarysm
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
