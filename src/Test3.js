import "./Test3.css";
import LightRays from "./Animation/LightRays";
import SplitText from "./Animation/SplitText";
import ShinyText from "./Animation/ShinyText";
import ClickSpark from "./Animation/ClickSpark";
import SpotlightCard from "./Animation/SpotlightCard";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Magnet from "./Animation/Magent";
import BlurText from "./Animation/BlurText";
import StickerPeel from "./Animation/StickerPeel";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import Sapp from "./Sapp";
import { useState } from "react";
import SideBar from "./Animation/SideBar";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Header from "./Header";
import VisitorCounter from "./VisitorCounter";
import LogoLoop from "./Animation/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { Typography } from "@mui/material";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

// Alternative with image sources
const imageLogos = [
  {
    src: "/logos/company1.png",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    src: "/logos/company2.png",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "/logos/company3.png",
    alt: "Company 3",
    href: "https://company3.com",
  },
];

export default function Test3() {
  const [click, setclick] = useState(false);
  return (
    <>
      <div id="container">
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

        <main id="content">
          <h1 className="welcome-text" style={{ marginBottom: "4%" }}>
            <ShinyText
              text="Welcome To Softians Website"
              disabled={false}
              speed={3}
              className="custom-className"
            />
          </h1>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {" "}
            <h1>
              {" "}
              <ClickSpark
                sparkColor="#fff"
                sparkSize={20}
                sparkRadius={30}
                sparkCount={8}
                duration={400}
              >
                <BlurText
                  text="About US"
                  delay={150}
                  animateBy="letters"
                  direction="top"
                  className="text-2xl mb-8"
                />{" "}
              </ClickSpark>{" "}
            </h1>
          </div>
          <section className="majors-section">
            <h2 className="section-title">
              {" "}
              <p style={{ fontSize: "16px" }}>
                {" "}
                The First Service Team For Sofware Engineering at the Hashemite
                Uneversity , Established in 2025{" "}
              </p>
            </h2>
            <div className="majors-grid" style={{ width: "70%" }}>
              <div className="major-card">
                <h3>
                  <a href="/About" target="_blank" title="About Us">
                    <SpotlightCard
                      className="custom-spotlight-card"
                      spotlightColor="rgba(0, 229, 255, 0.2)"
                    >
                      More About US
                    </SpotlightCard>
                  </a>
                </h3>
              </div>
            </div>

            <div className="majors-grid" style={{ width: "70%" }}>
              <div className="major-card">
                <h3>
                  {" "}
                  <Link
                    to="/Software"
                    target="blank"
                    title="Go to Software Page"
                  >
                    {" "}
                    <SpotlightCard
                      style={{ alignSelf: "center", width: "30vw" }}
                      className="custom-spotlight-card"
                      spotlightColor="rgba(0, 229, 255, 0.2)"
                    >
                      Software
                    </SpotlightCard>
                  </Link>
                </h3>
              </div>
            </div>
          </section>
          <div>
            <VisitorCounter />
          </div>
          <Sapp />
          <div
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              height: "90vh",
              flexDirection: "column",
            }}
          >
            {" "}
            <h3 style={{ textAlign: "center", marginBottom: "1%" }}>
              <Link to="/roadmaps">
                <SpotlightCard
                  style={{ alignSelf: "center" }}
                  className="custom-spotlight-card"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  Our RoadMaps
                </SpotlightCard>
              </Link>
            </h3>
            <div className="ro"></div>
          </div>
          <div className="contact">
            <h3 style={{ textAlign: "center" }}>Contact US :</h3>
            <div
              className="social-links"
              style={{
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <button className="social-btn">
                <span className="material-icons">
                  <a
                    href="https://www.facebook.com/share/g/17GrEYsQpL/"
                    target="blank"
                    title="Our Facebook"
                  >
                    {" "}
                    <Magnet padding={50} disabled={false} magnetStrength={5}>
                      <FacebookRoundedIcon />
                    </Magnet>
                  </a>
                </span>
              </button>
              <button className="social-btn">
                <span className="material-icons">
                  <a
                    href="https://www.youtube.com/@SOFTIANS_Channel"
                    target="blank"
                    title="Our YouTube"
                  >
                    {" "}
                    <Magnet padding={50} disabled={false} magnetStrength={5}>
                      <YouTubeIcon />
                    </Magnet>
                  </a>
                </span>
              </button>
              <button className="social-btn">
                <span className="material-icons">
                  <a
                    href="https://www.linkedin.com/company/softinas-hu/"
                    target="blank"
                    title="Our LinkedIn"
                  >
                    {" "}
                    <Magnet padding={50} disabled={false} magnetStrength={5}>
                      <LinkedInIcon />
                    </Magnet>
                  </a>
                </span>
              </button>
              <button className="social-btn">
                <span className="material-icons">
                  <a
                    href="https://www.instagram.com/softians.hu/"
                    target="blank"
                    title="Our Instagram"
                  >
                    {" "}
                    <Magnet padding={50} disabled={false} magnetStrength={5}>
                      <InstagramIcon />
                    </Magnet>
                  </a>
                </span>
              </button>
              <button className="social-btn">
                <span className="material-icons">
                  <a
                    href="https://whatsapp.com/channel/0029Vb6kQp46xCSNzwrb2I1A"
                    target="blank"
                    title="Our Whatsapp"
                  >
                    {" "}
                    <Magnet padding={50} disabled={false} magnetStrength={5}>
                      <WhatsAppIcon />
                    </Magnet>
                  </a>
                </span>
              </button>
            </div>
          </div>
        </main>

        {/* <footer id="footer">
          <div className="social-links">
            <button className="social-btn">
              <span className="material-icons">
                <a
                  href="https://www.facebook.com/share/g/17GrEYsQpL/"
                  target="blank"
                  title="Our Facebook"
                >
                  {" "}
                  <Magnet padding={50} disabled={false} magnetStrength={5}>
                    <FacebookRoundedIcon />
                  </Magnet>
                </a>
              </span>
            </button>
            <button className="social-btn">
              <span className="material-icons">
                <a
                  href="https://www.youtube.com/@SOFTIANS_Channel"
                  target="blank"
                  title="Our YouTube"
                >
                  {" "}
                  <Magnet padding={50} disabled={false} magnetStrength={5}>
                    <YouTubeIcon />
                  </Magnet>
                </a>
              </span>
            </button>
            <button className="social-btn">
              <span className="material-icons">
                <a
                  href="https://www.linkedin.com/company/softinas-hu/"
                  target="blank"
                  title="Our LinkedIn"
                >
                  {" "}
                  <Magnet padding={50} disabled={false} magnetStrength={5}>
                    <LinkedInIcon />
                  </Magnet>
                </a>
              </span>
            </button>
            <button className="social-btn">
              <span className="material-icons">
                <a
                  href="https://www.instagram.com/softians.hu/"
                  target="blank"
                  title="Our Instagram"
                >
                  {" "}
                  <Magnet padding={50} disabled={false} magnetStrength={5}>
                    <InstagramIcon />
                  </Magnet>
                </a>
              </span>
            </button>
          </div>
        </footer> */}
      </div>
    </>
  );
}
