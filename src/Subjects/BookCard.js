import React from "react";

const BookCard = ({ title, link }) => {
  // Construct Google Drive URLs from the given link
  const fileId = link.split("/d/")[1]?.split("/")[0]; // Extract file ID
  const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  const openUrl = `https://drive.google.com/open?id=${fileId}`;
  const downloadUrl = `https://drive.google.com/uc?id=${fileId}&export=download`;

  const styles = {
    container: {
      textAlign: "center",
      padding: "20px",
      background: "transparent",
      borderRadius: "16px",
      border: "1px solid rgba(255,255,255,0.2)",
      maxWidth: "320px",
      margin: "30px auto",
      boxShadow: "0 8px 20px transparent",
    },
    iframe: {
      width: "100%",
      height: "400px",
      borderRadius: "12px",
      border: "1px solid rgba(255,255,255,0.3)",
      display: "block",
      margin: "0 auto",
      backgroundColor: "transparent",
    },
    titleStyle: {
      color: "#fff",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      margin: "15px 0 10px 0",
      fontSize: "1.2rem",
      fontWeight: 600,
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "12px",
      marginTop: "15px",
      flexWrap: "wrap",
    },
    button: {
      padding: "10px 18px",
      borderRadius: "8px",
      background: "black",
      color: "#fff",
      textDecoration: "none",
      fontWeight: 600,
      border: "1px solid rgba(255,255,255,0.3)",
      transition: "all 0.3s ease",
      cursor: "pointer",
      fontSize: "1rem",
    },
    buttonHover: {
      background: "rgba(255,255,255,0.2)",
      transform: "translateY(-2px)",
    },
  };

  const Button = ({ href, children, download }) => {
    const handleMouseEnter = (e) =>
      Object.assign(e.currentTarget.style, styles.buttonHover);
    const handleMouseLeave = (e) =>
      Object.assign(e.currentTarget.style, styles.button);

    return (
      <a
        href={href}
        target={download ? undefined : "_blank"}
        rel={download ? undefined : "noopener noreferrer"}
        download={download}
        style={styles.button}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    );
  };

  return (
    <div style={styles.container}>
      <h1 style={{ marginBottom: "2%" }}>Book</h1>
      <iframe
        src={previewUrl}
        title={title}
        style={styles.iframe}
        allowFullScreen
      />
      <h3 style={styles.titleStyle}>{title}</h3>
      <div style={styles.buttonContainer}>
        <Button href={openUrl}>Open</Button>
        <Button href={downloadUrl} download>
          Download
        </Button>
      </div>
    </div>
  );
};

export default BookCard;
