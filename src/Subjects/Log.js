import BlurText from "../Animation/BlurText";
import ClickSpark from "../Animation/ClickSpark";
import LightRays from "../Animation/LightRays";
import ShinyText from "../Animation/ShinyText";
import Header from "../Header";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Magnet from "../Animation/Magent";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import L from "./img/Logos/skill.png";
import { useState } from "react";
import YouTubeResource from "./Youtube";
import SpotlightCard from "../Animation/SpotlightCard";
import { Link } from "react-router-dom";
import all from "./img/Softians IT Community/1) Softians IT - اجباري كلية/7.png";

export default function Log() {
  // Helper: robustly extract Drive file ID from several link formats
  const getDriveFileId = (url) => {
    if (!url || typeof url !== "string") return null;
    // match /d/FILEID/
    const m1 = url.match(/\/d\/([a-zA-Z0-9_-]+)(?:\/|$)/);
    if (m1 && m1[1]) return m1[1];
    // match id=FILEID
    const m2 = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (m2 && m2[1]) return m2[1];
    // match uc?id=FILEID
    const m3 = url.match(/uc\?id=([a-zA-Z0-9_-]+)/);
    if (m3 && m3[1]) return m3[1];
    return null;
  };

  // Build Drive URLs from fileId
  const driveUrls = (rawLink) => {
    const id = getDriveFileId(rawLink);
    if (!id)
      return {
        previewUrl: rawLink,
        openUrl: rawLink,
        downloadUrl: rawLink,
        thumb: "",
      };
    const previewUrl = `https://drive.google.com/file/d/${id}/preview`;
    const openUrl = `https://drive.google.com/open?id=${id}`;
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${id}`;
    const thumb = `https://drive.google.com/thumbnail?id=${id}&sz=w400-h500`;
    return { previewUrl, openUrl, downloadUrl, thumb };
  };

  // Local lightweight preview card (lazy loads iframe only when preview is opened)
  const PreviewCard = ({ title, link, name }) => {
    const [showPreview, setShowPreview] = useState(false);
    const { previewUrl, openUrl, downloadUrl, thumb } = driveUrls(link);

    const styles = {
      card: {
        background: "rgba(0,0,0,0.65)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 12,
        padding: 12,
        color: "#fff",
        textAlign: "center",
        maxWidth: 360,
        margin: "0 auto",
        boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      },
      thumbWrap: {
        width: "100%",
        height: 0,
        paddingBottom: "130%", // book-like aspect
        position: "relative",
        borderRadius: 8,
        overflow: "hidden",
        background: "linear-gradient(180deg,#222,#111)",
        border: "1px solid rgba(255,255,255,0.04)",
      },
      thumbImg: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
      title: {
        fontSize: "1rem",
        fontWeight: 700,
        margin: 0,
        padding: "6px 4px",
      },
      meta: {
        fontSize: "0.9rem",
        color: "rgba(255,255,255,0.75)",
        marginBottom: 6,
      },
      actions: {
        display: "flex",
        gap: 8,
        justifyContent: "center",
        flexWrap: "wrap",
      },
      btn: {
        padding: "8px 12px",
        borderRadius: 8,
        background: "black",
        color: "#fff",
        textDecoration: "none",
        border: "1px solid rgba(255,255,255,0.08)",
        fontWeight: 600,
        cursor: "pointer",
      },
      btnPrimary: {
        background: "black",
        border: "1px solid rgba(255,255,255,0.16)",
      },
      modalBackdrop: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.75)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        padding: 20,
      },
      modalContent: {
        width: "100%",
        maxWidth: 900,
        height: "80vh",
        background: "#000",
        borderRadius: 10,
        overflow: "hidden",
        position: "relative",
        border: "1px solid rgba(255,255,255,0.06)",
      },
      closeBtn: {
        position: "absolute",
        top: 20,
        left: 8,
        background: "rgba(0,0,0,0.8)",
        color: "#fff",
        border: "none",
        padding: "6px 10px",
        borderRadius: 6,
        cursor: "pointer",
        zIndex: 2,
      },
      iframe: {
        width: "100%",
        height: "100%",
        border: "none",
      },
    };

    return (
      <>
        <div style={styles.card}>
          <div style={styles.thumbWrap}>
            {thumb ? (
              <img
                src={thumb}
                alt={title}
                style={styles.thumbImg}
                loading="lazy"
                onError={(e) => {
                  // fallback: display nothing if thumbnail not available
                  e.currentTarget.style.display = "none";
                }}
              />
            ) : (
              <div
                style={{
                  ...styles.thumbImg,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                No preview
              </div>
            )}
          </div>

          <h4 style={styles.title}>{name || title}</h4>
          <div style={styles.meta}>{title}</div>

          <div style={styles.actions}>
            <button
              style={{ ...styles.btn, ...styles.btnPrimary }}
              onClick={() => setShowPreview(true)}
              aria-label={`Preview ${title}`}
            >
              Preview
            </button>

            <a
              href={openUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...styles.btn, ...styles.btnPrimary }}
            >
              Open
            </a>

            <a
              href={downloadUrl}
              download
              style={{ ...styles.btn, ...styles.btnPrimary }}
            >
              Download
            </a>
          </div>
        </div>

        {showPreview && (
          <div
            style={styles.modalBackdrop}
            onClick={() => setShowPreview(false)}
            role="dialog"
            aria-modal="true"
          >
            <div
              style={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowPreview(false)}
                style={styles.closeBtn}
                aria-label="Close preview"
              >
                Close
              </button>
              {/* Lazy-load iframe only when modal open */}
              <iframe
                src={previewUrl}
                title={`Preview - ${title}`}
                style={styles.iframe}
                allowFullScreen
              />
            </div>
          </div>
        )}
      </>
    );
  };

  // Data arrays (unchanged) — we'll pass raw links into PreviewCard (it handles extraction)
  const lectures = [
    {
      title: "Lecture 1",
      link: "https://drive.google.com/file/d/1JBIXoDShwnPzjBzBLGtPJEaTpzAQP-ci/view?usp=drive_link",
      name: "Number System",
    },
    {
      title: "Lecture 2",
      link: "https://drive.google.com/file/d/1Gw2jG8s_DR4PZtRx_pJME3LN5DK_oErX/view?usp=drive_link",
      name: "Binary Arith",
    },
    {
      title: "Lecture 3",
      link: "https://drive.google.com/file/d/1r1CLLL7OzOsmhTe_nKxDsKWt0eqQM3DG/view?usp=drive_link",
      name: "Boolean",
    },
    {
      title: "Lecture 4",
      link: "https://drive.google.com/file/d/1_aKDpOwJT57S-7fdGrqsh6FiMoR8nb4v/view?usp=drive_link",
      name: "Duality",
    },
    {
      title: "Lecture 5",
      link: "https://drive.google.com/file/d/1b4-loe780e3CN48WTijANZ8RKl00Kuuy/view?usp=drive_link",
      name: "K-Maps",
    },
    {
      title: "Lecture 6",
      link: "https://drive.google.com/file/d/1igvYcn7m12cx_34Or9topqJ_MVPz0ghb/view?usp=drive_link",
      name: "NAND - NOR",
    },
    {
      title: "Lecture 7",
      link: "https://drive.google.com/file/d/1MSrHfxh5Yb4BXC57TgJ9TvEpH57l4Pd0/view?usp=drive_link",
      name: "Design",
    },
    {
      title: "Lecture 8",
      link: "https://drive.google.com/file/d/1cmKlXBQy6vYm_hxsRviSU4cG1-HQgUXv/view?usp=drive_link",
      name: "Circuits",
    },
    {
      title: "Lecture 9",
      link: "https://drive.google.com/file/d/1IQjouyjklLlRxdV-1ZXFGuSY0mk6HGNF/view?usp=drive_link",
      name: "Flip Flops",
    },
  ];

  const lectures1 = [
    {
      title: "Lecture 1",
      link: "https://drive.google.com/file/d/1K10ToWc8pmsyeTJEnHs2idCXdf8W70Xf/view?usp=drive_link",
      name: "Chapter 1",
    },
    {
      title: "Lecture 2",
      link: "https://drive.google.com/file/d/14DQ7ljpOSMf9X4O44wRVOIs5lM7-f2_9/view?usp=drive_link",
      name: "Chapter 2.1",
    },
    {
      title: "Lecture 3",
      link: "https://drive.google.com/file/d/1274b-leLwRIz233iGPfjeoqP-tBe2spJ/view?usp=drive_link",
      name: "Chapter 2.2",
    },
    {
      title: "Lecture 4",
      link: "https://drive.google.com/file/d/1nYE7rbuQDFJydsvZ96B56fDpGS9oB8ZA/view?usp=drive_link",
      name: "Chapter 2.3",
    },
    {
      title: "Lecture 5",
      link: "https://drive.google.com/file/d/1nYE7rbuQDFJydsvZ96B56fDpGS9oB8ZA/view?usp=drive_link",
      name: "Chapter 3",
    },
    {
      title: "Lecture 4",
      link: "https://drive.google.com/file/d/1nYE7rbuQDFJydsvZ96B56fDpGS9oB8ZA/view?usp=drive_link",
      name: "Chapter 2.3",
    },
    {
      title: "Lecture 4",
      link: "https://drive.google.com/file/d/1nYE7rbuQDFJydsvZ96B56fDpGS9oB8ZA/view?usp=drive_link",
      name: "Chapter 2.3",
    },
  ];

  // top-level styles
  const pageStyles = {
    container: { overflowX: "hidden" },
    main: { maxWidth: "100%", overflowX: "hidden", paddingBottom: 40 },
    heroImageWrap: { textAlign: "center", margin: "20px 0" },
    heroImg: {
      maxWidth: "90%",
      height: "auto",
      borderRadius: 12,
      display: "inline-block",
      objectFit: "cover",
      loading: "lazy",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: 20,
      padding: "0 10px",
      width: "100%",
      boxSizing: "border-box",
    },
  };

  return (
    <>
      <div id="container" style={pageStyles.container}>
        <div className="light-rays">
          <LightRays
            raysOrigin="top-center"
            raysColor="white"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={30}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.05}
            distortion={0.05}
            className="custom-rays"
          />
        </div>

        <main id="content" style={pageStyles.main}>
          <h1
            className="welcome-text"
            style={{ textAlign: "center", padding: "0 10px" }}
          >
            <ShinyText
              text="Welcome To Softians Website"
              disabled={false}
              speed={3}
              className="custom-className"
            />
          </h1>

          {/* Use <img> for hero (lighter and better on mobile) */}
          <div style={pageStyles.heroImageWrap}>
            <img
              src={L}
              alt="Algorithm hero"
              style={pageStyles.heroImg}
              loading="lazy"
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              textAlign: "center",
              flexDirection: "column",
              marginBottom: "2%",
            }}
          >
            <h1>
              <ClickSpark
                sparkColor="#fff"
                sparkSize={20}
                sparkRadius={30}
                sparkCount={8}
                duration={400}
              >
                <BlurText
                  text="Logic"
                  delay={150}
                  animateBy="letters"
                  direction="top"
                  style={{ color: "#fff", fontSize: "3rem", fontWeight: "700" }}
                />
              </ClickSpark>
            </h1>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 10px",
              marginBottom: 16,
            }}
          >
            <PreviewCard
              title="Book"
              name="Logic Book"
              link="https://drive.google.com/file/d/1eyOXj-3kGn3-lucsxJ3duJihGsrTagfn/view?usp=drive_link"
            />
          </div>

          <h1 style={{ textAlign: "center", width: "100%", padding: "0 10px" }}>
            Chapters
          </h1>
          <div className="cards-grid">
            {lectures.map((l) => (
              <div key={l.title}>
                <PreviewCard title={l.title} link={l.link} name={l.name} />
              </div>
            ))}
          </div>
          <h1
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem", // space between icon and text
              width: "100%",
              textAlign: "center",
              padding: "20px 10px 0 10px",
              fontSize: "clamp(1.2rem, 4vw, 2rem)",
              fontWeight: 700,
            }}
          >
            <YouTubeIcon style={{ fontSize: "1.5em", flexShrink: 0 }} />
            YouTube Explanation
          </h1>

          <div
            style={{
              padding: "0 10px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              alignItems: "center", // center videos
            }}
          >
            <div style={{ width: "100%", maxWidth: 900, aspectRatio: "16/9" }}>
              <YouTubeResource
                title="Dr.Sari Awwad"
                embedUrl="https://www.youtube.com/embed/oQyWX21ghMM?si=IhkJYqSiFEzV_3FE"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div style={{ width: "100%", maxWidth: 900, aspectRatio: "16/9" }}>
              <YouTubeResource
                title="Dr.Ahmad Qawasmeh"
                embedUrl="https://www.youtube.com/embed/y3ZNOaSOySw?si=qpy_Y2DakZDZy0W2"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>

          <h1
            style={{
              textAlign: "center",
              width: "100%",
              padding: "20px 10px 0 10px",
              marginTop: "3%",
            }}
          >
            <WhatsAppIcon /> WhatsApp Group <br />
            <div
              style={{
                width: 200,
                height: 200,
                margin: "20px auto",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <img
                src={all}
                alt="WhatsApp Group"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                loading="lazy"
              />
            </div>
            <a
              href="https://chat.whatsapp.com/IpnKyeQBPeDBmsoTCYgTEP?mode=ems_copy_t"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: 10,
                padding: "10px 20px",
                background: "transparent",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 600,
                marginBottom: "4%",
              }}
            >
              Join Group
            </a>
          </h1>

          <div className="contact" style={{ padding: "0 10px" }}>
            <h3 style={{ textAlign: "center" }}>Contact US :</h3>
            <div
              className="social-links"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                marginTop: 10,
                gap: 10,
              }}
            >
              <button
                className="social-btn"
                style={{ background: "none", border: "none" }}
              >
                <a
                  href="https://www.facebook.com/share/g/17GrEYsQpL/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Our Facebook"
                >
                  <Magnet padding={50} disabled={false} magnetStrength={5}>
                    <FacebookRoundedIcon />
                  </Magnet>
                </a>
              </button>

              <button
                className="social-btn"
                style={{ background: "none", border: "none" }}
              >
                <a
                  href="https://www.youtube.com/@SOFTIANS_Channel"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Our YouTube"
                >
                  <Magnet padding={50} disabled={false} magnetStrength={5}>
                    <YouTubeIcon />
                  </Magnet>
                </a>
              </button>

              <button
                className="social-btn"
                style={{ background: "none", border: "none" }}
              >
                <a
                  href="https://www.linkedin.com/company/softinas-hu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Our LinkedIn"
                >
                  <Magnet padding={50} disabled={false} magnetStrength={5}>
                    <LinkedInIcon />
                  </Magnet>
                </a>
              </button>

              <button
                className="social-btn"
                style={{ background: "none", border: "none" }}
              >
                <a
                  href="https://www.instagram.com/softians.hu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Our Instagram"
                >
                  <Magnet padding={50} disabled={false} magnetStrength={5}>
                    <InstagramIcon />
                  </Magnet>
                </a>
              </button>

              <button
                className="social-btn"
                style={{ background: "none", border: "none" }}
              >
                <a
                  href="https://whatsapp.com/channel/0029Vb6kQp46xCSNzwrb2I1A"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Our Whatsapp"
                >
                  <Magnet padding={50} disabled={false} magnetStrength={5}>
                    <WhatsAppIcon />
                  </Magnet>
                </a>
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
