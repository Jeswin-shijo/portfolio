import React, { useState, useRef, useEffect } from "react";
import "./sticky-whatsapp.css";
import logo from "../../assets/logo/popup-logo-light.svg";
import bgImage from "../../assets/whatsapp background/logo.jpg"

const StickyWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  const isOpen = isHovered || isClicked;

  // Handle outside click to close if clicked open
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isClicked &&
        widgetRef.current &&
        !widgetRef.current.contains(event.target as Node)
      ) {
        setIsClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isClicked]);

  return (
    <div
      className="whatsapp-container"
      ref={widgetRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isOpen && (
        <div className="whatsapp-popup">
          <div className="popup-header">
            <img
              src={logo}
              alt="whatsapp"
              className="popup-icon"
            />
            <div>
              <strong style={{ color: "white"}}>PopUp Tours</strong>
              <p style={{color:"white"}}>Typically replies within a day</p>
            </div>
          </div>
          <div className="popup-message" style={{backgroundImage:`url(${bgImage})`}}>
           <div className="chat-bubble">
            <strong>PopUp Tours</strong>
            <p>Hi there!<br />How can I help you?</p>
            </div>
          </div>
          <a
            href="https://wa.me/9791244717"
            target="_blank"
            rel="noopener noreferrer"
            className="start-chat"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              width="20"
              height="20"
            />
            Start Chat
          </a>
        </div>
      )}

      <div
        className="whatsapp-icon"
        onClick={() => setIsClicked((prev) => !prev)}
        title="Chat with us"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          width={32}
          height={32}
        />
      </div>
    </div>
  );
};

export default StickyWhatsApp;
