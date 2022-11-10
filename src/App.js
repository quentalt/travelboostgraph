import React from "react";
import { Gitgraph, templateExtend } from "@gitgraph/react";
import './App.css'


let options = {
  template: templateExtend("metro", {
    colors: ["orange", "blue", "turquoise", "darkgreen", "yellowgreen", "navy"],
    commit: {
      message: {
        displayAuthor: false,
        displayHash: false
      }
    }
  })
};

// const style = {
//   height: 200,
// };


function App() {
  return (
    <div className="App">
      {/* <Lottie animationData={plane} loop={true} style={style}></Lottie> */}
     <Gitgraph options={options}>
      {gitgraph => {
        const master = gitgraph.branch("Avion ✈️");
        master.commit("Init project");
        master.commit("create Bus et Metro");
        let feat1 = gitgraph.branch("Bus 🚌");
        let feat2 = gitgraph.branch("Metro 🚇");
        feat1.commit("");
        feat2.commit("");
        master.commit("create RC1");
        let release1 = gitgraph.branch("RER 🚉");
        release1.commit("");
        master.commit("create RC2");
        let release2 = gitgraph.branch("à pieds 🚶‍♀️");
        release2.commit("");
        master.commit("create F3");
        let feat3 = gitgraph.branch("Voiture 🚗");
        feat3.commit("");
        release1.merge(feat1).merge(feat2);
        release2.merge(feat3);
        master.merge(release1);
        release2.merge(master);
        master.merge(release2);
        master.commit("");
      }}
    </Gitgraph>
    </div>
  );
}

export default App;
