import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

        <Route path="/Mobileapp" element={<Mobile2 />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cplus" element={<Cplus />} />
        <Route path="/Java" element={<Java />} />
        <Route path="/android" element={<Android />} />
        <Route path="/dataStructures" element={<Datastruct />} />
        <Route path="/visualProgramming" element={<Vb />} />
        <Route path="/softwared" element={<Softwared />} />
        <Route path="/spm" element={<Spm />} />
        <Route path="/uml" element={<Uml />} />
        <Route path="/web" element={<Web />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/documentation" element={<Doc />} />
        <Route path="/design" element={<Design />} />
        <Route path="/requirements" element={<Req />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/maintanance" element={<Mainte />} />
        <Route path="/javaadvance" element={<JavaAdv />} />
        <Route path="/database" element={<Db />} />
        <Route path="/algorithms" element={<Algo />} />
        <Route path="/security" element={<Security />} />
        <Route path="/analysis" element={<Analy />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/gui" element={<Gui />} />
        <Route path="/network" element={<Net />} />
        <Route path="/os" element={<Os />} />
        <Route path="/org" element={<Org />} />
        <Route path="/calc" element={<Calc />} />
        <Route path="/statistics" element={<Statis />} />
        <Route path="/linear" element={<Lin />} />
        <Route path="/numerical" element={<Num />} />
        <Route path="/discrete" element={<Desc />} />
        <Route path="/grad1" element={<Grad1 />} />
        <Route path="/grad2" element={<Grad2 />} />
        <Route path="/spi" element={<Spi />} />
        <Route path="/intern" element={<Intern />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="*" element={<Card />} />
        <Route path="/developer" element={<DeveloperRedirect />} />
      </Routes>
      <VisitorCounter />
      <div style={{ width: "100%", margin: "3% 0" }}>
        <h2 style={{ textAlign: "center" }}>Developed By : Ghaleb Shhab</h2>
      </div>
    </>
  );
}

export default App;
