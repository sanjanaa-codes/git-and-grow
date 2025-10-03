React Router:
Library for navigation in SPA without reloads.

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}


Q: Why React Router?
A: Enables multiple “pages” in SPA without full reload.
__________________________________________________________________________________
20. Maintenance by Facebook (Meta)

React is maintained by Meta + open-source community.

Interview Qs

Q: Who maintains React?
A: Meta (Facebook) and contributors.

Q: Why does this matter?
A: Ensures regular updates, trust, and stability.
__________________________________________________________________________________
21. Components

Building blocks of React apps. Two types: Functional (preferred), Class.

Interview Qs

Q: What are components in React?
A: Independent, reusable UI pieces.

Q: Functional vs Class component?
A: Functional are simpler, use hooks; class are older with lifecycle methods.
__________________________________________________________________________________
22. No Reload / No Re-render

React updates only changed parts via Virtual DOM, not whole page.

Interview Qs

Q: Why React doesn’t reload the page?
A: It updates UI using Virtual DOM diffing.

Q: What is re-render in React?
A: Updating component when props/state change.
__________________________________________________________________________________
23. Browser Loads Faster

SPA + Virtual DOM + reusability = faster UI updates.

Interview Qs

Q: Why are React apps fast?
A: Virtual DOM, SPA structure, reusable components.
__________________________________________________________________________________

✅ Quick Summary Mindmap for Interviews

Node.js → runtime
VS Code → editor + extensions
npx/npm → create/manage projects
RFC/RAFC → functional components
src/App.js/index.js → structure
SPA → one page, fast updates
React Router → navigation without reload
Redux → state management
Components → reusable UI
Meta → maintains React
