import React from "react";
import {
  FaApple,
  FaGooglePlay,
  FaBolt,
  FaLock,
  FaSync,
  FaBell,
  FaStar,
  FaRocket,
} from "react-icons/fa";
import LanguageIcon from "@mui/icons-material/Language";
import "./AppDownload.css"; // We'll create this CSS file
import { Link } from "react-router-dom";
import Loader from "./Animation/Loader";

const Sapp = () => {
  return (
    <div className="app-download-container">
      <div className="app-download-header">
        <h1>Download Our Mobile App</h1>
        <p>Get the full experience on your smartphone</p>
      </div>

      <div className="app-download-content">
        <div className="phone-mockup">
          <div className="phone">
            <div className="screen">
              <div className="app-icon"></div>
              <div className="app-name">SOFTIANS</div>
              <div className="app-tagline">Calculate Your GPA</div>
              <a
                href="https://play.google.com/store/apps/details?id=com.mobix.softiansteam"
                className="download-btn app-store"
              >
                <FaGooglePlay className="store-icon" />
                <div className="btn-text">
                  <span className="small-text">Download on the</span>
                  <span>Goggle Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="download-info">
          <div className="download-buttons">
            <a
              href="https://play.google.com/store/apps/details?id=com.mobix.softiansteam"
              className="download-btn google-play"
            >
              <FaGooglePlay className="store-icon" />
              <div className="btn-text">
                <span className="small-text">Get it on</span>
                <span>Google Play</span>
              </div>
            </a>
            <Link to="/Mobileapp" className="download-btn google-play">
              <LanguageIcon className="store-icon" />
              <div className="btn-text">
                <span className="small-text">Get it As</span>
                <span>Website</span>
              </div>
            </Link>
          </div>

          <div className="qr-code">
            <div className="qr-img"></div>
            <Loader />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sapp;
