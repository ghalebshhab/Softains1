import LightRays from "./Animation/LightRays";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SplitText from "./Animation/SplitText";
import ShinyText from "./Animation/ShinyText";
import Button from "@mui/material/Button";
import * as React from "react";
import "./Test3.css";
import { useEffect, useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import GpaCircleChart from "./Animation/GpaCircleChart";
import Header from "./Header";

import "./Mobile.css";
import ClickSpark from "./Animation/ClickSpark";
import SpotlightCard from "./Animation/SpotlightCard";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Magnet from "./Animation/Magent";
import BlurText from "./Animation/BlurText";
import StickerPeel from "./Animation/StickerPeel";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import Sapp from "./Sapp";
import SideBar from "./Animation/SideBar";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
export default function Mobile2() {
  const gradeScale = {
    "الرمز الحالي": "",
    "A+": 4.0,
    A: 3.75,
    "A-": 3.5,
    "B+": 3.25,
    B: 3.0,
    "B-": 2.75,
    "C+": 2.5,
    C: 2.25,
    "C-": 2.0,
    "D+": 1.75,
    D: 1.5,
    "D-": 1.25,
    F: 0.0,
  };
  const pastgradeScale = {
    "الرمز السابق": "",

    "C+": 2.5,
    C: 2.25,
    "C-": 2.0,
    "D+": 1.75,
    D: 1.5,
    "D-": 1.25,
    F: 0.0,
  };

  const [open, setOpen] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [delid, setDelid] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [hours, sethours] = useState();
  const totalHoursRef = useRef(0);
  const [pastgpa, setpast] = useState();
  // 🔹 حساب المعدل GPA

  const calculateGpa = () => {
    let totalPoints = pastgpa * hours; // النقاط السابقة
    let totalHours = hours; // الساعات السابقة

    subjects.forEach((subj) => {
      const gradeNow = gradeScale[subj.gradeNow] || 0;
      const gradePrev = gradeScale[subj.gradePrev] || null;

      if (gradePrev !== null) {
        // إذا المادة معادة: نطرح النقاط القديمة ونضيف الجديدة
        totalPoints -= gradePrev * subj.hours;
        totalPoints += gradeNow * subj.hours;

        // ما بنزيد الساعات، لأنها محسوبة أصلاً في prevHours
      } else {
        // مادة جديدة: نضيف نقاط وساعات
        totalPoints += gradeNow * subj.hours;
        totalHours += subj.hours;
      }
    });
    totalHoursRef.current = totalHours;
    return totalHours === 0 ? 0 : totalPoints / totalHours;
  };

  const gpa = calculateGpa();

  // 🔹 حذف مادة
  function del(id) {
    setSubjects(subjects.filter((s) => s.id !== id));
  }

  return (
    <>
      {/* Dialog لعرض النتيجة */}
      <Dialog open={open} onClose={handleClose} className="result-dialog">
        <DialogContent>
          <DialogContentText>
            <GpaCircleChart gpa={gpa} />
            <h3 className="gpa-result">Your GPA: {gpa.toFixed(2)} / 4</h3>
            <h3 className="hours-result">
              Total Hours: {totalHoursRef.current}
            </h3>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className="close-btn">
            Close
          </Button>
        </DialogActions>
      </Dialog>

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

        <div id="content">
          <h1 className="welcome-text">
            <ShinyText
              text="Welcome To Softians Website"
              disabled={false}
              speed={3}
              className="custom-className"
            />
          </h1>

          <div className="gpa-app">
            <div className="input-section">
              <div className="input-group">
                <label className="input-label">المعدل التراكمي</label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="المعدل التراكمي السابق"
                  value={pastgpa}
                  onChange={(e) => setpast(Number(e.target.value))}
                  className="gpa-input"
                />
              </div>
              <div className="input-group">
                <label className="input-label">الساعات المقطوعة</label>
                <input
                  type="number"
                  placeholder="الساعات المقطوعة"
                  value={hours}
                  onChange={(e) => {
                    sethours(Number(e.target.value));
                  }}
                  className="hours-input"
                />
              </div>
            </div>

            <h3 className="subjects-title">مواد الفصل</h3>

            {subjects.map((subj, index) => (
              <div key={subj.id} className="subject-row">
                <button className="delete-btn" onClick={() => del(subj.id)}>
                  <DeleteForeverIcon />
                </button>

                <select
                  className="grade-select prev-grade"
                  value={subj.gradePrev}
                  onChange={(e) => {
                    const newSubjects = [...subjects];
                    newSubjects[index].gradePrev = e.target.value;
                    setSubjects(newSubjects);
                  }}
                >
                  {Object.keys(pastgradeScale).map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>

                <select
                  className="grade-select current-grade"
                  value={subj.gradeNow}
                  onChange={(e) => {
                    const newSubjects = [...subjects];
                    newSubjects[index].gradeNow = e.target.value;
                    setSubjects(newSubjects);
                  }}
                >
                  {Object.keys(gradeScale).map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>

                <input
                  type="number"
                  min="1"
                  max="3"
                  className="subject-hours"
                  value={subj.hours}
                  onChange={(e) => {
                    const newSubjects = [...subjects];
                    newSubjects[index].hours = parseInt(e.target.value) || 0;
                    setSubjects(newSubjects);
                  }}
                  placeholder="ساعات المادة"
                />
              </div>
            ))}

            <div className="action-buttons">
              <Button
                variant="contained"
                className="add-btn"
                onClick={() => {
                  setSubjects([
                    ...subjects,
                    {
                      id: delid,
                      gradeNow: "A",
                      gradePrev: "الرمز السابق",
                      hours: 3,
                    },
                  ]);
                  setDelid(delid + 1);
                }}
              >
                Add
              </Button>
              <Button
                variant="contained"
                className="calculate-btn"
                onClick={handleClickOpen}
              >
                Calculate
              </Button>
            </div>
          </div>
        </div>
        <div className="contact" style={{ color: "#bdbdbd" }}>
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
