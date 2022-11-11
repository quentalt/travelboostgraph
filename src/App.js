import React from "react";
import { Gitgraph, Orientation, templateExtend } from "@gitgraph/react";
import './App.css'

let options = {
  orientation: Orientation.Horizontal,
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

function App() {

  return (
    <div className="App">
        <table cellSpacing={1}>
  <thead>
    <tr>
      <th>Couleurs</th>
      <th>&nbsp;Noms des branches</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{backgroundColor: 'orange'}} />
      <td>Avion</td>
      <img src="https://i.giphy.com/media/ZlRmaLNJgoRIA/giphy.gif" alt="avion"  width="100" />
    </tr>
    <tr>
      <td style={{backgroundColor: 'blue'}} />
      <td>Bus</td>
      <img src="https://i.giphy.com/media/26Ff6AZnf3ee0dDr2/200.gif" alt="Bus" width="100"></img>
    </tr>
    <tr>
      <td style={{backgroundColor: 'turquoise'}} />
      <td>Metro</td>
      <img src="https://i.giphy.com/media/TfulAoqx6YKDm4MLSd/giphy.gif" alt="Metro" width="100"></img>
    </tr>
    <tr>
      <td style={{backgroundColor: 'darkgreen'}} />
      <td>RER</td>
      <img src="https://i.giphy.com/media/cknTBuscMA9xqxQZlW/giphy.gif" alt="RER" width="90" height="90"></img>
    </tr>
    <tr>
      <td style={{backgroundColor: 'yellowgreen'}} />
      <td>à pieds</td>
      <img src="https://i.giphy.com/media/XZn9yRAjnVEQ0/200w.gif" alt="pieds" width="90"></img>
    </tr>
    <tr>
      <td style={{backgroundColor: 'navy'}} />
      <td>Voiture</td>
      <img src="https://i.giphy.com/media/Ft23xmPuh3MhG/200w.gif" alt="voiture"  width="100" />
    </tr>
  </tbody>
</table>
     <Gitgraph options={options} >
      {gitgraph => {
        const master = gitgraph.branch("Avion ✈️");
        master.commit("");
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
