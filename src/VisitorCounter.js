import React, { useEffect, useState } from "react";
import "./Counter.css";
function VisitorCounter() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    let count = localStorage.getItem("visitCount");
    if (count) {
      count = parseInt(count) + 1;
    } else {
      count = 1;
    }
    localStorage.setItem("visitCount", count);
    setVisits(count);
  }, []);

  return (
    <div className="visitor-counter">
      👥 Visitors: <span>{visits}</span>
    </div>
  );
}

export default VisitorCounter;
