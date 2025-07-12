import React, { useEffect, useRef, useState } from 'react';
import './AnimatedParagraph.scss';

const AnimatedParagraph = () => {
  const [revealedWords, setRevealedWords] = useState<number>(0);

  const words = "This is a test paragraph thngvhnghnghnghnghdnrftgpohiurthjprio uhbrfptgihfrgt[oirf thub[fosgibfsgt oihlfsgb;ofst gb;ofgn bfg;olokbfgn'b lkgfnb;lgfkn bfg;lknfg;lkfgn;lbfgnblgf;knfg;lkbnfg;lbkfgn ;lkfgnb;lfgnbfgl';k bnfg;'lbnfg;lbnfg;lbfgnb;lfkgnb;lfgbnf;glkbnfg;'lkbnfg;lbknfg;blkfgnb;lfkgnb;flgkbnfg;lkat reveals itself like loading.".split(' ');
 
  const hasAnimated = useRef(false);

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

  animate(); // on mount
  window.addEventListener('focus', animate);

  return () => window.removeEventListener('focus', animate);
}, []);


  return (
    <p className="animated-paragraph">
      {words.map((word, i) => (
        <span
          key={i}
          className={`word ${i < revealedWords ? 'visible' : ''}`}
        >
          {word}&nbsp;
        </span>
      ))}
    </p>
  );
};

export default AnimatedParagraph;
