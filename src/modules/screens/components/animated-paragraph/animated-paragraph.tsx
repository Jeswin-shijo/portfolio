import React, { useEffect, useRef, useState } from 'react';
import './AnimatedParagraph.scss';

interface AnimatedParagraphProps {
  text?: string;
}

const AnimatedParagraph: React.FC<AnimatedParagraphProps> = ({ text = "This is the default animated paragraph" }) => {
  const [revealedWords, setRevealedWords] = useState<number>(0);
  const hasAnimated = useRef(false);

  const words = text.split(" ");

  useEffect(() => {
    const animate = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      words.forEach((_, index) => {
        setTimeout(() => {
          setRevealedWords(i => Math.min(i + 1, words.length));
        }, index * 300);
      });
    };

    animate(); // run once on mount
    window.addEventListener('focus', animate);

    return () => window.removeEventListener('focus', animate);
  }, [words]);

  return (
    <p className="animated-paragraph">
      {words.map((word, i) => (
        <span
          key={i}
          className={`word ${i < revealedWords ? 'visible' : ''}`}
          style={{
          fontSize: "2rem",
          fontFamily: "Ivy Mode",
          color: "#0c2d57",
          fontWeight: 500,
          lineHeight: 1.5
        }}
        >
          {word}&nbsp;
        </span>
      ))}
    </p>
  );
};

export default AnimatedParagraph;
