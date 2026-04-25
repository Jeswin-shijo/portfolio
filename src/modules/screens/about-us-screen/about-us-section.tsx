import React, { useEffect, useRef, useState } from "react";
import AnimatedParagraph from "../components/animated-paragraph/animated-paragraph";
import ScreenName from "../../../shared/components/screen-name";

type StatCounterProps = {
  end: number;
  label: string;
  duration?: number;
  formatValue: (value: number) => string;
};

const statValueStyle: React.CSSProperties = {
  color: "#f4c200",
  fontWeight: 400,
  fontSize: "clamp(30px, 6vw, 50px)",
  fontFamily: "var(--font-heading)",
  margin: 0,
};

const StatCounter: React.FC<StatCounterProps> = ({
  end,
  label,
  duration = 1600,
  formatValue,
}) => {
  const [value, setValue] = useState(0);
  const counterRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = counterRef.current;

    if (!node) {
      return;
    }

    let animationFrameId = 0;

    const animateCounter = () => {
      if (hasAnimated.current) {
        return;
      }

      hasAnimated.current = true;
      const startTime = performance.now();

      const step = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setValue(end * easedProgress);

        if (progress < 1) {
          animationFrameId = window.requestAnimationFrame(step);
        } else {
          setValue(end);
        }
      };

      animationFrameId = window.requestAnimationFrame(step);
    };

    if (!("IntersectionObserver" in window)) {
      animateCounter();

      return () => {
        window.cancelAnimationFrame(animationFrameId);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounter();
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [duration, end]);

  return (
    <div ref={counterRef}>
      <h3 style={statValueStyle}>{formatValue(value)}</h3>
      <p className="text-dark">{label}</p>
    </div>
  );
};

const AboutUsSection: React.FC = () => {
  return (
    <section className="py-5">
      <div className="site-container">
      <div className="d-flex flex-column flex-xl-row justify-content-between align-items-start gap-4 gap-xl-5">
        <ScreenName name={"About us"}/>

        <div className="mb-5" style={{ maxWidth: "900px" }}>
          <AnimatedParagraph
            text={
              "Popup Tours and Travels is your trusted travel companion, offering tailor-made holiday experiences across India and abroad.With years of expertise, local partnerships, and 24/7 customer support, we ensure your journey is smooth, safe, and unforgettable."
            }
          />
        </div>
      </div>
      <div className="row text-center justify-content-around gy-4">
        <div className="col-lg-2 col-md-3 mb-4">
          <StatCounter
            end={10}
            label="Happy Travelers"
            formatValue={(value) => `${Math.round(value)}K+`}
          />
        </div>
        <div className="col-lg-2 col-md-3 mb-4">
          <StatCounter
            end={1200}
            label="Customized Trips Completed"
            formatValue={(value) => `${Math.round(value).toLocaleString()}+`}
          />
        </div>
        <div className="col-lg-2 col-md-3 mb-4">
          <StatCounter
            end={7}
            label="In Travel & Tourism"
            formatValue={(value) => `${Math.round(value)}+ Years`}
          />
        </div>
        <div className="col-lg-2 col-md-3 mb-4">
          <StatCounter
            end={4.9}
            label="Customer Rating"
            formatValue={(value) => `${value.toFixed(1)}/5`}
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
