import * as React from "react";
import BlurText from "../../Animation/BlurText";
import Hyperspeed from "../../Animation/Hyperspeed";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Magnet from "../../Animation/Magent";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ClickSpark from "../../Animation/ClickSpark";
import ShinyText from "../../Animation/ShinyText";
import "../../Test3.css";
import "./roads.css";
import Html from "./Images/html-5.png";
import Css from "./Images/css-3.png";
import Js from "./Images/Js.png";
import Reac from "./Images/React.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
export default function Roadmaps() {
  const prog = [
    {
      name: "HTML",
      photo: Html,
      col: "linear-gradient(135deg, #e34c26, #f06529)",
      desc: "لغة لبناء هيكل صفحات الويب وتحديد عناصرها الأساسية",
    },
    {
      name: "Css",
      photo: Css,
      col: " linear-gradient(135deg, #264de4, #2965f1)",
      desc: "لغة لتنسيق وتصميم صفحات الويب وجعلها جذّابة بصريًا",
    },
    {
      name: "Java Script",
      photo: Js,
      col: "black",
      desc: "لغة برمجة لإضافة التفاعل والحركة إلى صفحات الويب",
    },
    {
      name: "React Js",
      photo: Reac,
      col: "linear-gradient(135deg, #61dafb, #21a1f1)",
      desc: "مكتبة جافاسكربت لبناء واجهات مستخدم تفاعلية وسريعة",
    },
  ];
  return (
    <>
      <div id="container">
        <div className="light-rays">
          <Hyperspeed
            effectOptions={{
              onSpeedUp: () => {},
              onSlowDown: () => {},
              distortion: "turbulentDistortion",
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 4,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.03, 400 * 0.2],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0xffffff,
                brokenLines: 0xffffff,
                leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                sticks: 0x03b3c3,
              },
            }}
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
            <div className="roads">
              <h1> Web Development</h1>
              <div className="web">
                {prog.map((p) => (
                  <div className="Lang" key={p.id}>
                    {" "}
                    {/* Always add a key prop */}
                    <Card
                      sx={{
                        width: "100%",
                        maxWidth: 300,
                        backgroundColor: "",
                        color: "black",
                      }}
                    >
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          image={p.photo}
                          alt={p.name}
                          sx={{
                            objectFit: "cover",
                            objectPosition: "center",
                            width: "100%",
                            height: "50%", // Fixed height for consistency
                          }}
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ color: "black" }}
                          >
                            {p.name}
                          </Typography>
                          <Typography sx={{ color: "black" }}>
                            {p.desc}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "black" }}>
                            <Button
                              variant="contained"
                              sx={{ background: p.col }}
                            >
                              About It
                            </Button>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                ))}
              </div>
              <h1>C#</h1>
              <section>
                <p>About the C#</p>
              </section>
              <h1>Android</h1>
              <section>
                <p>About the Android</p>
              </section>
            </div>
          </div>

          <div className="contact">
            <h3 style={{ textAlign: "center", marginTop: "10%" }}>
              Contact US :
            </h3>
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
      </div>
    </>
  );
}
