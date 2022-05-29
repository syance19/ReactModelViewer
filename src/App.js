import React, { Component } from "react";
import { jsonMock } from "./assets/mockData";
import Render from "./components/Render";
import Header from "./components/Header";

// const App2 = () => {
//   const [modelGLB, setModelGLB] = useState(jsonMock.linksGLB[0]);
//   const [modelUSDZ, setModelUSDZ] = useState(jsonMock.linksUSDZ[0]);

//   const onSelectModel = (glb, usdz) => {
//     setModelGLB(glb);
//     setModelUSDZ(usdz);
//   };
// }
  // render();{
  //   return (
  //     <Render />
  //   );
  // }
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        foo: "bar",
        resumeData: {}
      };
  
      // ReactGA.initialize("UA-110570651-1");
      // ReactGA.pageview(window.location.pathname);
    }
  
    // getResumeData() {
    //   $.ajax({
    //     url: "./resumeData.json",
    //     dataType: "json",
    //     cache: false,
    //     success: function(data) {
    //       this.setState({ resumeData: data });
    //     }.bind(this),
    //     error: function(xhr, status, err) {
    //       console.log(err);
    //       alert(err);
    //     }
    //   });
    // }
  
    render() {
      return (
        <div className="App">
        <Render/>
        </div>
      );
    }
  }

  export default App;
  