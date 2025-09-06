import React, { useState, useRef, useEffect } from "react";
import Stylesheet from "./style.module.scss";

type Props = {
  title: string;
  children: React.ReactNode;
};

const Accordion = ({ title, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  const toggleAccordion = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className={`${Stylesheet.accordionItem} ${isOpen ? Stylesheet.open : ""}`}>
      <button className={Stylesheet.accordionHeader} onClick={toggleAccordion}>
        <span style={{ fontFamily: "Ivy Mode" }}>{title}</span>
        <span className={Stylesheet.icon}>{isOpen ? "–" : "+"}</span>
      </button>
      <div
        ref={contentRef}
        className={Stylesheet.accordionContent}
        style={{ maxHeight: height }}
      >
        <div className={Stylesheet.contentInner}><span className={Stylesheet.children}>{children}</span></div>
      </div>
    </div>
  );
};

export default Accordion;
