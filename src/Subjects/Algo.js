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
import L from "./img/Algo.png";
import { Card } from "@mui/material";
import BookCard from "./BookCard";
import YouTubeResource from "./Youtube";
import all from "./img/Softians IT Community/2) Softians IT - اجباري تخصص/20.png";

export default function Algo() {
  const lectures = [
    {
      title: "Lecture 1",
      link: "https://drive.google.com/file/d/1B4oNdYVcZhWn9aWRieAqghbimLN7qbdX/view?usp=drive_link",
      name: "Introduction",
    },
    {
      title: "Lecture 2",
      link: "https://drive.google.com/file/d/1zlNUcG81LiXW7R6rt-K_F7unvTBGudo0/view?usp=drive_link",
      name: "Asymptotic",
    },
    {
      title: "Lecture 3",
      link: "https://drive.google.com/file/d/1VWy9fHji74KoirtuBHUnw98vP9TDp3EI/view?usp=drive_link",
      name: "Insertion Sort",
    },
    {
      title: "Lecture 4",
      link: "https://drive.google.com/file/d/19TvzkHheEreB-_Z-m_l_X9fHffpAwdVq/view?usp=drive_link",
      name: "Recurrencess",
    },
    {
      title: "Lecture 5.1",
      link: "https://drive.google.com/file/d/1aubAfAIZrQBS0hb7UHbwuF5TJ22t7Aqz/view?usp=drive_link",
      name: "Merge Sort",
    },
    {
      title: "Lecture 5.2",
      link: "https://drive.google.com/file/d/1TRFl5adElmetnsmr0yLdocGUpw21mdgC/view?usp=drive_link",
      name: "Quick Sort",
    },
    {
      title: "Lecture 6",
      link: "https://drive.google.com/file/d/18pO9lCcyv8ZK2pmyf5xe1heqY0H4gj43/view?usp=drive_link",
      name: "Heap Sort",
    },
    {
      title: "Lecture 7",
      link: "https://drive.google.com/file/d/1yG5l0NV_cDc_bNsLo15YFRq_9YnMnMSU/view?usp=drive_link",
      name: "Bst & Rbt",
    },
    {
      title: "Lecture 8.1",
      link: "https://drive.google.com/file/d/1Finw0egZApWDAD6xYoPNKQ4yuWyiuk64/view?usp=drive_link",
      name: "LCS",
    },
    {
      title: "Lecture 8.2",
      link: "https://drive.google.com/file/d/1EUFbgdzu6992__BwrBCtaKBwp1FdBjlK/view?usp=drive_link",
      name: "MCP",
    },
    {
      title: "Lecture 9",
      link: "https://drive.google.com/file/d/14zQoRNEMn5TSzRp0LhqKKdhH2ySxT1kN/view?usp=drive_link",
      name: "Greedy Algo",
    },
    {
      title: "Lecture 10",
      link: "https://drive.google.com/file/d/1FmcMiadHSTI2OjPCz0IjNJLirrOXh1Jh/view?usp=drive_link",
      name: "Graphs",
    },
    {
      title: "Lecture 11",
      link: "https://drive.google.com/file/d/1QXeL5coXsZn3jndS7pLbloApZSqm133Q/view?usp=drive_link",
      name: "MST",
    },
    {
      title: "Lecture 12",
      link: "https://drive.google.com/file/d/1kW8UHPMyWOxzbnMPuoua_rcs7om8tQ_v/view?usp=drive_link",
      name: "Shortest Path",
    },
  ];
  const lectures1 = [
    {
      title: "Lecture 1",
      link: "https://drive.google.com/file/d/1DTzNYIg_4djYLqlyZq9zVWVap6OKD7rj/view?usp=drive_link",
      name: "Introduction",
    },
    {
      title: "Lecture 2",
      link: "https://drive.google.com/file/d/1KTEnC5CykXC4JMOeBS6nz485S-p-G608/view?usp=drive_link",
      name: "Complexity",
    },
    {
      title: "Lecture 3",
      link: "https://drive.google.com/file/d/1OKt1G1hrgp_GtFAvzhqhrlhir1cZzXm1/view?usp=drive_link",
      name: "Binary Search",
    },
    {
      title: "Lecture 4",
      link: "https://drive.google.com/file/d/1XzwMgg5CoqITloWqWextGqrZCBI7Yo6S/view?usp=drive_link",
      name: "Recurrencess",
    },
    {
      title: "Lecture 5",
      link: "https://drive.google.com/file/d/1ul0AGBtNDMUp_7krsVpvBl63HHU9Ji0P/view?usp=drive_link",
      name: "Insert+Merge",
    },

    {
      title: "Lecture 6",
      link: "https://drive.google.com/file/d/1vvhCtoPfHoQCk756jsanLgZQXtDRl4PT/view?usp=drive_link",
      name: "Quick Sort",
    },
    {
      title: "Lecture 7",
      link: "https://drive.google.com/file/d/1zzOXD_iLlD4dNJVk8Wk4Yz8TpV9tYhw5/view?usp=drive_link",
      name: "Heap Sort",
    },
    {
      title: "Lecture 8.1",
      link: "https://drive.google.com/file/d/15eMbwH8k5irvWHnKFzCW4hkPknTLapvC/view?usp=drive_link",
      name: "RBT 1",
    },
    {
      title: "Lecture 8.2",
      link: "https://drive.google.com/file/d/179xkiyS6J231B-ln3OnhvGy0V4CIbEFP/view?usp=drive_link",
      name: "RBT 2",
    },
    {
      title: "Lecture 9",
      link: "https://drive.google.com/file/d/1DeI1dgb_fe4TsojlNrB8x1Ka0iGI7oBD/view?usp=drive_link",
      name: "Dynamic Prog",
    },
  ];
  return (
    <>
      <div id="container" style={{ overflowX: "hidden" }}>
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

        <main id="content" style={{ maxWidth: "100%", overflowX: "hidden" }}>
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

          <div
            className="mainn"
            style={{
              backgroundImage: `url(${L})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              width: "100%",
              height: "60vh",
              maxHeight: "400px",
              backgroundColor: "transparent",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              justifyContent: "center", // horizontal center
              alignItems: "center", // vertical center
              // full viewport height
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
                  text="Algorithm"
                  delay={150}
                  animateBy="letters"
                  direction="top"
                  style={{
                    color: "#fff",
                    fontSize: "3rem",
                    fontWeight: "700",
                  }}
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
              marginBottom: "0%",
              padding: "0 10px",
            }}
          >
            <BookCard
              title="Algorithm 3rd Edition"
              link="https://drive.google.com/file/d/1fVjbYIDlEnBMawcHLk2VeEl6qDze59jl/view?usp=drive_link"
              name="Book"
            />
          </div>
          <h1 style={{ textAlign: "center", width: "100%", padding: "0 10px" }}>
            Dr.Sahar Slides
          </h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              padding: "0 10px",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            {lectures.map((l) => {
              return (
                <div key={l.title}>
                  <BookCard title={l.title} link={l.link} name={l.name} />
                </div>
              );
            })}
          </div>
          <h1 style={{ textAlign: "center", width: "100%", padding: "0 10px" }}>
            Dr.Ahmad Slides
          </h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              padding: "0 10px",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            {lectures1.map((l) => {
              return (
                <div key={l.title}>
                  <BookCard title={l.title} link={l.link} name={l.name} />
                </div>
              );
            })}
          </div>
          <h1 style={{ textAlign: "center", width: "100%", padding: "0 10px" }}>
            <YouTubeIcon /> YouTube Explanation
          </h1>

          <div style={{ padding: "0 10px" }}>
            <YouTubeResource
              title="Dr.Sahar"
              embedUrl="https://www.youtube.com/embed/NQ5dTqPOvk0?si=F7o-H6e6UMH5RjBI"
            />
            <YouTubeResource
              title="Dr.Ahmad"
              embedUrl="https://www.youtube.com/embed/ip3Tmg0rjLQ?si=II5PRblq5ElixIfZ"
            />
          </div>
          <h1 style={{ textAlign: "center", width: "100%", padding: "0 10px" }}>
            <WhatsAppIcon /> WhatsApp Group <br />
            <div
              style={{
                backgroundImage: `url(${all})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                borderRadius: "50%",
                width: "200px",
                height: "200px",
                margin: "20px auto",
                maxWidth: "90%",
              }}
            ></div>
            <a
              href="https://chat.whatsapp.com/IkltvLoGncHD3w4gDA5j0E"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "10px",
                padding: "10px 20px",
                background: "transparent",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "600",
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
                marginTop: "10px",
                gap: "10px",
              }}
            >
              <button
                className="social-btn"
                style={{ background: "none", border: "none" }}
              >
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
              <button
                className="social-btn"
                style={{ background: "none", border: "none" }}
              >
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
              <button
                className="social-btn"
                style={{ background: "none", border: "none" }}
              >
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
              <button
                className="social-btn"
                style={{ background: "none", border: "none" }}
              >
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
              <button
                className="social-btn"
                style={{ background: "none", border: "none" }}
              >
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
