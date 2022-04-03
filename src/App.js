import { Fragment, useState } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Restore, AddAPhoto } from "@material-ui/icons";
import { jsonMock } from "./assets/mockData";

const App = () => {
  const [modelGLB, setModelGLB] = useState(jsonMock.linksGLB[0]);
  const [modelUSDZ, setModelUSDZ] = useState(jsonMock.linksUSDZ[0]);

  const onSelectModel = (glb, usdz) => {
    setModelGLB(glb);
    setModelUSDZ(usdz);
  };

  return (
    <Fragment>
      <model-viewer 
      ar ar-modes="webxr scene-viewer quick-look" 
      camera-controls 
      src="https://res.cloudinary.com/dhq1ehjl0/image/upload/v1648311566/poly_z9fssa.glb" 
      alt="A 3D model of an astronaut"
      auto-rotate
      style={{ width: "100vw", height: "90vh" }}
      >
        <button slot="ar-button" styles="background-color: white; border-radius: 4px; border: none; position: absolute; top: 16px; right: 16px; ">
          👋 Activate AR
        </button>
      </model-viewer>
    </Fragment>

  );
};

export default App;
