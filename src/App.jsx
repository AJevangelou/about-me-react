import "./App.css";
import Navbar from "./components/Navbar";
import React, { Suspense } from "react";
import Home from "./pages/Home";

// import studio from "@theatre/studio";
// import extension from "@theatre/r3f/dist/extension";

// studio.extend(extension);
// studio.initialize();

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <section>
        <Suspense fallback={null}>
          <Home />
        </Suspense>
      </section>
    </React.Fragment>
  );
}

export default App;
