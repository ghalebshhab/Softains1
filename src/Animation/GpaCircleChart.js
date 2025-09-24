import React, { useState, useEffect } from "react";
import "./GpaCircle.css";

const GpaCircleChart = ({ gpa, maxGpa = 4.0 }) => {
  const [animatedGpa, setAnimatedGpa] = useState(0);

  useEffect(() => {
    // Animate the GPA value when it changes
    let animationFrame;
    const animate = (target) => {
      setAnimatedGpa((prev) => {
        const diff = target - prev;
        if (Math.abs(diff) < 0.01) return target;
        return prev + diff * 0.1;
      });
    };

    const animation = () => {
      animate(gpa);
      if (Math.abs(animatedGpa - gpa) > 0.01) {
        animationFrame = requestAnimationFrame(animation);
      }
    };

    animationFrame = requestAnimationFrame(animation);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [gpa]);

  // Calculate percentage for circle stroke
  const percentage = (animatedGpa / maxGpa) * 100;

  // Determine color based on GPA
  const getGpaColor = () => {
    if (animatedGpa >= 3.5) return "#4caf50"; // Green for high GPA
    if (animatedGpa >= 2.5) return "#ffc107"; // Yellow for medium GPA
    return "#f44336"; // Red for low GPA
  };

  // Calculate circle circumference (2πr)
  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  // Calculate stroke offset
  const strokeOffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="gpa-circle-container">
      <div className="gpa-circle-wrapper">
        <svg
          className="gpa-circle-svg"
          width="180"
          height="180"
          viewBox="0 0 180 180"
        >
          {/* Background circle */}
          <circle
            className="gpa-circle-bg"
            cx="90"
            cy="90"
            r={radius}
            strokeWidth="12"
          />
          {/* Animated progress circle */}
          <circle
            className="gpa-circle-progress"
            cx="90"
            cy="90"
            r={radius}
            strokeWidth="12"
            stroke={getGpaColor()}
            strokeDasharray={circumference}
            strokeDashoffset={strokeOffset}
            strokeLinecap="round"
            transform="rotate(-90 90 90)"
          />
        </svg>
        <div className="gpa-circle-text">
          <span className="gpa-circle-value">{animatedGpa.toFixed(2)}</span>
          <span className="gpa-circle-label">GPA</span>
        </div>
      </div>
    </div>
  );
};

export default GpaCircleChart;
