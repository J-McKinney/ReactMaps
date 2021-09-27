// // import logo from "./logo.svg";
// import Maps from "./Components/Maps/maps";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//     <Maps />
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
// import { render } from "react-dom";
import Map from "./Components/Maps/maps";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Map
        id="myMap"
        options={{
          center: { lat: -28.024, lng: 140.887 },
          zoom: 3,
        }}
      />
    );
  }
}

export default App;
