import CircleIcon from "@mui/icons-material/Circle";
import TuneIcon from "@mui/icons-material/Tune";
import SplitText from "./Animation/SplitText";
import LightRays from "./Animation/LightRays";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ShinyText from "./Animation/ShinyText";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ClickSpark from "./Animation/ClickSpark";
import ShapeBlur from "./Animation/ShapeBlur";
import SpotlightCard from "./Animation/SpotlightCard";
import { Link, Routes, Route } from "react-router-dom";

import "./Test.css";
export default function Test() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <>
      <div
        id="Container"
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "100vw",
          height: "100vh",
          overflow: "auto",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "relative",
            zIndex: "-1",
            display: "inline",
          }}
        >
          <LightRays
            style={{ height: "100vh" }}
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
        <div
          id="Header"
          style={{
            display: "flex",
            flexDirection: "row",
            position: "fixed",
            width: "100vw",
            zindex: "1000",
          }}
        >
          <div
            id="name"
            style={{
              width: "90vw",
              display: "flex",
              alignSelf: "flex-start",
              maxHeight: "20vh",
              height: "10vh",
            }}
          >
            <CircleIcon
              style={{
                color: "#bdbdbd",
                display: "flex",
                alignSelf: "center",
              }}
            />
            <h1
              style={{ display: "flex", alignSelf: "center", color: "#bdbdbd" }}
            >
              <SplitText
                style={{}}
                text="Softians"
                className="text-2xl font-semibold text-center"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </h1>
          </div>
          <div
            id="threeicon"
            style={{ width: "10vw", display: "flex", alignSelf: "flex-end" }}
          >
            <button
              id="home"
              style={{
                border: "none",
                alignSelf: "center",
                backgroundColor: "transparent",
              }}
            >
              <HomeRoundedIcon
                style={{
                  color: "#bdbdbd",
                  backgroundColor: "transparent",
                  fontSize: "37px",
                }}
              />
            </button>
          </div>
        </div>
        <div
          id="content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
            width: "100vw",
            position: "absolute",
          }}
        >
          <h1
            id="Shiny1"
            style={{
              display: "flex",
              alignSelf: "center",
              color: "white",
            }}
          >
            <ShinyText
              text="Welcome To Softians Website"
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </h1>
          <div
            id="Majors"
            style={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
            }}
          >
            <h1 style={{ alignSelf: "center", display: "flex" }}>
              <ClickSpark
                sparkColor="#fff"
                sparkSize={20}
                sparkRadius={30}
                sparkCount={8}
                duration={400}
              >
                Majors
              </ClickSpark>
            </h1>
            <div
              style={{
                alignSelf: "center",
                display: "flex",
                alignContent: "center",
                flexDirection: "column",
              }}
            >
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="/Software"
                style={{ textDecoration: "none", color: "#bdbdbd" }}
              >
                {" "}
                <h1 style={{ textAlign: "center" }}>
                  {" "}
                  <SpotlightCard
                    style={{ alignSelf: "center", width: "30vw" }}
                    className="custom-spotlight-card"
                    spotlightColor="rgba(0, 229, 255, 0.2)"
                  >
                    Software
                  </SpotlightCard>
                </h1>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="/Computers"
                style={{ textDecoration: "none", color: "#bdbdbd" }}
              >
                {" "}
                <h1 style={{ textAlign: "center" }}>
                  {" "}
                  <SpotlightCard
                    style={{ alignSelf: "center", width: "30vw" }}
                    className="custom-spotlight-card"
                    spotlightColor="rgba(0, 229, 255, 0.2)"
                  >
                    Computer Sicence
                  </SpotlightCard>
                </h1>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="/Artificial"
                style={{ textDecoration: "none", color: "#bdbdbd" }}
              >
                {" "}
                <h1 style={{ textAlign: "center" }}>
                  {" "}
                  <SpotlightCard
                    style={{ alignSelf: "center", width: "30vw" }}
                    className="custom-spotlight-card"
                    spotlightColor="rgba(0, 229, 255, 0.2)"
                  >
                    Artificial Intellegence
                  </SpotlightCard>
                </h1>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="/Cyper"
                style={{ textDecoration: "none", color: "#bdbdbd" }}
              >
                {" "}
                <h1 style={{ textAlign: "center" }}>
                  {" "}
                  <SpotlightCard
                    style={{ alignSelf: "center", width: "30vw" }}
                    className="custom-spotlight-card"
                    spotlightColor="rgba(0, 229, 255, 0.2)"
                  >
                    Cyper Security
                  </SpotlightCard>
                </h1>
              </Link>
            </div>
          </div>
        </div>
        <div style={{ color: "white" }}>Hello bro</div>
        <div
          id="Bottom"
          style={{
            alignSelf: "flex-end",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            zIndex: "1000",
            justifyContent: "center",
            position: "fixed",
            bottom: "0px",
          }}
        >
          <div
            id="Links"
            style={{
              display: "flex",
              alignSelf: "flex-end",
              flexDirection: "row",
              justifyContent: "center", // ✅ centers horizontally
              alignItems: "center", // optional spacing from bottom
            }}
          >
            <button
              style={{
                border: "none",
                backgroundColor: "transparent",
                display: "flex",
              }}
            >
              <FacebookRoundedIcon
                style={{ color: "white", fontSize: "32px" }}
              />
            </button>
            <button style={{ border: "none", backgroundColor: "transparent" }}>
              <YouTubeIcon style={{ color: "white", fontSize: "32px" }} />
            </button>
            <button
              style={{
                border: "none",
                backgroundColor: "transparent",
                display: "flex",
              }}
            >
              <LinkedInIcon style={{ color: "white", fontSize: "32px" }} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
