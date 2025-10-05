import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Test from "./Test";
import Test3 from "./Test3";
import Software from "./Majors/Software";
import LightRays from "./Animation/LightRays";
import GpaCal from "./Animation/GpaCal";
import Mobile2 from "./Mobile2";
import About from "./About";
import Cplus from "./Subjects/Cplus";
import Java from "./Subjects/Java";
import Datastruct from "./Subjects/Datastruct";
import Android from "./Subjects/Android";
import VisitorCounter from "./VisitorCounter";
import Vb from "./Subjects/Vb";
import Softwared from "./Subjects/Softwared";
import Spm from "./Subjects/Spm";
import Uml from "./Subjects/Uml";
import Web from "./Subjects/Web";
import Doc from "./Subjects/Doc";
import Design from "./Subjects/Design";
import Testing from "./Subjects/Testing";
import Req from "./Subjects/Req";
import Quality from "./Subjects/Quality";
import Mainte from "./Subjects/Mainte";
import JavaAdv from "./Subjects/JavaAdv";
import Db from "./Subjects/Db";
import Algo from "./Subjects/Algo";
import Security from "./Subjects/Sec";
import Analy from "./Subjects/Analy";
import Cloud from "./Subjects/Cloud";
import Gui from "./Subjects/Gui";
import Net from "./Subjects/Net";
import Os from "./Subjects/Os";
import Org from "./Subjects/Org";
import Calc from "./Subjects/Calc";
import Statis from "./Subjects/Statis";
import Lin from "./Subjects/Lin";
import Num from "./Subjects/Num";
import Desc from "./Subjects/Desc";
import Log from "./Subjects/Log";
import Grad1 from "./Subjects/Grad1";
import Grad2 from "./Subjects/Grad2";
import Spi from "./Subjects/Spi";
import Intern from "./Subjects/Intern";
import Card from "./Majors/Card";
import Header from "./Header";
import Roadmaps from "./Majors/Road/Roadmaps";
import BlurText from "./Animation/BlurText";
import Labdb from "./Subjects/Labdb";
import "./Test3.css";
function App() {
  function DeveloperRedirect() {
    React.useEffect(() => {
      window.location.href =
        "https://portfolio-ghaleb-shhabs-projects.vercel.app/";
    }, []);

    return (
      <h2 style={{ textAlign: "center", color: "white" }}>
        Redirecting to Developer Portfolio...
      </h2>
    );
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Test3 />} />
        <Route path="/Software" element={<Software />} />

        {/* Software-Related Subjects */}
        <Route path="/Software/Cplus" element={<Cplus />} />
        <Route path="/Software/Java" element={<Java />} />
        <Route path="/Software/dataStructures" element={<Datastruct />} />
        <Route path="/Software/visualProgramming" element={<Vb />} />
        <Route path="/Software/softwared" element={<Softwared />} />
        <Route path="/Software/spm" element={<Spm />} />
        <Route path="/Software/uml" element={<Uml />} />
        <Route path="/Software/web" element={<Web />} />
        <Route path="/Software/testing" element={<Testing />} />
        <Route path="/Software/documentation" element={<Doc />} />
        <Route path="/Software/design" element={<Design />} />
        <Route path="/Software/requirements" element={<Req />} />
        <Route path="/Software/quality" element={<Quality />} />
        <Route path="/Software/maintanance" element={<Mainte />} />
        <Route path="/Software/javaAdvance" element={<JavaAdv />} />
        <Route path="/Software/database" element={<Db />} />
        <Route path="/Software/labdb" element={<Labdb />} />
        <Route path="/Software/algorithms" element={<Algo />} />
        <Route path="/Software/security" element={<Security />} />
        <Route path="/Software/analysis" element={<Analy />} />
        <Route path="/Software/cloud" element={<Cloud />} />
        <Route path="/Software/gui" element={<Gui />} />
        <Route path="/Software/network" element={<Net />} />
        <Route path="/Software/os" element={<Os />} />
        <Route path="/Software/org" element={<Org />} />
        <Route path="/Software/discrete" element={<Desc />} />
        <Route path="/Software/grad1" element={<Grad1 />} />
        <Route path="/Software/grad2" element={<Grad2 />} />
        <Route path="/Software/spi" element={<Spi />} />
        <Route path="/Software/intern" element={<Intern />} />

        {/* Non-software / Other Pages */}
        <Route path="/Mobileapp" element={<Mobile2 />} />
        <Route path="/About" element={<About />} />
        <Route path="/logic" element={<Log />} />
        <Route path="/calc" element={<Calc />} />
        <Route path="/statistics" element={<Statis />} />
        <Route path="/linear" element={<Lin />} />
        <Route path="/numerical" element={<Num />} />
        <Route path="/roadmaps" element={<Roadmaps />} />

        {/* Fallback Route */}
        <Route path="*" element={<Card />} />

        <Route path="/developer" element={<DeveloperRedirect />} />
      </Routes>
      <VisitorCounter />
      <div className="copyright-container">
        <h2 className="copyright-text">
          <BlurText
            text="Copyright © 2025 Softians. All rights reserved."
            delay={150}
            animateBy="letters"
            direction="top"
          />
        </h2>
      </div>
      <div style={{ width: "100%", margin: "1% 0 3% 0" }}>
        <h2 style={{ textAlign: "center" }}>
          Developed By :<Link to="/developer"> Ghaleb Shhab</Link>
        </h2>
      </div>
    </>
  );
}

export default App;
