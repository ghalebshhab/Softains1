import LightRays from "../Animation/LightRays";
import SplitText from "../Animation/SplitText";
import "../Test.css";
import ShinyText from "../Animation/ShinyText";
import ClickSpark from "../Animation/ClickSpark";
import SpotlightCard from "../Animation/SpotlightCard";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Magnet from "../Animation/Magent";
import BlurText from "../Animation/BlurText";
import StickerPeel from "../Animation/StickerPeel";
import { Link, Route, Routes } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import Sapp from "../Sapp";
import Logo from "../Dark.png";
import Logo1 from "../Lightnew.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Header from "../Header";
import "./soft.css";
import App from "../App";
import Button from "../Animation/Butto";
export default function Software() {
  const subjects = [
    // إجباري كلية
    { name: "C++ & Lab", path: "Cplus" },
    {
      name: "Java 1 & Lab",
      path: "Java",
      youtube: "https://youtu.be/L_W07rp4-2c?si=E_VkUDoRS--TNCRU",
    },
    { name: "Data Structures", path: "dataStructures" },
    { name: "Visual Programming", path: "visualProgramming" },
    { name: "Software", path: "softwared" },
    { name: "SPM", path: "spm" },
    { name: "UML", path: "uml" },
    { name: "Web", path: "web" },
    { name: "Documentation", path: "documentation" },
    { name: "Design", path: "design" },
    { name: "Testing", path: "testing" },
    { name: "Requirements", path: "requirements" },
    { name: "Measurement", path: "measurement" },
    { name: "Quality", path: "quality" },
    { name: "Maintanance", path: "maintanance" },

    // إجباري تخصص
    { name: "Java Advance", path: "javaAdvance" },
    { name: "Database", path: "database" },
    { name: "Lab Database", path: "labdb" },
    { name: "Algorithms", path: "algorithms" },
    { name: "Security", path: "security" },
    { name: "AI", path: "ai" },
    { name: "Analysis", path: "analysis" },
    { name: "Cloud Computing", path: "cloud" },
    { name: "Android", path: "android" },
    { name: "GUI", path: "gui" },

    // اختياري تخصص
    { name: "Network", path: "network" },
    { name: "Operating System", path: "os" },
    { name: "IoT Security", path: "iotSecurity" },
    { name: "ORG ", path: "org" },

    // مواد من كليات اخرى
    { name: "Calculus 1", path: "calc" },
    { name: "Statistics", path: "statistics" },
    { name: "Linear 1", path: "linear" },
    { name: "Numerical", path: "numerical" },
    { name: "Discrete", path: "discrete" },
    { name: "Logic", path: "logic" },

    // بعد 80 ساعة
    { name: "Graduation project 1", path: "grad1" },
    { name: "Graduation project 2", path: "grad2" },
    { name: "Special topics", path: "spi" },
    { name: "Internship", path: "intern" },
  ];
  const pages = [
    { name: "C++ & Lab" },
    { name: "Java 1 & Lab" },
    { name: "Data Structures", path: "dataStructures" },
    { name: "Visual Programming", path: "visualProgramming" },
    { name: "Software", path: "softwared" },
    { name: "SPM", path: "spm" },
    { name: "UML", path: "uml" },
    { name: "Web", path: "web" },
    { name: "Documentation", path: "documentation" },
    { name: "Design", path: "design" },
    { name: "Testing", path: "testing" },
    { name: "Requirements", path: "requirements" },
    { name: "Measurement", path: "measurement" },
    { name: "Quality", path: "quality" },
    { name: "Maintanance", path: "maintanance" },

    // إجباري تخصص
    { name: "Java Advance", path: "javaAdvance" },
    { name: "Database & Lab", path: "database" },
    { name: "Algorithms", path: "algorithms" },
    { name: "Security", path: "security" },
    { name: "AI", path: "ai" },
    { name: "Analysis", path: "analysis" },
    { name: "Cloud Computing", path: "cloud" },
    { name: "Android", path: "android" },
    { name: "GUI", path: "gui" },

    // اختياري تخصص
    { name: "Network", path: "network" },
    { name: "Operating System", path: "os" },
    { name: "IoT Security", path: "iotSecurity" },
    { name: "ORG ", path: "org" },

    // مواد من كليات اخرى
    { name: "Calculus 1", path: "calc" },
    { name: "Statistics", path: "statistics" },
    { name: "Linear 1", path: "linear" },
    { name: "Numerical", path: "numerical" },
    { name: "Discrete", path: "discrete" },
    { name: "Logic", path: "logic" },

    // بعد 80 ساعة
    { name: "Graduation project 1", path: "grad1" },
    { name: "Graduation project 2", path: "grad2" },
    { name: "Special topics", path: "spi" },
    { name: "Internship", path: "intern" },
  ];

  const subs = subjects.map((sub, index) => {
    return (
      <>
        <div style={{ margin: "3%" }}>
          <Link to={"/" + sub.path}>
            {" "}
            <SpotlightCard
              style={{ width: "40%" }}
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              {sub.name}
            </SpotlightCard>
          </Link>
        </div>

        {console.log(sub.path)}
      </>
    );
  });

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
          <h1 className="welcome-text">
            <ShinyText
              text="Welcome To Softians Website"
              disabled={false}
              speed={3}
              className="custom-className"
            />
          </h1>
          <div
            className="images"
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={Logo}
              alt="Logo"
              width="80%"
              style={{
                borderRadius: "10%",
                marginBottom: "2%",
                marginTop: "2%",
              }}
            />
            <a
              href={Logo}
              download="Software-Plan Dark.jpg" // Name the file for download
              style={{
                display: "inline-block",
                padding: "10px 20px",
                background: "transparent",
                color: "#fff",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "600",
                marginBottom: "2%",
              }}
            >
              <Button />
            </a>

            <img
              src={Logo1}
              alt="Logo"
              width="80%"
              style={{ borderRadius: "10%", marginBottom: "2%" }}
            />
            <a
              href={Logo1}
              download="Software-Plan Light.jpg" // Name the file for download
              style={{
                display: "inline-block",
                padding: "10px 20px",
                background: "transparent",
                color: "#fff",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              <Button />
            </a>
            <hr style={{ marginBottom: "2%", marginTop: "2%", width: "90%" }} />

            <div className="Subjects">{subs}</div>
          </div>
        </main>
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
      </div>
    </>
  );
}
