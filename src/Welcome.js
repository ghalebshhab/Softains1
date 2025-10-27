import { Link } from "react-router-dom";
import Button from "./Animation/Button";
import Silk from "./Animation/Silk";
import "./Welcome.css";
export default function Welcome() {
  return (
    <>
      <div className="container">
        <div className="light-rays">
          <Silk
            speed={5}
            scale={1}
            color="#444444"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>
        <div className="pict"></div>
        <div className="wel">
          <h2>Welcome To Softians Website .</h2>
        </div>
        <div className="Buts">
          <Link to={"/Home"}>
            {" "}
            <Button></Button>
          </Link>
        </div>
      </div>
    </>
  );
}
