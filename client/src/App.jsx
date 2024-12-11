import "./styles/app.scss";

import Canvas from "./components/Canvas";
import SettingsBar from "./components/SettingsBar";
import Toolbar from "./components/Toolbar";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/:id"
        element={
          <>
            <Toolbar />
            <SettingsBar />
            <Canvas />
          </>
        }
      />
      <Route
        path="/"
        element={
          <>
            <Toolbar />
            <SettingsBar />
            <Canvas />
            <Navigate to={`/f${(+new Date()).toString(16)}`} replace />
          </>
        }
      ></Route>
    </Routes>
    // <div className="app">
    //   <Toolbar />
    //   <SettingsBar />
    //   <Canvas />
    // </div>
  );
}

export default App;
