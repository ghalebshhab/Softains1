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
export default function Algo() {
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
                  text="Algorithim "
                  delay={150}
                  animateBy="letters"
                  direction="top"
                  className="text-2xl mb-8"
                />{" "}
              </ClickSpark>{" "}
            </h1>
          </div>
          <div
            className="disc"
            style={{
              border: "1px solid #bdbdbd",
              borderRadius: "10px",
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h1
              style={{
                direction: "rtl",

                textAlign: "center",
              }}
            >
              وصف المادة
            </h1>
            <h4>
              دراسة طرق حل المشكلات بكفاءة باستخدام الخوارزميات، وفهم طرق
              التحليل وتصميم الحلول البرمجية
            </h4>

            <h1
              style={{
                direction: "rtl",

                textAlign: "center",
              }}
            >
              الأفاريج
            </h1>
            <h4>ال أ+ ما بتنزل عن ال 90</h4>

            <h1
              style={{
                direction: "rtl",

                textAlign: "center",
              }}
            >
              المصادر
            </h1>
            <h4>
              <a
                href="https://drive.google.com/file/d/1fVjbYIDlEnBMawcHLk2VeEl6qDze59jl/view?usp=drive_link"
                target="_blank"
              >
                Book
              </a>
            </h4>
            <h4>
              <a
                href="https://drive.google.com/drive/folders/1z_SyMltqIwsR13MBV4Rzvj3xvJVAUpbK?usp=drive_link"
                target="_blank"
              >
                Dr.Sahar Slides
              </a>
            </h4>
            <h4>
              <a
                href="https://drive.google.com/drive/folders/1LcXNdDfbVEUsxP9FyNPbMnVekv9Ypyvz?usp=drive_link"
                target="_blank"
              >
                Dr.Ahmad Slides
              </a>
            </h4>
            <hr style={{ width: "80%" }} />
            <h1
              style={{
                direction: "rtl",

                textAlign: "center",
              }}
            >
              قروب المادة
            </h1>
            <h4>
              <a
                href="https://chat.whatsapp.com/IkltvLoGncHD3w4gDA5j0E"
                target="_blank"
              >
                View Group
              </a>
            </h4>
            <hr style={{ width: "80%" }} />
            <h1
              style={{
                direction: "rtl",

                textAlign: "center",
              }}
            >
              شرح اليوتيوب
            </h1>
            <h4>
              <a
                href="https://youtu.be/NQ5dTqPOvk0?si=OqpSe4J41vu8-Zhe"
                target="_blank"
              >
                Dr.Sahar
              </a>
            </h4>
            <h4>
              <a
                href="https://youtu.be/ip3Tmg0rjLQ?si=CaJMSS2w2HnrurNT"
                target="_blank"
              >
                Dr.Ahmad
              </a>
            </h4>
            <hr style={{ width: "80%" }} />
          </div>
          <hr style={{ marginBottom: "3%" }} />

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
      </div>
    </>
  );
}
