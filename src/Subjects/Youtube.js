import React from "react";

const YouTubeResource = ({ title, embedUrl }) => {
  const styles = {
    container: {
      textAlign: "center",
      padding: "20px",
      background: "rgba(0,0,0,0.7)",
      borderRadius: "16px",
      border: "1px solid rgba(255,255,255,0.2)",
      maxWidth: "720px",
      margin: "30px auto",
      boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
    },
    iframe: {
      width: "100%",
      height: "400px",
      borderRadius: "12px",
      border: "none",
    },
    titleStyle: {
      color: "#fff",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      margin: "15px 0",
      fontSize: "1.2rem",
      fontWeight: 600,
    },
  };

  return (
    <div style={styles.container}>
      <iframe
        src={embedUrl}
        title={title}
        style={styles.iframe}
        allowFullScreen
      />
      <h3 style={styles.titleStyle}>{title}</h3>
    </div>
  );
};

export default YouTubeResource;
