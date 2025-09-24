import React, { useState } from "react";
import SplitText from "./Animation/SplitText";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import "./Test.css";
import { Link } from "react-router-dom";
import Home from "./Animation/Home";
import TemporaryDrawer from "./Animation/TemporaryDrawer";
const Header = React.memo(() => {
  console.log("Header rendered"); // للتأكد
  const [Open, setop] = useState(false);
  return (
    <>
      <TemporaryDrawer open={Open} setOpen={setop} />
      <header id="header">
        <div className="logo-container">
          <div className="circle-icon"></div>
          <h1 className="logo-text">
            <SplitText
              text="Softians"
              className="text-2xl font-semibold text-center"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
            />
          </h1>
        </div>

        <button
          className="home-btn"
          onClick={() => {
            setop(true);
          }}
        >
          <span
            className="material-icons"
            style={{ color: "#ffff", fontSize: "16px" }}
          >
            <Home open={Open} toggle={() => setop(!Open)} />
          </span>
        </button>
      </header>
    </>
  );
});

export default Header;
