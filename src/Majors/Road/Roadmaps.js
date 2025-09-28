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
import LanguageIcon from "@mui/icons-material/Language";
import DescriptionIcon from "@mui/icons-material/Description";
// For Option 2:
import Chip from "@mui/material/Chip";
// For Option 3:
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import RR from "./Images/road-map.png";
import andro from "./Images/android.png";
import front from "./Images/front-end-programming.png";
import vue from "./Images/Vue.png";
import Ang from "./Images/Angular.png";
import frame from "./Images/framework.png";
import back from "./Images/backend.png";
import springLogo from "./Images/java.png";
import nodeLogo from "./Images/Node.png";
import pythonLogo from "./Images/python.png";
import mongoLogo from "./Images/mongo.png";
import postgresLogo from "./Images/postgre.png";
import mysqlLogo from "./Images/mysql.png";
import db from "./Images/database.png";
export default function Roadmaps() {
  const prog = [
    {
      name: "HTML",
      photo: Html,
      col: "linear-gradient(135deg, #e34c26, #f06529)",
      desc: "لغة لبناء هيكل صفحات الويب وتحديد عناصرها الأساسية",
      youtubeLink: "https://youtu.be/6QAELgirvjs?si=o2YA2we15EQGLMLF",
      w3Link: "https://www.w3schools.com/html/default.asp",
      more: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      id: 1,
    },
    {
      name: "Css",
      photo: Css,
      col: " linear-gradient(135deg, #264de4, #2965f1)",
      desc: "لغة لتنسيق وتصميم صفحات الويب وجعلها جذّابة بصريًا",
      youtubeLink: "https://www.youtube.com/watch?v=X1ulCwyhCVM",
      w3Link: "https://www.w3schools.com/css/default.asp",
      more: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      id: 2,
    },
    {
      name: "Java Script",
      photo: Js,
      col: "black",
      desc: "لغة برمجة لإضافة التفاعل والحركة إلى صفحات الويب",
      youtubeLink: "https://youtu.be/TbHeHAyAV7Q?si=GyUvd5O4EJzwX7Hm",
      w3Link: "https://www.w3schools.com/js/default.asp",
      more: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      id: 3,
    },
  ];
  const frames = [
    {
      name: "React Js",
      photo: Reac,
      col: "linear-gradient(135deg, #61dafb, #21a1f1)",
      desc: "مكتبة جافاسكربت لبناء واجهات مستخدم تفاعلية وسريعة",
      youtubeLink: "https://youtu.be/ihRRf3EjTV8?si=w0stFK_NmgfKNbZt",
      w3Link: "https://www.w3schools.com/react/default.asp",
      more: "https://react.dev/",
      id: 4,
    },
    {
      name: "Vue Js",
      photo: vue,
      col: "linear-gradient(135deg, #42b883, #35495e)",
      desc: "إطار عمل خفيف وتدريجي   لبناء واجهات المستخدم وتطبيقات الويب أحادية الصفحة",
      youtubeLink: "https://youtu.be/ihRRf3EjTV8?si=w0stFK_NmgfKNbZt",
      w3Link: "https://www.w3schools.com/react/default.asp",
      more: "https://vuejs.org",
      id: 5,
    },
    {
      name: "Angular Js",
      photo: Ang,
      col: "linear-gradient(135deg, #dd0031, #c3002f)",
      desc: "إطار عمل قوي    لتطوير تطبيقات ويب كبيرة وديناميكية",
      youtubeLink: "https://youtu.be/ihRRf3EjTV8?si=w0stFK_NmgfKNbZt",
      w3Link: "https://www.w3schools.com/react/default.asp",
      more: "https://angular.dev",
      id: 6,
    },
  ];
  const backs = [
    {
      name: "Python (Django)",
      photo: pythonLogo, // ضع صورة شعار بايثون
      col: "linear-gradient(135deg, #3776ab, #ffd43b)",
      desc: "إطار عمل قوي وشامل بلغة بايثون لتطوير تطبيقات الويب بسرعة وكفاءة",
      youtubeLink: "https://youtu.be/F5mRW0jo-U4",
      w3Link: "https://www.w3schools.com/django/",
      more: "https://www.djangoproject.com/",
      id: 1,
    },
    {
      name: "Java (Spring Boot)",
      photo: springLogo, // ضع صورة شعار Spring Boot
      col: "linear-gradient(135deg, #e76f00, #5382a1)",
      desc: "إطار عمل مرن وشائع بلغة جافا لبناء تطبيقات ويب قوية وقابلة للتوسع",
      youtubeLink: "https://youtu.be/vtPkZShrvXQ",
      w3Link: "https://www.w3schools.com/java/",
      more: "https://spring.io/projects/spring-boot",
      id: 2,
    },
    {
      name: "Node.js (Express)",
      photo: nodeLogo, // ضع صورة شعار Node.js
      col: "linear-gradient(135deg, #68a063, #3c873a)",
      desc: "     لبناء تطبيقات خادم سريعة وخفيفة باستخدام يئة تشغيل تعتمد على اكسبريس جافا سكريبت",
      youtubeLink: "https://youtu.be/Oe421EPjeBE",
      w3Link: "https://www.w3schools.com/nodejs/",
      more: "https://expressjs.com/",
      id: 3,
    },
  ];
  const databases = [
    {
      name: "MongoDB",
      photo: mongoLogo, // ضع صورة شعار مونغو دي بي
      col: "linear-gradient(135deg, #FFD700, #000000, #1E90FF)",
      desc: "قاعدة بيانات غير علائقية مرنة تعتمد على الوثائق وتُستخدم بكثرة مع تطبيقات الويب الحديثة",
      youtubeLink: "https://youtu.be/-56x56UppqQ",
      w3Link: "https://www.w3schools.com/mongodb/",
      more: "https://www.mongodb.com/",
      id: 1,
    },
    {
      name: "MySQL",
      photo: mysqlLogo, // ضع صورة شعار ماي إس كيو إل
      col: "linear-gradient(135deg, #5A4FCF, #4A90E2);",
      desc: "نظام لإدارة قواعد البيانات العلائقية مفتوح المصدر ويُستخدم على نطاق واسع في مختلف التطبيقات",
      youtubeLink: "https://youtu.be/9ylj9NR0Lcg",
      w3Link: "https://www.w3schools.com/mysql/",
      more: "https://www.mysql.com/",
      id: 2,
    },
    {
      name: "PostgreSQL",
      photo: postgresLogo, // ضع صورة شعار بوستجري إس كيو إل
      col: "black",
      desc: "قاعدة بيانات علائقية قوية ومتقدمة تدعم الاستعلامات المعقدة وتتعامل مع البيانات الضخمة بكفاءة عالية",
      youtubeLink: "https://youtu.be/qw--VYLpxG4",
      w3Link: "https://www.w3schools.com/postgresql/",
      more: "https://www.postgresql.org/",
      id: 3,
    },
  ];

  const an = [
    {
      name: "Android",
      photo: andro,
      col: "",
      desc: "",
      youtubeLink: "",
      other: "",
    },
    {
      name: "Android",
      photo: andro,
      col: "",
      desc: "",
      youtubeLink: "",
      other: "",
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
          <h1 style={{ textAlign: "center" }}>Our Road Maps</h1>
          <div
            style={{
              backgroundImage: `url(${RR})`, // RR must be imported correctly
              backgroundPosition: "center",
              backgroundSize: "contain",
              width: "100%",
              height: "300px", // Must set a height or the div has 0 height
              backgroundRepeat: "no-repeat",
              marginBottom: "5%",
            }}
          ></div>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {" "}
            <h1 style={{ marginBottom: "3%" }}> Web Development</h1>
            <div className="roads">
              <h1
                style={{
                  marginBottom: "3%",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={front}
                  alt="icon"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
                Front End
              </h1>
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
                          <Typography sx={{ color: "black", mb: 2 }}>
                            {p.desc}
                          </Typography>

                          {/* Links as Chips */}
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 1,
                              mb: 2,
                            }}
                          >
                            <a
                              href={p.youtubeLink}
                              target="_blank"
                              style={{ textDecoration: "none" }}
                            >
                              <Button
                                variant="outlined"
                                startIcon={<YouTubeIcon />}
                                sx={{
                                  borderColor: "black",
                                  color: "black",
                                  "&:hover": {
                                    background: p.col,
                                    color: "white",
                                  },
                                }}
                              >
                                YouTube
                              </Button>
                            </a>

                            <a
                              href={p.w3Link}
                              target="_blank"
                              style={{ textDecoration: "none" }}
                            >
                              <Button
                                variant="outlined"
                                startIcon={<LanguageIcon />}
                                sx={{
                                  borderColor: "black",
                                  color: "black",
                                  "&:hover": {
                                    background: p.col,
                                    color: "white",
                                  },
                                }}
                              >
                                W3Schools
                              </Button>
                            </a>
                          </Box>

                          <Button
                            variant="contained"
                            sx={{ background: p.col, width: "100%" }}
                            onClick={() => {
                              window.open(p.more, "_blank");
                            }}
                          >
                            Learn More
                          </Button>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                ))}
              </div>
              <h1
                style={{
                  marginBottom: "3%",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={frame}
                  alt="icon"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
                Frame Works
              </h1>
              <div className="web">
                {frames.map((p) => (
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
                          <Typography sx={{ color: "black", mb: 2 }}>
                            {p.desc}
                          </Typography>

                          {/* Links as Chips */}
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 1,
                              mb: 2,
                            }}
                          >
                            <a
                              href={p.youtubeLink}
                              target="_blank"
                              style={{ textDecoration: "none" }}
                            >
                              <Button
                                variant="outlined"
                                startIcon={<YouTubeIcon />}
                                sx={{
                                  borderColor: "black",
                                  color: "black",
                                  "&:hover": {
                                    background: p.col,
                                    color: "white",
                                  },
                                }}
                              >
                                YouTube
                              </Button>
                            </a>

                            <a
                              href={p.w3Link}
                              target="_blank"
                              style={{ textDecoration: "none" }}
                            >
                              <Button
                                variant="outlined"
                                startIcon={<LanguageIcon />}
                                sx={{
                                  borderColor: "black",
                                  color: "black",
                                  "&:hover": {
                                    background: p.col,
                                    color: "white",
                                  },
                                }}
                              >
                                W3Schools
                              </Button>
                            </a>
                          </Box>

                          <Button
                            variant="contained"
                            sx={{ background: p.col, width: "100%" }}
                            onClick={() => {
                              window.open(p.more, "_blank");
                            }}
                          >
                            Learn More
                          </Button>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <div className="roads">
              <h1
                style={{
                  marginBottom: "3%",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={db}
                  alt="icon"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
                Data Base
              </h1>
              <div className="web">
                {databases.map((p) => (
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
                          <Typography sx={{ color: "black", mb: 2 }}>
                            {p.desc}
                          </Typography>

                          {/* Links as Chips */}
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 1,
                              mb: 2,
                            }}
                          >
                            <a
                              href={p.youtubeLink}
                              target="_blank"
                              style={{ textDecoration: "none" }}
                            >
                              <Button
                                variant="outlined"
                                startIcon={<YouTubeIcon />}
                                sx={{
                                  borderColor: "black",
                                  color: "black",
                                  "&:hover": {
                                    background: p.col,
                                    color: "white",
                                  },
                                }}
                              >
                                YouTube
                              </Button>
                            </a>

                            <a
                              href={p.w3Link}
                              target="_blank"
                              style={{ textDecoration: "none" }}
                            >
                              <Button
                                variant="outlined"
                                startIcon={<LanguageIcon />}
                                sx={{
                                  borderColor: "black",
                                  color: "black",
                                  "&:hover": {
                                    background: p.col,
                                    color: "white",
                                  },
                                }}
                              >
                                W3Schools
                              </Button>
                            </a>
                          </Box>

                          <Button
                            variant="contained"
                            sx={{ background: p.col, width: "100%" }}
                            onClick={() => {
                              window.open(p.more, "_blank");
                            }}
                          >
                            Learn More
                          </Button>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <div className="roads">
              <h1
                style={{
                  marginBottom: "3%",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={back}
                  alt="icon"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
                Back End
              </h1>
              <div className="web">
                {backs.map((p) => (
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
                          <Typography sx={{ color: "black", mb: 2 }}>
                            {p.desc}
                          </Typography>

                          {/* Links as Chips */}
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 1,
                              mb: 2,
                            }}
                          >
                            <a
                              href={p.youtubeLink}
                              target="_blank"
                              style={{ textDecoration: "none" }}
                            >
                              <Button
                                variant="outlined"
                                startIcon={<YouTubeIcon />}
                                sx={{
                                  borderColor: "black",
                                  color: "black",
                                  "&:hover": {
                                    background: p.col,
                                    color: "white",
                                  },
                                }}
                              >
                                YouTube
                              </Button>
                            </a>

                            <a
                              href={p.w3Link}
                              target="_blank"
                              style={{ textDecoration: "none" }}
                            >
                              <Button
                                variant="outlined"
                                startIcon={<LanguageIcon />}
                                sx={{
                                  borderColor: "black",
                                  color: "black",
                                  "&:hover": {
                                    background: p.col,
                                    color: "white",
                                  },
                                }}
                              >
                                W3Schools
                              </Button>
                            </a>
                          </Box>

                          <Button
                            variant="contained"
                            sx={{ background: p.col, width: "100%" }}
                            onClick={() => {
                              window.open(p.more, "_blank");
                            }}
                          >
                            Learn More
                          </Button>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                ))}
              </div>
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
